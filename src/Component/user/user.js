import React, { Component } from 'react';

class User extends Component {
    render() {
        return (
            <div className="App">
              <p><img className="avatar" alt="Avatar" src={this.props.photo}/>nome: {this.props.name}</p>
            </div>
          );
    }
}

export default User;