import React, { Component } from 'react';

class Header extends Component {

    constructor(props) {
        super(props) //pega as propriedades do pai
        this.state = { //Estado da variable
            title: "Second project"
        }
        this.changeState = this.changeState.bind(this)
        this.resetState = this.resetState.bind(this)
    }

    changeState() {
        this.setState({
            title: "First Project"
        })
    }

    resetState() {
        this.setState({
            title: "Second project"
        })
    }
    render() {
        return (
            <div>
                <header className="App-header App">
                    <div>
                        {this.state.title}
                    </div>
                    <button onClick={this.changeState}>Mudar title</button>
                    <button onClick={this.resetState}>back title</button>
                </header>
            </div>
        );}}

export default Header;