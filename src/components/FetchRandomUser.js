import React, { useState, useEffect } from 'react'

const FetchRandomUser = () => {
  
    const [person, setPerson] = useState(null);
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [multiplier, setMultiplier] = useState(0);


     const addMultiply = (num1, num2, multiplier, cb) => {
        const addedSum = num1 + num2 
       console.log( multiply(multiplier, addedSum));
        return
    }

    const multiply = (multiplier, givenSum) =>{
        return multiplier * givenSum
    }
  
    useEffect(async () => {
    const response = await fetch('https://api.randomuser.me/');
    const data = await response.json();
    const [ item ] = data.results
    setPerson(item)
  }, [])
  
    return (
        <div>

            {person && <h1> {`${person.name.title} ${person.name.first} ${person.name.last}` } </h1>   }
            <form >
                <label>
                    <input type="number" onChange={(e)=> {setNum1(e.target.value)}}/>
                </label>
                <label>
                    <input type="number" onChange={(e)=> {setNum2(e.target.value)}}/>
                </label>
                <label>
                    <input type="number" onChange={(e)=> {setMultiplier(e.target.value)}}/>
                </label>
            </form>
            <button onClick={()=>{addMultiply(num1, num2, multiplier, multiply)}}>FIRE!</button>
        </div>
    )
}

export default FetchRandomUser
