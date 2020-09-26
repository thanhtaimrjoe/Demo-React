import React, { Component } from 'react'

class Message extends Component {

    constructor() {
        super()
    
        this.state = {
             message: 'Hello'
        }
    }
    
    changeName = () => {
        this.setState({
            message: 'Thank you for subscribing'
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick = {() => this.changeName()}>Subcribe</button>
            </div>
        )
    }
}

export default Message
