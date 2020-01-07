import React, { Component } from 'react'
import User from './user'
import photo2 from '../../img/user2.jpg'
import photo3 from '../../img/user4.jpg'
import photo4 from '../../img/user5.jpg'

class Derio extends Component {
  render() {
    return (
      <div className="App">
        <User name="Derio" photo={photo2}></User>
        <User name="Ana Carolina" photo={photo3}></User>
        <User name="Ana Bia" photo={photo4}></User>
      </div>

    );}}

export default Derio;