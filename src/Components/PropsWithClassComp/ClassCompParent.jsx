import React, { Component } from 'react'
import ClassCompChild from './ClassCompChild'

export default class ClassCompParent extends Component {
    render() {
        return (
            <div>
            <ClassCompChild name="Mohammed rizwan" age="25" />    
            <ClassCompChild name="Aadil Hashmi" age="25" />    
            </div>
        )
    }
}
