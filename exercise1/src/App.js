import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import './App.css';

class App extends Component {

  state = {
    username : "rpsr15",
    password : ""
  }

  onPasswordChange(event){
    console.log( event.target.value );
    this.setState(
      {
        password: event.target.value
      }
    );
  }

 render() { return (
    <div className="App">
      <UserInput password = { this.onPasswordChange.bind(this) } />
      <UserOutput username = {this.state.username} password = { this.state.password } />
    </div>
  ); }
}

export default App;
