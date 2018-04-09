import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Import Browser Modules
import { dataOperations, jexiaClient } from "jexia-sdk-js/browser";

class App extends Component {

  constructor() {
    super();

    // Initialize Component State
    this.state = {
      users: [],
    };

    // Initialize DataOperationsModule
    let dom = dataOperations();

    // Initialize Client and pass DataOperationsModule to it
    jexiaClient().init({
      projectID: 'projectID',
      key: 'key',
      secret: 'secret',
    }, dom);

    // Use your data module to use your dataset
    dom.dataset("myusers")
      .select()
      .execute()
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        { !this.state.users.length ? (
          <b>loading...</b>
        ):(
          <ul className="App-intro">
            {this.state.users.map(user =>
              (<li><b>{user.name}</b>, age: {user.age}</li>)
            )}
          </ul>
        )}
      </div>
    );
  }
}

export default App;
