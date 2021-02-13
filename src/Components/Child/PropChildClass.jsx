import React, { Component } from 'react'

export default class PropChildClass extends Component {
    render() {
        return (
            <div>
                <p>Name:"{this.props.name}"" , Position:"{this.props.position}"</p>
            </div>
        )
    }
}
