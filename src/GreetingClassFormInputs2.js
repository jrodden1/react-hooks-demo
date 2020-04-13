import React, { Component } from 'react'

//Timestamp: 20:01
//youtube.com/watch?v=dpw9EHDh2bM
export default class Greeting extends Component {
   constructor(props){
      super(props)
      this.state = {
         name: 'Mary'
      }
      this.handleNameChange = this.handleNameChange.bind(this)
   }

   handleNameChange(e) {
      this.setState({
         name: e.target.value
      })
   }
  
   render() {
      return (
         <div>
         Converted to Class component So I can have statefulness:<br />
            <input
               value={this.state.name}
               onChange={this.handleNameChange}
            /> 
         </div>
      )
   }
}
