import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import History from './pages/History/History';
import Editor from './pages/Editor/Editor';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar></NavBar>
          <Route exact path="/" component={Home} />
          <Route exact path="/history" component={History} />
          <Route exact path="/editor" component={Editor} />
        </div>
      </Router>
    );
  }
}

export default App;
