import React, { Component } from 'react';
import './App.css';
import Person from './person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Ravi', age: 27 },
      { name: 'Manu', age: 29 }
    ],
    otherData: 'some other data'
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 27 },
        { name: 'Manu', age: 29 }
      ]
    })
  }
  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Ravi', age: 27 },
        { name: 'Manu', age: 29 }
      ]
    })

  }
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      curson: 'pointer'
    }
    return (
      <div className="App">
        <h1> Hi, I'm a React App </h1>
        <p> This is really working </p>
        <button onClick={this.switchNameHandler.bind(this, 'chau')

        } style={style}
        > Switch Name </button>
        {this.state.persons.map((person) => <Person name={person.name} age={person.age}
          click={this.switchNameHandler.bind(this, "button")}
          changed={this.nameChangedHandler.bind(this)}

        />)}
      </div>
    );
  }
}

export default App;
