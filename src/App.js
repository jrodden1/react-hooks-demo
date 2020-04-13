import React from 'react';
import './App.css';
import GreetingBasicFnComp from './GreetingBasicFnComp1';
import GreetingClassFormInputs2 from './GreetingClassFormInputs2'
import GreetingHookifiedFormInputs3 from './GreetingHookifiedFormInputs3'

function App() {
  return (
    <React.Fragment>
      <GreetingBasicFnComp name="Mary"/> 
      <GreetingClassFormInputs2 />
      <GreetingHookifiedFormInputs3 />
    </React.Fragment>
  );
}

export default App;
