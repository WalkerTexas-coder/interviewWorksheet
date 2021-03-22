import logo from './logo.svg';
import './App.css';
import FetchRandomUser from './components/FetchRandomUser'
import { useState } from 'react'


const App = () => {
  const [count, setCount] = useState(0)
 
 
 
  return (
    <div className="App">
      <div>counter: {count}</div>
      <button onClick={()=> setCount(count + 1)}>increment</button>
      <FetchRandomUser/>
    </div>
  );
}

export default App;
