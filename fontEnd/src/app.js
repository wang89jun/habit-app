
// 代码保存，浏览器局部刷新的关键代码，
// 没这代码，代码保存后浏览器会全部刷新！！
// 一般放在入口文件
// 好东西！！很赞！！！
if (module.hot) { module.hot.accept(); }

import React, { Component } from "react";
import ReactDom from "react-dom";
import { Provider } from 'react-redux';
import { Link, Route, BrowserRouter, Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import router from './routers/index.js';
import configureStore from './store/configureStore.js'

const store = configureStore();

ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                {renderRoutes(router)}
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);