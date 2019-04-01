import React, {Component} from 'react'
import {connect} from "react-redux";

class Details extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.car.car}</h2>
                <img src={this.props.car.img} alt=""/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        car: state.active
    }
}

export default connect(mapStateToProps)(Details)