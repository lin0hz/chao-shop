import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'element-theme-default';
import './assets/css/base.css';

import axios from 'axios';
import { BASE_URL } from './utils/';



// 设置请求的基地址：
axios.defaults.baseURL = BASE_URL;
Component.prototype.axios = axios;

ReactDOM.render(<App />, document.getElementById('root'));


