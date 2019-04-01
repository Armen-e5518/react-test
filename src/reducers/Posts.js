import React from 'react'
import defaultState from "../state";

console.log(defaultState);

export default function ser(state = [], action) {
    console.log('------POSTS state', state);
    console.log(action.type, 'FETCH_POSTS_SUCCESS');
    if (action.type === "FETCH_POSTS_SUCCESS") {
        return  action.payload


    }

    return state
}