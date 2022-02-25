import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import WeatherApp from './WeatherApp'
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherAction } from "../redux/slices/weatherSlices";



const Layout = (props) => {
    const [currentLocation, setCurrentLocation] = useState({});
    const [city, setCity] = useState(props.city);
    const [cityKey, setCityKey] = useState(props.city);
    const [country,setCountry] = useState(props.country);

    const searchCity = (e) => {
        e.preventDefault();
        setCurrentLocation({});
        setCityKey(city);
        // console.log(cityKey);
        // setWeather(weatherData && weatherData.weather && weatherData.weather[0] && weatherData.weather[0].main);


        // onClick={()=> setWeather(weatherData && weatherData.weather && weatherData.weather[0] && weatherData.weather[0].main)}
    }
    const dispatch = useDispatch();

    return (

        <Container>
              <h1 id="heading">Weather App</h1>
            <Row>
                <Col sm={8}>
                    <Card>
                    <WeatherApp city="Rome" contry="IT"  />   
                    </Card>
                </Col>
                <Col sm={4}>
              
                <form onSubmit={(e) => searchCity(e)}>
                <input type="text" autoFocus value={city} placeholder='Enter city name' onChange={(e)=>setCity(e.target.value)} />
                <button  onClick={() => dispatch(fetchWeatherAction({city:city}))}>Search</button>
                </form>
                </Col>
            </Row>
        </Container>



    );
}

export default Layout;