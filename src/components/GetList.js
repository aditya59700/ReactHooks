import React, { Component } from 'react'
import axios from 'axios'

class GetList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         users : [],
         message : ""
      }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            console.log(response)
            this.setState({
                users : response.data
            })
            console.log(this.state.users)
            
        })
        .catch((error) => {
            console.log(error)
            this.setState({
                message : "Please check the url"
            })
        })
    }
    
  render() {
    const {users,message} = this.state
    return (
      <div> List of users: 
        {users.map((user) => 
           <h2 key = {user.id} > {user.name} - {user.email} </h2>
        )}
      </div>
    )
  }
}

export default GetList
