import React, { Component } from 'react';
import './App.css';
import Derio from './Component/user/derio';
import Footer from './Component/footer/footer';
import Header from './Component/Header/header';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Header></Header>
          <Derio></Derio>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
