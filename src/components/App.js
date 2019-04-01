import React, {Component} from 'react'
import Header from './table/header'
import Tr from "./table/body/tr";
import {connect} from "react-redux";
import getAllPosts from '../actions/getAllPosts'
import Post from "./Post";
import ModalPost from "./ModalPost";


class App extends Component {

    componentDidMount() {
        this.props.onGetPosts();
    }

    handPost(post) {
        this.props.onHandPost(post)
    }

    render() {
        return (
            <div>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                    Launch demo modal
                </button>

                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <table className="table">
                                <Header/>
                                <tbody>
                                {
                                    this.props.posts.map((val) => (
                                        <Tr key={val.id} handPost={this.handPost.bind(this)} data={val}/>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="col-md-4">
                            <Post post={this.props.post}/>
                        </div>
                    </div>

                </div>
                <ModalPost post={this.props.post}/>
            </div>

        )
    }

}


export default connect(
    store => ({
        posts: store.posts,
        post: store.post
    })
    ,
    dispatch => ({
        onGetPosts: () => {
            dispatch(getAllPosts())
        },
        onHandPost: (post) => {
            dispatch({
                type: 'CHECK_POST',
                payload: post
            })
        }
    })
)(App)