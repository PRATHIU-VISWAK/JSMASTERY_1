import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import axios from 'axios'
//5a20e59a
function App() {
  const [count, setCount] = useState(0)

  const API_URL = 'https://www.omdbapi.com/?apikey=5a20e59a'

  const fetching = async (title) => {
    try{
    const response = await axios.get(`${API_URL}&s=${title}`)
    console.log(response);

    }catch(error){
      console.log("axios error",error);
    }
  }

  useEffect(() => {
    fetching("superman")
  },[])


  return (
    <div className='App'>
      <h1>Movie Land</h1>
    </div>
  )
}

export default App
