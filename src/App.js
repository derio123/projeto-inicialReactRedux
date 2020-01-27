import React, { Component } from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom';
import routesConfig from './routes/RoutesConfig';
/* import Derio from './Component/user/derio';
import Footer from './Component/footer/footer';
import Header from './Component/Header/header';
import Forms from './Component/forms/forms';
import List from './Component/list/list'; */

class App extends Component {

  render() {
    return (
      <div className="App">
        {/* <Header></Header>
        <Forms></Forms>
        <Derio></Derio>
        <List></List>
        <Footer></Footer> */}

        <Link to="/">
          Home
        </Link>
        <Link to="/user">
          User
        </Link>
        {routesConfig.map((value, key) => {
          return <Route key={key} path={value.path} component={value.component} exact={value.exact}>

          </Route>
        })}
      </div>
    );
  }
}

export default App;
