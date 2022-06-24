import React, { Component } from 'react'

class State extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: 'Usha',
            message: "WelCome to React Course"
        }

    }

    ChangeMessage() {
        this.setState({
            message:"Happy Learning"
        })
    }


  render() {
    return (
      <>
        <h1>{this.state.message}</h1>
        <button onClick={()=> this.ChangeMessage()}>Change State</button>
      </>
    )
  }
}

export default State