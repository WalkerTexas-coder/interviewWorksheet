import React, { useState, useEffect } from 'react'

const FetchRandomUser = () => {
  
    const [person, setPerson] = useState(null);
  
    useEffect(async () => {
    const response = await fetch('https://api.randomuser.me/');
    const data = await response.json();
    const [ item ] = data.results
    setPerson(item)
  }, [])
  
    return (
        <div>
            {person && <h1> {JSON.stringify(person)} </h1>   }
        </div>
    )
}

export default FetchRandomUser
