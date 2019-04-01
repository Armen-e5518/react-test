import React from 'react'
import {FETCH_POSTS_SUCCESS} from "./actionsType";

const getAllPosts = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
                console.log(data);
                dispatch({
                        type: FETCH_POSTS_SUCCESS,
                        payload: data
                    }
                )
            }
        );


};

export default getAllPosts


// const asyncGetTracks = () => dispatch => {
//     setTimeout(() => {
//         console.log('Get ------+');
//         dispatch({
//             type: 'FETCH_TRACKS_SUCCESS', payload: []
//         });
//         dispatch({
//             type: 'ADD',
//             payload: "EEEEEEEEEEEE"
//         })
//     }, 2000)
//
// };