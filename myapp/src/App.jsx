import { useState } from 'react'
import './App.css'
import { Counter } from './components/counter'
import { Hello } from './components/hello'



function App() {
const [ good, setGood] = useState(0)
const [ neutral, setNeutral ] = useState(0)
const [ bad, setBad] = useState(0)
  
let name="wahome"
let age=25
let school='Kariandutu'
  return (
    <>
        <h1>greetings</h1>
        <Hello name="kamoja" age={2025-1999}  school='MIS'/>
        <Hello name={name} age={age} school={school}/>
        <Hello name={name} age={age} school={school}/>


    <button onClick={()=>{setGood(good + 1)}}>good</button>
    <button onClick={()=>{setNeutral(neutral + 1)}}>neutral</button>
    <button onClick={()=>{setBad(bad + 1)}}>bad</button>

    <h1>statistics</h1>
    <p>good:{good}</p>
    <p>neutral:{neutral}</p>
    <p>bad:{bad}</p>
    </>
      
    
  )
}

export default App
