import React, { Component } from 'react'

export default class ClassCompChild extends Component {
    render() {
        return (
            <div>
                {/* <h2>class componts with array</h2> */}
            <p onClick={this.props.kuchbhi}>I'm {this.props.name} and I'm {this.props.age} years old.!!!!</p>

            {/*-------Passing Method Refrence------------- */}
            {/*-------Props Is a one way Binding----------------- */}

        </div>

        
        )
    }
}
// export default ClassCompChild;



