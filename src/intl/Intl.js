import React, { Component } from 'react'
import App from '../router/App'
import { inject, observer } from 'mobx-react';
import { getCookie,setCookie } from '../utils/cookie'

// react-intl配置
import { addLocaleData, intl } from 'react-intl'
import { IntlProvider, FormattedMessage } from 'react-intl';
import en from 'react-intl/locale-data/en'
import zh from 'react-intl/locale-data/zh'

// antd国际化配置
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import en_US from 'antd/lib/locale-provider/en_US';

//引入自定义国际化语言包
const zhCN = require('../locales/zh_CN.json')
const enUS = require('../locales/en_US.json')

addLocaleData([...en, ...zh])

@inject('IntlLang')
@observer
class Intl extends Component{
    constructor(props){
        super(props)
        this.IntlLang = this.props.IntlLang;
        

    }
    componentWillMount() {
        if( !getCookie('lang') ){
            let lang = window.navigator.language;
            if(lang == 'zh') lang = 'zh_CN'
            setCookie('lang', lang)
        }
    }
    componentDidMount() {
        // console.log(this.props)
    }
    
    render() {
        let locale, messages, localeAntd, localeIntl ;
        const lang = getCookie('lang');
        // if( this.IntlLang.langStatus === 1 ) {
        //     localeIntl = 'zh';
        //     messages = zhCN;
        //     localeAntd = zh_CN;
        // } else if ( this.IntlLang.langStatus === 0 ) {
        //     localeIntl = 'en';
        //     messages = enUS;
        //     localeAntd = en_US;
        // }
        switch(lang){
            case 'zh-CN': localeIntl = 'zh';
                          messages = zhCN;
                          localeAntd = zh_CN; break;
            case 'en-US': localeIntl = 'en';
                          messages = enUS;
                          localeAntd = en_US; break;
        }
        return(
            <LocaleProvider locale={localeAntd}>
                <IntlProvider locale={localeIntl} messages={messages} >
                        <App />
                </IntlProvider>
            </LocaleProvider>
        )
    }
}
export default Intl;