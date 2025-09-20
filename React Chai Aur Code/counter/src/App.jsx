import { useState } from "react"

function App() {

  let [counter,setCounter] = useState(0);

  const counterUpdate=()=>{
    counter++;
    if(counter > 20){
      setCounter(20)
    }
    else{
      setCounter(counter) ;
    }
  }

  const counterUpdateneg=()=>{
    counter--;
    if(counter < 0){
      setCounter(0)
    }else{
     setCounter(counter) ;
    }
  }

  return (
    <>
      <h1>Counter : {counter}</h1>
      <button onClick={counterUpdate }>Increse Count</button>
      <button onClick={counterUpdateneg }>Decrese Count</button>
    </>
  )
}

export default App
