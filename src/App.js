import { useState } from 'react';
import './App.css';
import { TextField, Stack, Button } from '@mui/material';

function App() {
  const [interest, setInterest] = useState(0)
  const [principale, setPrincipale] = useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] = useState(0)
  const [isValid, setIsValid] = useState(true)
  const [isRateValid, setRateIsValid] = useState(true)
  const [isYearValid, setYearIsValid] = useState(true)


  const handleCalculate = (e) => {
    e.preventDefault()
    if (!principale || !rate || !year) {
      alert("Please fill the form!");
    } else {
      setInterest(principale * rate * year / 100)
    }
  }

  const handleReset = (e) => {
    setInterest(0)
    setPrincipale(0)
    setRate(0)
    setYear(0)
    setIsValid(true)
    setRateIsValid(true)
    setYearIsValid(true)
  }
  const validInput = (e) => {
    const {value,name} = e.target;
    if(value.match(/^[0-9\b]+$/)){
      if(name==='principle'){
        setPrincipale(value)
        setIsValid(true)
      }else if(name==='rate'){
        setRateIsValid(true)
        setRate(value)
      }else if(name==='year'){
        setYear(value)
        setYearIsValid(true)
      }
      
    }else{
      if(name==='principle'){
        setPrincipale(value)
        setIsValid(false)
      }else if(name==='rate'){
        setRateIsValid(false)
        setRate(value)
      }else if(name==='year'){
        setYear(value)
        setYearIsValid(false)
      }
    }
  }
  return (
    <div style={{ height: '100vh' }} className='d-flex w-100 justify-content-center align-items-center bg-dark'>Interest App
      <div className='w-500 bg-light rounded p-5'>
        <div className='heading'>
          <h3>Simple Calculator</h3>
          <p>Calculate your simple interest Easily</p>
        </div>
        <div style={{ height: '150px' }} className='interest-card d-flex w-100 justify-content-center flex-column text-light shadow align-items-center rounded bg-info'>
          <h1> ₹ {interest}   </h1>
          <p className='fw-bold'>Total Simple Interest</p>
        </div>
        <div>
          <form className='mt-5' action="" onSubmit={handleCalculate}>
            <div className='mb-3'>
              <TextField className='w-100' id="outlined-basic" label="₹ Principle amount" variant="outlined" name='principle' value={principale || ""} onChange={(e) => { validInput(e) }} />
            </div>
            {
              !isValid &&
              <div className='text-danger mb-3'>
                *Invalid input
              </div>
            }
            <div className='mb-3'>
              <TextField className='w-100' id="outlined-basic" label="Rate of interest (p.a) %" variant="outlined" name='rate' value={rate || ""} onChange={(e) => { validInput(e) }} />
            </div>
            {
              !isRateValid &&
              <div className='text-danger mb-3'>
                *Invalid input
              </div>
            }
            <div className='mb-3'>
              <TextField className='w-100' id="outlined-basic" label="Time period ( Yr )" variant="outlined" name='year' value={year || ""} onChange={(e) => { validInput(e) }} />
            </div>
            {
              !isYearValid &&
              <div className='text-danger mb-3'>
                *Invalid input
              </div>
            }
            <Stack className='d-flex justify-content-between' direction="row" spacing={2}>
              <Button type='submit' style={{ width: "200px", height: '70px' }}  variant="contained" disabled = {isValid && isRateValid && isYearValid? false:true}>Calculate</Button>
              <Button onClick={handleReset} style={{ width: "200px", height: '70px' }} variant="outlined">Reset</Button>
            </Stack>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
