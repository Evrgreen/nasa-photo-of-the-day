import React, {useState,useEffect} from "react";
import axios from "axios";
import Card from "./Card"
import "./App.css";
import BottomBar from "./BottomBar";

function App() {
  
  const [data,setData] = useState([])

      useEffect(()=>{axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")                            
      .then(response =>{
        console.log(response)
        setData(response.data)
      })
      .catch(error => {
        console.log("the data was not returned")
      })},[]);

      
      console.log(data)

    return (
      <div className="App" style={{backgroundImage: `url(${data.hdurl})` }}>
        <div className="Clock">
          <h2>{data.data}</h2>
        </div>
        <Card data={data}/>
      </div>
  );
}

export default App;


