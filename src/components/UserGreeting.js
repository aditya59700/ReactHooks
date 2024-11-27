import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn : true
      }
    }
    

  render() {
    // if(this.state.isLoggedIn) 
    // return (
    //   <div>
    //    <h2>Welcome Aditya</h2> 
    //   </div>
    // )
    // else 
    // return (
    //     <div>
    //      <h2>Login first</h2>
    //     </div>
    // )
    return(
        (this.state.isLoggedIn) ? <div>
           <h2>Welcome Aditya</h2> 
          </div> :
          <div>
          <h2>Login first</h2> 
         </div>
    )

    //  return(
    //     this.state.isLoggedIn && <div><h2>Welcome Aditya</h2> </div> 
    // )
  }
}

export default UserGreeting
