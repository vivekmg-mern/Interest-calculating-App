import { TextField,Stack,Button} from '@mui/material'
import './App.css'
import { useState } from 'react'


function App() {
  const [principle,setPrinciple] = useState(0)
  const [rate,SetRate] = useState(0)
  const [year,setYear] = useState(0)
  const [interest,SetInterest] = useState(0)
  const [invalidprinciple,setInvalidPrinciple]= useState(false)
  const [invalidRate,setInvalidRate]= useState(false)
  const [invalidYear,setInvalidYear]= useState(false)

  const validateInputs = (inputTag)=>{
    // console.log(inputTag);
     const {name,value} = inputTag
    //  console.log(name, typeof value);
    //  console.log(!!value.match(/^\d+(\.\d+)?$/));
    if(name=='principle'){
      setPrinciple(value)
      if(!!value.match(/^\d+(\.\d+)?$/)){
        setInvalidPrinciple(false)
      }else{
        setInvalidPrinciple(true)
      }
    }else if(name=='rate'){
      SetRate(value)
      if(!!value.match(/^\d+(\.\d+)?$/)){
        setInvalidRate(false)
      }else{
        setInvalidRate(true)
      }

    }else{
      setYear(value)
      if(!!value.match((/^\d+(\.\d+)?$/))){
        setInvalidYear(false)
      }else{
        setInvalidYear(true)
      }
    }

     
     
    
  }

  const handleCalculate=(e)=>{
    e.preventDefault()
    if(principle&&rate&&year){
      SetInterest(principle*rate*year/100)

      

    }else{
      alert("Please fill the form completely")
    }
  }

  const handleReset=()=>{
    SetInterest(0)
    setYear(0)
    SetRate(0)
    setPrinciple(0)
    setInvalidPrinciple(false)
    setInvalidRate(false)
    setInvalidYear(false)
  }


  return (
    <>
    <div style={{width:'100%',minHeight:'100vh', }} className='d-flex justify-content-center align-items-center bg-dark'>

      <div style={{width:'600px'}} className='bg-light rounded p-5 '> 
      <h1>simple interest calculator</h1>
      <p>Calculate your simple interest Easily !</p>

      <div className='bg-warning p-3 text-light text-center rounded '>
        <h1> ₹ {interest}</h1>
        <p>Total Simple Interest</p>

      </div>
      <form className='mt-5'>
        {/* principle amount */}
        <div className='mb-3'>
        <TextField value={principle || ""} name='principle' onChange={(e)=> validateInputs(e.target)} className='w-100' id="outlined-Principle" label="Principle" variant="outlined" />
        </div>

        {/* invalid principle */}
        {invalidprinciple && <div className='mb-3 text-danger fw-bolder'> 
          Invalid Principle Amount!!!</div>}
        {/* rate of intrest */}
        <div className='mb-3'>
        <TextField  value={rate || ""}  name='rate' onChange={(e)=> validateInputs(e.target)} className='w-100' id="outlined-Rate" label="Rate" variant="outlined" />
        </div>
        
        {/* invalid rate */}
        {invalidRate && <div className='mb-3 text-danger fw-bolder'>
          Invalid Rate !!!</div>}
        {/* year */}
        <div className='mb-3'>
        <TextField  value={year || ""}  name='year' onChange={(e)=> validateInputs(e.target)} className='w-100' id="outlined-Year" label="Year" variant="outlined" />
        </div>

        {/* invalid year */}
        {invalidRate && <div className='mb-3 text-danger fw-bolder'>
          Invalid year !!!</div>}

        <Stack direction="row" spacing={2}>
        <Button type='submit' onClick={handleCalculate} disabled={invalidprinciple || invalidRate || invalidYear} variant="contained" style={{width:'50%',height:'70px'}} className='bg-dark'>Calculate</Button>
        <Button onClick={handleReset} style={{width:'50%',height:'70px'}} variant="outlined">RESET</Button>
 
        </Stack>
      </form>

      </div>

    </div>
   


    </>
  )
}

export default App