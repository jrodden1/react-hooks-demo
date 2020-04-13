import React, { Component } from 'react'

//Timestamp: 20:01
//youtube.com/watch?v=dpw9EHDh2bM
export default class Greeting extends Component {
   constructor(props){
      super(props)
      this.state = {
         name: 'Mary',
         lastname: 'Poppins',
         width: window.innerWidth, //timestamp: 38:51
      }
      this.handleNameChange = this.handleNameChange.bind(this)
      this.handleLastnameChange = this.handleLastnameChange.bind(this)
      this.handleResize = this.handleResize.bind(this)
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
   
   handleResize(e) {
      this.setState({
         width: window.innerWidth
      })
   }

   // timestamp: 34:25 https://www.youtube.com/watch?v=dpw9EHDh2bM
   // Lifecycle methods example:  componentDidMount, componentWillUnmount, etc
   /* List of Lifecycle methodscomponentWillMount() {}; componentDidMount() {}; componentWillReceiveProps(nextProps) {}; shouldComponentUpdate(nextProps, nextState) {}; componentWillUpdate(nextProps, nextState) {}; componentDidUpdate(prevProps, prevState) {}; componentWillUnmount() {}; */
   // Lifecycle methods create side effects based on a condition.  
   // For example, if/when the component, did mount, then do something (you are actually spelling out what to do inside the componentDidMount() function; essentially, this is a callback function that is run when the component mounts)
   // Example Side Effects for changing the title of the browser tab
   componentDidMount(){
      // For updating the title of the tab
      document.title = this.state.name + " " + this.state.lastname

      // This is doing something completely different - not great for single purpose principle
      // For handling resizing of window
      window.addEventListener('resize', this.handleResize);
   }

   componentDidUpdate(){
      document.title = this.state.name + " " + this.state.lastname
   }

   componentWillUnmount() {
      // For handling resizing of window
      // This is canceles out this event listener so it doesn't memory leak and just stay out there forever
      window.removeEventListener('resize', this.handleResize)
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
            <br />
            Width: {this.state.width}px (change window width to see me change)
         </div>
      )
   }
}
