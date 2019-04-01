import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from "redux";
import App from "./components/App";
import {Provider} from "react-redux";
import Reducer from './reducers'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

const store = createStore(Reducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));
console.log(store.getState());
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);