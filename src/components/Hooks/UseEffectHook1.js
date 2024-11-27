import React, { Component } from 'react'

export class UseEffectHook1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }
    
    componentDidMount(){
        document.title = `Click me ${this.state.count} time`
    }

    componentDidUpdate(){
        document.title = `Click me ${this.state.count} time`
    }

    clickHandle = () => {
        this.setState({
            count : this.state.count + 1
        })
    }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.clickHandle}>Click me {this.state.count}</button>
      </div>
    )
  }
}

export default UseEffectHook1
