import React, { Component } from 'react'

class Hello extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello'
        }
        this.changeName = this.changeName.bind(this)
    }
    

    changeName() {
        this.setState({
            message: 'Lo cc ne`'
        })
    }
    // changeName = () => {
    //     this.setState({
    //         message: 'Lo cc ne'
    //     })
    // }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                {/* <button onClick = {this.changeName.bind(this)}>Click</button> */}
                {/* <button onClick = {() => this.changeName()}>Click</button> */}
                <button onClick = {this.changeName}>Click</button>
            </div>
        )
    }
}

export default Hello
