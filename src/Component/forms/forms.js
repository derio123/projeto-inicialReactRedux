import React, { Component } from 'react';

class Forms extends Component {
    constructor(props) {
        super(props) //pega as propriedades do pai
        this.state = { //Estado da variable
            name: "Derio",
            email: "m.derio@gmail.com"
        }
        /* this.changeState = this.changeState.bind(this)
        this.resetState = this.resetState.bind(this) */
        this.changeInput = this.changeInput.bind(this)
    }

    changeInput(event){
        let target = event.target
        let index = target.name
        this.setState({
            [index]:target.value
        })
    }
    render(){
        return(
            <div className="App">
                <form>
                    <label>
                        <input 
                        type="text" 
                        name="name" 
                        value={this.state.name}
                        onChange={this.changeInput}>
                        </input>
                    </label>
                    <label>
                        <input 
                        type="email" 
                        name="email" 
                        value={this.state.email} 
                        onChange={this.changeInput}>
                        </input>
                    </label>
                    <button type="submit">OK</button>
                </form>
                {this.state.name} - {this.state.email}
            </div>
        );
    }

}

export default Forms;