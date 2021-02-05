import React, { Component } from "react";
import ClassCompChild from "../PropsWithClassComp/ClassCompChild";

export default class ClassCompParent extends Component {
  state = {
    person: [
      { name: "Thor", age: 35 },
      { name: "Iron-Man", age: 36 },
      { name: "Spider-Man", age: 25 },
      { name: "SuperMan", age: 40 },
    ],
  };
  changeNameHandler =() => {
      this.setState({
          person :[
            { name: "HeMan", age: 40 },
            { name: "Loki", age: 45 },
            { name: "Lee", age: 30 },
            { name: "Bruce", age: 40 },
          ],

      });
  };

  render() {
    return (
      <div>
        <ClassCompChild
          name={this.state.person[0].name}
          age={this.state.person[0].age}
        />
        <ClassCompChild
          name={this.state.person[1].name}
          age={this.state.person[1].age}
        />
        <ClassCompChild
          name={this.state.person[2].name}
          age={this.state.person[1].age}
        />
        <ClassCompChild
          name={this.state.person[3].name}
          age={this.state.person[3].age}
        />
        <button onClick={this.changeNameHandler} >ClickButton</button>
      </div>
    );
  }
}
