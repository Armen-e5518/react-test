import React, {Component} from 'react';
import {connect} from "react-redux";
import {DECREMENT, INCREMENT} from "../actions/actionsType";

class Counter extends Component {
    constructor() {
        super();
        console.log('Counter', this.props)
    }

    componentDidMount() {
        // this.props.dispatch({
        //     type:INCREMENT
        //
        // })
        // this.props.onGetPosts()
    }

    render() {
        console.log('Counter render', this.props)
        return (
            <div>
                <h1>{this.props.count}</h1>
                <button onClick={this.increment.bind(this)}>+</button>
                <button onClick={this.decrement.bind(this)}>-</button>
            </div>
        );
    }

    increment() {
        this.props.onIncrement()
    }

    decrement() {
        this.props.onDecrement()
    }
}

export default connect(
    store => ({
        store: store,
        count: store.counter,
    })
    ,
    dispatch => ({
        onIncrement: () => {
            dispatch({
                type: INCREMENT
            })
        },
        onDecrement: () => {
            dispatch({
                type: DECREMENT
            })
        }
    })
)(Counter)