import React, { Component } from 'react';
import Header from './Header';
import Books from './Books';
import SavedBooks from './SavedBooks';
import { BrowserRouter as Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Books />
        <Route exact path='/SavedBooks' component={SavedBooks} />
      </div>
    );
  }
}

export default App;
