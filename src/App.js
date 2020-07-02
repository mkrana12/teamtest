import React, { Component } from 'react';
import './App.css';
import GoodPerson from './Person/Person';

class App extends Component {

  state = {
    persons: [
    {name: 'Peter', age: 28},
    {name: 'Harry', age: 29},
    {name: 'Stephanie', age: 32}
    ]

  }

  SwitchNameHandler = (newName) => {

    //console.log("Was Clicked");
    
    this.setState({

      persons: [
    {name: newName, age: 28},
    {name: 'Harry', age: 39},
    {name: 'Stephanie', age: 32}
    ]

    })
  }

  nameChangedHandler = (event) => {
  
      this.setState({

      persons: [
    {name: 'Peter', age: 28},
    {name: event.target.value, age: 39},
    {name: 'Stephanie', age: 32}
    ]

    })

  }

  render() {
    
    return (
      <div className="App">
        <h1> Hi I am react app </h1>
        <p> This is really working !!! </p>

        <button onClick={this.SwitchNameHandler.bind(this,"Shiva")}>Switch Name</button>

        <GoodPerson 
          name = {this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <GoodPerson 
          name = {this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.SwitchNameHandler.bind(this,"Ram")}
          changed={this.nameChangedHandler}> My hobbies: Racing</GoodPerson>
        <GoodPerson 
          name = {this.state.persons[2].name} 
          age={this.state.persons[2].age}/>

      </div>
    );
  

  //return React.createElement('div', {className: "App"}, React.createElement('h1', null, "Hi I am new React App"));
}
}

export default App;
