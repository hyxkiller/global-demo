import React from 'react';
import ReactDOM from 'react-dom';
import Intl from './intl/Intl';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'mobx-react';
import store from './mobx/store'
import 'antd/dist/antd.css'; 
import './styles/reset.scss'
import 'babel-polyfill'

ReactDOM.render(
    <Provider {...store}>
        <Intl />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
