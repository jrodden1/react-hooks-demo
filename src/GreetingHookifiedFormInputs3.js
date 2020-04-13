import React, { useState, useEffect } from 'react'

//Timestamp: 20:14
//youtube.com/watch?v=dpw9EHDh2bM

export default function GreetingHookifiedFormInputs3() {
   // KEY RULE: Hooks must be declared at the top of your component -- you cannot have any other logic before the declaration of Hooks. 
   
   // This is declaring the name of the attribute I want to track state on
   // and the name I want to give to the state setter method - setName
   // This will use React's local state -->> this is what "useState" does - use a local state for this component
   // useState is a "hook" -> a Hook is a fn provided by React that lets you "hook" into React features from your functional components
   // Whenever one of the states change or the setter method is called, then react will rerender the component just like it does with this.setState
   const [ name, setName  ] = useState('Mary'/* Initial State is set here */)
   const [ lastname, setLastname ] = useState('Poppins')

   //Performing side effects (similar to lifecycle methods)
   //timestamp: 36:22
   // Example Side Effects for changing the title of the browser tab with Hooks
   useEffect(() => {
      document.title = name + ' ' + lastname
      //not "this.state.name" is not used.  This is simpler. 
   })
   // useEffect is slightly different from componentDidMount as it will run after 
   // the initial render AND every update.  this can be opted out of.

   // This next useEffect example is for handling the change in resize and is separate from the previous useEffect that was handling the Tab title change.
   // This one is handling the window Resize 
   // timestamp: 40:50
   const [ width, setWidth] = useState(window.innerWidth)
   // note how this state information is set right above this useEffect
   useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth)
      window.addEventListener('resize', handleResize)
      // since we need to do cleanup (similar to componentWillUnmount() from classes), you can optionall return a callback that will run on cleanup
      return () => { 
            window.removeEventListener('resize', handleResize)
         }
   })

   const handleNameChange = (e) => {
      setName(e.target.value)
   }
   const handleLastnameChange = (e) => {
      setLastname(e.target.value)
   }

   return (
      <div>
      Converted to a functional component, but also I can have statefulness:<br />
         <input
            value={name}
            onChange={handleNameChange}
         /> 
         <input
            value={lastname}
            onChange={handleLastnameChange}
         /> 
         <br />
         Width: {width}px (change window width to see me change)
      </div>
   )
}
// This is much simpler than having to do a class component