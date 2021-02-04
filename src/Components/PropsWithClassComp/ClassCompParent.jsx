import React, { Component } from 'react';
import ClassCompChild from "../PropsWithClassComp/ClassCompChild";

export default class ClassCompParent extends Component {
    state= {
        person:[
            {name:"Thor", age: 35},
            {name:"Iron-Man", age: 36},
            {name:"Spider-Man", age: 25},
        ],
    }

    render() {
        return (
            <div>
                
<ClassCompChild name={this.state.person[0].name} age={this.state.person[0].age} />      
<ClassCompChild name={this.state.person[1].name} age={this.state.person[1].age} />  
<ClassCompChild name={this.state.person[2].name} age={this.state.person[1].age} />

            </div>
        )
    }
}
