import React from 'react'
import defaultState from "../state";
import {DECREMENT, CHECK_POST} from "../actions/actionsType";

console.log(defaultState);

export default function ser(state = {id: null, title: null, userId: null, body: null}, action) {

    console.log(action.type, 'CHECK_POST');
    if (action.type === CHECK_POST) {
        return action.payload
    }

    return state
}