import React, { Component } from 'react';

class User extends Component {
    render() {
        return (
            <div className="App">
              <img className="avatar" src={this.props.photo}/>
              nome: {this.props.name}
            </div>
          );
    }
  
}

export default User;