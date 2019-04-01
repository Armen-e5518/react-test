import React from 'react'

const defaultStore = ['Arm'];

export default function playlist(state = defaultStore, action) {

    if (action.type === 'ADD') {
        return [
            ...state,
            action.payload
        ]
    }
    return state;
}