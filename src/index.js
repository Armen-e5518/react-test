import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from "redux";
import About from "./components/About";
import Nav from "./components/Nav";
import {Provider} from "react-redux";
import Reducer from './reducers'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {BrowserRouter, Route} from "react-router-dom";
import Counter from "./components/Counter";
import defaultState from "./state";
import App from "./components/App";

console.log(defaultState)
const store = createStore(Reducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div className="container">
                <Nav/>
                <Route exact path="/" component={Counter}/>
                <Route exact path="/home" component={App}/>
                <Route path="/about" component={About}/>
            </div>
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById('root')
);


