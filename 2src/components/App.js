import React, {Component} from 'react'
import {connect} from "react-redux";

const asyncGetTracks = () => dispatch => {
    setTimeout(() => {
        console.log('Get ------+');
        dispatch({
            type: 'FETCH_TRACKS_SUCCESS', payload: []
        });
        dispatch({
            type: 'ADD',
            payload: "EEEEEEEEEEEE"
        })
    }, 2000)

};

class App extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.getAll()
    }

    addNewTrack() {
        this.props.onAddTrack(this.myInput.value)
        this.myInput.value = ''

    }

    search() {
        this.props.onSearch(this.searchInput.value)
    }

    render() {
        return (
            <div>
                <input ref={(input) => {
                    this.myInput = input
                }} type="text"/>
                <button onClick={this.addNewTrack.bind(this)}>Save</button>
                <br/>
                <input onChange={this.search.bind(this)} ref={(input) => {
                    this.searchInput = input
                }} type="text"/>
                <button onClick={this.search.bind(this)}>Search</button>
                <ul>
                    {this.props.test.map((val, index) => (
                        <li key={index}>{val}</li>
                    ))}
                </ul>
                <div>
                    <button onClick={this.props.onGetTracks}>Get Tracks</button>
                </div>
            </div>
        );
    }
}

const GetAll = function (dispatch) {
    fetch(`https://my-json-server.typicode.com/typicode/demo/posts`)
        .then(res => res.json())
        .then((result) => {
                dispatch({
                    type: 'ADD',
                    payload: "Devvvvvvv"
                })
            }, (error) => {
            }
        )
};
export default connect(
    store => ({
        test: store.tracks.filter(t => t.includes(store.ser)),
        search: store.ser
    })
    ,
    dispatch => ({
        onAddTrack: ((track) => {
            dispatch({
                type: 'ADD',
                payload: track
            })
        }),
        getAll: (() => {
            GetAll(dispatch)
        }),
        onSearch: ((track) => {
            dispatch({
                type: 'SEARCH',
                payload: track
            })
        }),
        onGetTracks: () => {
            dispatch(asyncGetTracks())
        }

    })
)(App)