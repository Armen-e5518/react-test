import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from "react-redux";
import select from '../actions'

class CarList extends Component {
    showList() {
        return this.props.cars.map((val) => {
            return <li onClick={() => this.props.select(val)} key={val.id}>{val.car}</li>
        })
    }

    render() {
        console.log(this.props)
        return (
            <ul>
                {this.showList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
        cars: state.cars
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        select: select
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(CarList)