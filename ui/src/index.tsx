import React from 'react';
import ReactDOM from 'react-dom';
import './css/weui.css';
import './css/weuix.css';
import './css/main.css';
import './css/home.css';
import './css/font.css';
import App from './App';
import {BrowserRouter, Route} from 'react-router-dom';
import {Title, titleRouterPath} from './constant/title';
import {Qingjia} from './pages/Qingjia';

ReactDOM.render(
  <BrowserRouter >
    <Route exact={true}
           path='/'
           component={App} />
    <Route exact={true}
           path={titleRouterPath[Title.myQingJia]}
           component={Qingjia} />
  </BrowserRouter >,
  document.getElementById('root')
);


