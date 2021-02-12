import React, { Component } from 'react'

export default class PropChildClass extends Component {
    render() {
        return (
            <div>
                <p>{this.props.name}</p>
            </div>
        )
    }
}
