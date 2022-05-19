import React, { Component } from "react"

class Counter extends Component {
    constructor(props) {
        super(props);
        console.log("constructor")
        this.state = { timer2: 0, counter: 0, text: '' }
        //this.increment=this.increment.bind(this)
    }
    componentDidMount() {
        console.log("comp counter mounted")
        setInterval(() => {
            this.setState({ timer2: this.state.timer2 + 1 })
        }, 1000);
    }
    increment = () => {
        //console.log(this)
        this.setState({ counter: this.state.counter + 1 })
    }
    decrement = () => {
        //console.log(this)
        this.state.counter > 0 && this.setState({ counter: this.state.counter - 1 })
    }
    reset = () => {
        //console.log(this)
        this.setState({ counter: 0 })
    
    render() {
        return (<div style={{ backgroundColor: "gold", margin: "20px auto", padding: "20px", width: "400px" }}>
            <button onClick={this.increment}>+</button> <p>{this.state.counter}</p><button onClick={this.decrement}>-</button><button onClick={this.reset}>reset</button> <input type="text" onChange={(e) => this.setState({ text: e.target.value })} /><p>{this.state.text}</p><p>counterAge:{this.state.timer2}</p>       hh
        </div>);
    }
}

export default Counter;