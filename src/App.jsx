import { useState } from 'react'
import './App.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {useDispatch, useSelector} from 'react-redux'
import { increment,decrement,reset } from './redux/counterslice';

function App() {
  const count = useSelector((state)=>state.counterReducer.value)

  // To call the actions from couterslice.js
  const dispatch = useDispatch()

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
        <TextField id="outlined-basic" label="Range" variant="outlined" />
        <Button className='ms-3' variant="contained" color='primary'>Click</Button>
        </div>
        </div>
     </div>
    </>
  )
}

export default App
