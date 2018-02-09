import ReactDOM from 'react-dom';
import React from 'react';
import App from "./components/app";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import Promise from 'redux-promise';
import style from './style/style.css';

const middleware = applyMiddleware(Promise);

const store = createStore(rootReducer, middleware);


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);