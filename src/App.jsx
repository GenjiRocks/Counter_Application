import { useState } from 'react'
import './App.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {useDispatch, useSelector} from 'react-redux'
import { increment,decrement,reset,rangeChange } from './redux/counterslice';

function App() {

  // UseState for the Range
  const [range, setRange] = useState("")

  const count = useSelector((state)=>state.counterReducer.value)

  // To call the actions from couterslice.js
  const dispatch = useDispatch()

  // For Onclick
  const handleRange = ()=>{
    if(!range){
      alert("Please enter a number")
    }
    else{
      dispatch(rangeChange(parseInt(range)))
    }
  }

  // Testing if onchange working
  console.log(range);

  return (
    <>
     <div className='d-flex justify-content-center align-items-center' style={{width:'100%', height:'100vh'}}>
        <div className='bg-light text-center p-4 border rounded-2' style={{width:'450px'}}> 
        <h2>Counter Application</h2>
        <h1 style={{fontSize:'50px'}}>{count}</h1>
        <div className='mt-5 d-flex justify-content-evenly'>
        <Button  variant="contained" color='warning' onClick={()=>dispatch(decrement())}>Decrement</Button>
        <Button variant="contained" color='error' onClick={()=>dispatch(reset())}>Reset</Button>
        <Button variant="contained" color='success' onClick={()=>dispatch(increment())}>Increment</Button>
        </div>
        <div className='d-flex justify-content-center   mt-5'> 
        <TextField id="outlined-basic" label="Range" variant="outlined" onChange={(e)=>setRange(e.target.value)}/>
        <Button className='ms-3' variant="contained" color='primary' onClick={handleRange} >Click</Button>
        </div>
        </div>
     </div>
    </>
  )
}

export default App
