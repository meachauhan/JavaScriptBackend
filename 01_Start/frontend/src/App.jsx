import { useEffect, useState } from 'react'
import {axios} from 'axios'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [jokes, setJokes] = useState([])

  // useEffect(()=>{
  //   axios.get('api/jokes')
  //   .then((response)=>{
  //     setJokes(response)
  //   })
  //   .catch((err)=>{
  //     console.log(err);
  //   })
  // })

  return (

    <>
     <h1>Backend with Express and Nodejs</h1>
      {/* <p>JOKES: {jokes.length}</p> */}
     {/* {
        jokes.map((jokes,index)=>(
          <div key={jokes.key}>
            <h3>{jokes.title}</h3>
            <p>{jokes.content}</p>
          </div>
        ))
      }  */}
    </>
  )
}

export default App
