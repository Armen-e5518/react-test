import React from 'react'
import {combineReducers} from "redux";
import posts from './Posts'
import post from './Post'
import counter from './Counter'
import {routerReducer} from "react-router-redux";

const com = combineReducers({
    routing:routerReducer,
    posts:posts,
    post:post,
    counter:counter,
    dev:function (d,s) {
        return [
            'sadasd',
            'asdasd'
        ]
    }
});
export default com