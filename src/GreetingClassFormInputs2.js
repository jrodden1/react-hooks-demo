import React, { Component } from 'react'

//Timestamp: 20:01
//youtube.com/watch?v=dpw9EHDh2bM
export default class Greeting extends Component {
   constructor(props){
      super(props)
      this.state = {
         name: 'Mary',
         lastname: 'Poppins'
      }
      this.handleNameChange = this.handleNameChange.bind(this)
      this.handleLastnameChange = this.handleLastnameChange.bind(this)
   }

   handleNameChange(e) {
      this.setState({
         name: e.target.value
      })
   }

   handleLastnameChange(e) {
      this.setState({
         lastname: e.target.value
      })
   }

   // timestamp: 34:25 https://www.youtube.com/watch?v=dpw9EHDh2bM
   // Lifecycle methods example:  componentDidMount, componentWillUnmount, etc
   /* List of Lifecycle methodscomponentWillMount() {}; componentDidMount() {}; componentWillReceiveProps(nextProps) {}; shouldComponentUpdate(nextProps, nextState) {}; componentWillUpdate(nextProps, nextState) {}; componentDidUpdate(prevProps, prevState) {}; componentWillUnmount() {}; */
   // Lifecycle methods create side effects based on a condition.  
   // For example, if/when the component, did mount, then do something (you are actually spelling out what to do inside the componentDidMount() function; essentially, this is a callback function that is run when the component mounts)
   // Example Side Effects for changing the title of the browser tab
   componentDidMount(){
      document.title = this.state.name + " " + this.state.lastname
   }

   componentDidUpdate(){
      document.title = this.state.name + " " + this.state.lastname
   }

   render() {
      return (
         <div>
         Converted to Class component So I can have statefulness:<br />
            <input
               value={this.state.name}
               onChange={this.handleNameChange}
            /> 
            <input
               value={this.state.lastname}
               onChange={this.handleLastnameChange}
            /> 
         </div>
      )
   }
}
