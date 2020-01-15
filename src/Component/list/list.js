import React, { Component } from 'react'

class List extends Component {
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

export default List;