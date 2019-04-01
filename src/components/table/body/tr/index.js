import React, {Component} from 'react'
import {connect} from "react-redux";
import {CHECK_POST} from "../../../../actions/actionsType";

class Tr extends Component {

    handPost() {
        this.props.onGetPost(this.props.data.id)
    }


    render() {
        console.log(this.props)
        return (
            <tr key={this.props.data.id} onClick={this.handPost.bind(this)} data-toggle="modal" data-target="#exampleModalCenter">
                <th  scope="row">{this.props.data.id}</th>
                <td>{this.props.data.title}</td>
                <td>{this.props.data.userId}</td>
                <td>{this.props.data.body}</td>
            </tr>
        )
    }
}

const getPostById = (id) => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts/' + id)
        .then(res => res.json())
        .then(date => {
            dispatch({
                type: CHECK_POST,
                payload: date
            })
        })
}


export default connect(
    state => {

    },
    dispatch => ({
        onGetPost: (id) => {
            dispatch(getPostById(id))
        }
    }))
(Tr)