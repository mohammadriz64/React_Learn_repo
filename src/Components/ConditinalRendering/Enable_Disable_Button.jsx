import React, { Component } from "react";
import "./Enable_Disable.css";

export default class Enable_Disable_Button extends Component {
  state = {
    disabled: true,
  };

  handleChange =(e) =>{
      if(e.target.value.length >=6) {
          this.setState({
              disabled: false
          });
      }
      else{
          this.setState({
              disabled: true
          })

      }
  }
  render() {
    return (
      <div>
        <form>
          <input
            className="in_field"
            type="text"
            placeholder="User Id"
            onChange={this.handleChange}
          />
          <button className="btn_proceed" disabled={this.state.disabled}>
            Proceed
          </button>
        </form>
      </div>
    );
  }
}
