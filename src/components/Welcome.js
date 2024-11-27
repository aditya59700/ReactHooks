import React, { Component } from 'react'

class Welcome extends Component {
  render() {
    const {name,game} = this.props
    return (
      <div>
        {/* <h1>Wait for some time for the Aditya to come</h1> */}.
        {/* <h2>Class componet on {this.props.name} - {this.props.game}</h2> */}
        <h2>Class componet on {name} - {game}</h2>
        {this.props.children}
      </div>
    )
  }
}

export class Traning extends Component {
    render() {
      return (
        <div>
          <h1>Aditya arriving ....</h1>
        </div>
      )
    }
  }

export default Welcome
