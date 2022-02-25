
import "./App.css";
import WeatherApp from "./Components/WeatherApp";
import Layout from "./Components/Layout";
import 'bootstrap/dist/css/bootstrap.min.css';






function App() {

  let arrayCityStart = [
    {
      city: "Rome",
      country: "IT"
    },
    
  ]
    


 

  return (
    <div className='App'>
   
    <WeatherApp city="Rome" country="IT"  />
  
      {/* <div className="container">
        <div className="row">

          {arrayCityStart.map((value, index) => {

            return (
              <div className="col">
                <WeatherApp city={value.city} contry={value.country} listCity={arrayCityStart} />
              </div>
            )



            // return <li key={index}>{value}</li>
          })}
        </div>
      </div> */}






    </div>
  );
}

export default App;
