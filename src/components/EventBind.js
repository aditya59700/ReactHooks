import React, { Component } from 'react'

class EventBind extends Component {
//   constructor(props) {
//     super(props)
  
//     this.state = {
//        message : "HEllo"
//     }
//   }
  
constructor(props) {
    super(props)
  
    this.state = {
       message : "HEllo"
    }

    this.clickHandler =this.clickHandler.bind(this)
  }
  
//   clickHandler(){
//     this.setState({
//         message : "GoodBye"
//     } , console.log(this.state.message))
//   }
 
  clickHandler =() => {
    this.setState({
        message : "GoodBye"
    } , console.log(this.state.message))
  }

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        {/* <button onClick={this.clickHandler.bind(this)}>Click appraoch 1 </button> */}
        {/* <button onClick={() => this.clickHandler()}>Click approach 2</button> */}
        {/* <button onClick={this.clickHandler}>Click appraoch 3 using constructor bind </button> */}
        <button onClick={this.clickHandler}>Click appraoch 4 using arrow function</button>
      </div>
    )
  }
}

export default EventBind
