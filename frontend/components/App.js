import React, { useState, useEffect }from 'react'
import axios from 'axios'
import Card from './Card'
import 'bootstrap/dist/css/bootstrap.min.css';


const api_Key = 'DEMO_KEY'
const URL = `https://api.nasa.gov/planetary/apod?api_key=${api_Key}`





function App() {
  const [apod, setApod] = useState()
  useEffect(() => {
    function fetchPhoto() {
      axios
      .get(URL)
      .then(res => {
        console.log(res.data);
        setApod(res.data)
      })
      .catch(err => console.error(err))
    }
    // fetchPhoto()
    setApod(
      {
        "copyright": "Tommy Lease",
        "date": "2025-01-31",
        "explanation": "The interstellar cloud of dust and gas captured in this sharp telescopic snapshot is seen to change its appearance noticeably over periods as short as a few weeks. Discovered over 200 years ago and cataloged as NGC 2261, bright star R Monocerotis lies at the tip of the fan-shaped nebula. About one light-year across and 2500 light-years away, NGC 2261 was studied early last century by astronomer Edwin Hubble and the mysterious cosmic cloud is now more famous as Hubble's Variable Nebula. So what m...",
        "hdurl": "https://apod.nasa.gov/apod/image/2501/HubblesVariablecopy.jpg",
        "media_type": "image",
        "service_version": "v1",
        "title": "The Variable Nebula NGC 2261",
        "url": "https://apod.nasa.gov/apod/image/2501/HubblesVariablecopy1024.jpg"
      }
    )
  }, [])
  if(!apod) return 'Fetching Photo of the Day'
  return (
   <section>
    <Card 
   title={apod.title}
   text={apod.explanation}
   imageUrl={apod.url}
   date={apod.date}
    
    />
   </section>
  )
}

export default App
