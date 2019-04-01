import React, {Component} from 'react'
import {connect} from "react-redux";
import getAllPosts from '../actions/getAllPosts'


class App extends Component {

    componentDidMount() {
        this.props.onGetPosts();
    }

    render() {
        return (
            <div className="container">
                <h2>About</h2>
            </div>
        )
    }

}


export default connect(
    store => ({
        posts: store.posts
    })
    ,
    dispatch => ({
        onGetPosts: () => {
            dispatch(getAllPosts())
        }
    })
)(App)