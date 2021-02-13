import React, { Component } from 'react'

export default class PropChildClass extends Component {
    render() {
        return (
            <div>
                <p style={{color:"tomato",border:"1px dashed green"}}>Name:"{this.props.name}"" , Position:"{this.props.position}"</p>
            </div>
        )
    }
}
