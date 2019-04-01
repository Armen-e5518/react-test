import React, {Component} from 'react'
import Header from './table/header'
import Tr from "./table/body/tr";
import {connect} from "react-redux";
import getAllPosts from '../actions/getAllPosts'


class App extends Component {

    componentDidMount() {
        this.props.onGetPosts();
    }

    render() {
        return (
            <div className="container">
               <h3>Bar</h3>
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