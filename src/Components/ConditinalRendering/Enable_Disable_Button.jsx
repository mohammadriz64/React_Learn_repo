import React, { Component } from 'react'
import './Enable_Disable.css';

export default class Enable_Disable_Button extends Component {
    render() {
        return (
            <div>
                <form>
                    <input className="in_field" type="text" placeholder="User Id"/>
                    <button disabled="true">Proceed</button>
                </form>
                
            </div>
        )
    }
}
