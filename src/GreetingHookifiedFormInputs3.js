import React, { useState } from 'react'

//Timestamp: 20:14
//youtube.com/watch?v=dpw9EHDh2bM

export default function GreetingHookifiedFormInputs3() {
   // This is declaring the name of the attribute I want to track state on
   // and the name I want to give to the state setter method - setName
   // This will use React's local state -->> this is what "useState" does - use a local state for this component
   // useState is a "hook" -> a Hook is a fn provided by React that lets you "hook" into React features from your functional components
   const [ name, setName  ] = useState('Mary'/* Initial State is set here */)

   const handleNameChange = (e) => {
      setName(e.target.value)
   }

   return (
      <div>
      Converted to a functional component, but also I can have statefulness:<br />
         <input
            value={name}
            onChange={handleNameChange}
         /> 
      </div>
   )
}
// This is much simpler than having to do a class component