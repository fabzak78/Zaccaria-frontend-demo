import React, { useEffect, useState } from 'react';

import { fetchWeatherAction } from "../redux/slices/weatherSlices";
import Container from 'react-bootstrap/Container'


function FormInput (props)  {
    
    function handleInput(event)
    {
        console.log(event.target.value)
    }
   
  

    return (

        <Container>
              
                <form >
                <input type="text" id="city" name="city" autoFocus  placeholder='Enter city name' required={true} />
                <button onClick={handleInput}>Search</button>
                </form>
       
                </Container>



    );
}

export default FormInput;