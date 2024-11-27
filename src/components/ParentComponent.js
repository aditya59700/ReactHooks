import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         parentName : "Sachin"
      }

    }
    
   greetParent = (childname) =>{
    alert(`Hello  ${this.state.parentName} from ${childname}`)
    this.setState({
        parentName : "Trupti"
    },() => console.log(this.state.parentName))
   }
  render() {
    return (
      <div>
        <ChildComponent greetHandler = {this.greetParent} name = {this.state.parentName}/>
      </div>
    )
  }
}

export default ParentComponent
