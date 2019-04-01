import React from 'react'
import {combineReducers} from "redux";
import tracks from './Tracks'
import ser from './Search'

const com = combineReducers({
    tracks,
    ser
});
export default com