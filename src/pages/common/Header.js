import React, { Component } from 'react';
import IntlLang from '../../mobx/variables/IntlLang'
import { FormattedMessage, injectIntl } from 'react-intl';
import { inject, observer } from 'mobx-react';
import { Menu, Dropdown, Icon, Popover, Button } from 'antd';
import { NavLink, Link } from 'react-router-dom'
import './styles/Header.scss'
import { getCookie, setCookie } from '../../utils/cookie'

@inject('IntlLang')
@observer
class Header extends Component {
    constructor(props) {
        super(props)
        this.IntlLang = this.props.IntlLang;
        this.state = {
            changeLang: '',  // 语言
            popoverVisible: false,   // popover状态  
            isLogin: false     // 登录状态
        }
    }

    componentWillMount(){
        
        const lang = getCookie('lang');
        switch(lang){
            case 'zh-CN': this.setState({
                            changeLang: '中文'
                          }); break;
            case 'en_US': this.setState({
                            changeLang: 'English'
                          }); break;
            
        }
    }
    
    // Dropdown改变语言
    changeLang = (e) => {
        this.setState({
            changeLang: e.item.props.children
        })
        let newLang;
        switch (e.item.props.children) {
            case '中文':  newLang = 'zh-CN'; break;
            case 'English': newLang = 'en_US'; break;
        }
        setCookie('lang', newLang)
        window.location.reload();
    }

    // support 弹框显示隐藏
    changeSupportVisibleHide = () => {
        this.setState({
            popoverVisible: false
        })
    }
    changeSupportVisibleShow = () => {
        this.setState({
            popoverVisible: true
        })
    }
    render() {
        const intl = this.props.intl;
        const contentSupport = (
            <ul onClick={this.changeSupportVisibleHide} className="support-ul" >
                <Link className="support-li" key="0" to="/support/problem">常见问题</Link>
                <Link className="support-li" key="1" to="/support/notice">网站公告</Link>
                <Link className="support-li" key="2" to="/support/feeExpalin">费率说明</Link>
                <Link className="support-li" key="3" to="/support/tools">提交工具</Link>
            </ul>
        );
        const menu = (
            <Menu onClick={(e) => {this.changeLang(e)}}>
              <Menu.Item key="0">
                中文
              </Menu.Item>
              <Menu.Item key="1">
                English
              </Menu.Item>
            </Menu>
          );
        return (
            <div className="header-content" >
                <div className="logo"></div>
                <div className="nav">
                    <NavLink className="navList" activeClassName="navListHover" to="/index">home</NavLink>
                    <NavLink className="navList" activeClassName="navListHover" to="/otc">otc</NavLink>
                    <NavLink className="navList" activeClassName="navListHover" to="/exchange">Exchange</NavLink>
                    <NavLink className="navList" activeClassName="navListHover" to="/notice">notice</NavLink>
                    <a className="navList">
                        <Popover className="support-ul" placement="bottom" 
                            content={contentSupport}
                            trigger="click" 
                            visible={this.state.popoverVisible}
                            onVisibleChange={this.changeSupportVisibleShow} >
                            Support
                            <Icon type="down" />
                        </Popover>
                    </a>
                </div>
                <div className="user">
                    { this.state.isLogin ? 
                        <div className="islogin"> 
                            <div className="funds">funds</div>
                            <div className="userList">
                                xxxxx
                            </div>
                        </div>

                        : 
                        <div className="notlogin">
                            <NavLink to="/login" >{intl.formatMessage({id: 'login'})}</NavLink>
                            <NavLink to="/register" >{intl.formatMessage({id: 'register'})}</NavLink>                    
                        </div>
                    }
                    <div className="langDropdown">
                        <Dropdown overlay={menu} trigger={['click']} placement="bottomCenter"> 
                            <a className="ant-dropdown-link" href="#">
                            {this.state.changeLang}  <Icon type="down" />
                            </a>
                        </Dropdown>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default injectIntl(Header);