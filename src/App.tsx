import React, { useState } from 'react';
import './App.css';
import Header from './Header'

const App = () => {

  const [counter, setCounter] = useState(0);

  function handleButtonClick(){
    setCounter(counter + 1);
    console.log(counter)
  }

  return (
    <div>
      <Header title="E-Coleta!" />
      <h1>{counter}</h1>
      <button type="button" onClick={handleButtonClick}>Aumentar</button>
    </div>
  );
}

export default App;
