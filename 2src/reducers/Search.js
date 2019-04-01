import React from 'react'


export default function ser(state='' , action) {
    if (action.type === "SEARCH") {
        return action.payload

    }
    return state
}