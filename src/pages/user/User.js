import React, { Component } from 'react'
import UserFrom from './UserFrom'

class User extends Component {
  render() {
      let list = [
        {name: "Derio",
        email: "m.derio@gmail.com"},
        {name: "liana",
        email: "liana.k@gmail.com"},
      ]
      let desc = ["name", "email"]
    return (
      <div className="App-Table">
          <UserFrom></UserFrom>
        <table>
            <tr><th>{desc[0]}</th><th>{desc[1]}</th></tr>
            {list.map((item) =>{
                return <tr>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                </tr>
            })}
        </table>
      </div>

    );}}

export default User;