import {calculateInvestmentResults} from './util/investment'

import Result from "./components/ResultComponets/Result"
import UserInput from "./components/InputComponents/UserInput"
import Header from "./components/header"
import { useState } from "react";

function App() {

  const [data, setData] = useState({
      'initialInvestment': 10000, 
      'annualInvestment': 1200, 
      'expectedReturn': 6, 
      'duration': 10
  });

  let validData = data.duration > 0;

  const handleInput = (identifier, inputValue)=>{
      setData((prevUserInput)=>{
          let currData = {...prevUserInput};
          currData[identifier] = +inputValue;
          return currData;
      })
  }

  let result = calculateInvestmentResults(data)
  console.log(result);
  return (
    <>
      <Header/>
      <UserInput data={data} handleInput={handleInput}/>
      {validData ? <Result resultData={result}/> : <p className='center'>Please enter duration bigger than 0!</p>}
      
    </>
  )
}

export default App
