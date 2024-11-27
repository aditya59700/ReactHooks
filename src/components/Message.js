import React, { Component } from 'react'

class Message extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message : "Welcome Aditya :/ ",
         count : 0
      }
    }

    changeMessage(){
        this.setState({
            message : "Welcome Adiii :^"
        })
    }
    
    increment(){
        this.setState((prevstate)=> ({
            
            count : prevstate.count + 1
        }), () => {console.log(this.state.count)})
    }

    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

  render() {
    return (
      <div>
        <h3>{this.state.message}</h3>
        <button onClick={() => {this.changeMessage()}}>Change</button>
        <h3>{this.state.count}</h3>
        <button onClick={() => {this.increment()}}>Increment</button>
        <button onClick={() => {this.incrementFive()}}>Increment</button>
      </div>
    )
  }
}

export default Message
