import React from 'react'
import {DECREMENT, INCREMENT} from "../actions/actionsType";

export default function ser(state = 1, action) {

    console.log('INCREMENT')
    if (action.type === INCREMENT) {
        console.log('INCREMENT')
        return state + 1
    }
    if (action.type === DECREMENT) {
        console.log('DECREMENT')
        return state - 1
    }
    return state
}