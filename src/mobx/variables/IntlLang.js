import {
    observable,
    action
} from 'mobx'

class intlLang {
    @observable langStatus = 1;

    // constructor() {
    //     this.langStatus = 1
    // }
    @action changeLang(lang) {
        this.langStatus = lang
    }
}
let IntlLang = new intlLang()
export default IntlLang;