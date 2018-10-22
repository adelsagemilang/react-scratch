import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'

import store from './store'

import './styles/style.css'

// main routes
import AppRoutes from './routes'


ReactDOM.render(
    <Provider store={store}>
        <AppRoutes />
    </Provider>
    , document.getElementById('root'));