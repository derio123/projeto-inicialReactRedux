import React, { Component } from 'react';
import './App.css';
import Derio from './Component/user/derio';
import Footer from './Component/footer/footer';
import Header from './Component/Header/header';
import Forms from './Component/forms/forms';
import List from './Component/list/list';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Header></Header>
          <Forms></Forms>
          <Derio></Derio>
          <List></List>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
