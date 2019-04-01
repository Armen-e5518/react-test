import React from 'react';
import ReactDOM from 'react-dom';
import WebPage from './components/WebPage';
import {Provider} from 'react-redux'
import {createStore} from 'redux';
import AllReducers from './reducers';

console.log('init');
const store = createStore(AllReducers);
// console.log(car)
ReactDOM.render(
    <Provider store={store}>
        <WebPage/>
    </Provider>,
document.getElementById('root')
);

