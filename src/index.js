// @flow

import React from 'react';
import {render} from 'react-dom';
import Index from './pages/index';

import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import ReduxPromise from 'redux-promise';

import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Index/>
    </Provider>
    , document.querySelector('#root')
);
