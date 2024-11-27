import axios from 'axios'
import React, { Component } from 'react'

class PostList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userid : "",
         title : "",
         body : ""
      }
    }

    changeHandler =(event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    // submitHandler =(event) =>{
    //     event.preventDefault()
    //     axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
    //     .then(res => {
    //         console.log(res)
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     })
    // }

    submitDelHandler =(event) =>{
        event.preventDefault()
        axios.delete('https://jsonplaceholder.typicode.com/posts/1')
        .then(res => {
            console.log(res)
        })
        .catch(error => {
            console.log(error)
        })
    }

    
    submitPutHandler =(event) =>{
        event.preventDefault()
        axios.put('https://jsonplaceholder.typicode.com/posts/1',this.state)
        .then(res => {
            console.log(res)
        })
        .catch(error => {
            console.log(error)
        })
    }
    
  render() {
    const{userid,title,body} = this.state
    return (
      <div>
        {/* <form onSubmit={this.submitHandler}> */}
        <form onSubmit={this.submitPutHandler}>
         <label>Username : </label>
         <input type='text' name='userid' value={userid} onChange={this.changeHandler}></input>
         <label>Title : </label>
         <input type='text' name='title' value={title} onChange={this.changeHandler}></input>
         <label>Body : </label>
         <input type='text' name='body' value={body} onChange={this.changeHandler}></input>
         <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default PostList
