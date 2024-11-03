
import { useMemo, useState } from 'react';
import './App.css';

function App() {
  const[weight,setWeight] = useState(70);
  const [height,setHeight]=useState(140);
  const weightSet=(event)=>{
    setWeight(event.target.value);
  }
  const heightSet=(event)=>{
    setHeight(event.target.value);
  }
   const output = useMemo(()=>{
     const heightValInM=height/100;
     return(weight/(heightValInM*heightValInM)).toFixed(2)
   },[weight,height])
  return (
    <main>

     <h1>Bmi Calculator</h1>
    <div className='input-section' >
      <p className='slider-output' >Weight : {weight} kg</p>
      <input  className='input-slider'   type="range" name="" id="" min="40" max="180" step="1" onChange={weightSet} />

      <p className='slider-output' >Height : {height} cm</p>
      <input  className='input-slider'     type="range" name="" id="" min="140" max="220" step="1" onChange={heightSet} />
    </div>
    <div className="output-section">
     <p className='output'>Your BMI is :{output}</p>
      
    </div>
    </main>
    
  );
}

export default App;
