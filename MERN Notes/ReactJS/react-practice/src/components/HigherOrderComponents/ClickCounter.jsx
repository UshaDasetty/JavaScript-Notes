import React, { Component } from 'react'
import UpdatedComponent from './UpdatedComponent'

class ClickCounter extends Component {
  render() {
    const {count, incCount} = this.props;
    
    return (
      <>
        <button onClick={incCount}>Click: {count}</button>
      </>
    )
  }
}

export default UpdatedComponent(ClickCounter)