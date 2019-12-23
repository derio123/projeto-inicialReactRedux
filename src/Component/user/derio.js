import React, { Component } from 'react'
import User from './user'
import photo from '../../img/user.png'

class Derio extends Component {
  render() {
    return (
      <div className="App">
        <User name="Derio" photo={photo}></User>
        <User name="Ana Carolina" photo={photo}></User>
        <User name="Ana Bia" photo={photo}></User>
      </div>

    );
  }

}

export default Derio;