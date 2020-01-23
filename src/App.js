import React, {useState,useEffect} from "react";
import axios from "axios";
import dummyData from "./dummyData";
import Card from "./Card"
import "./App.css";

function App() {
  
      // useEffect(()=>{axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")                            
      // .then(response =>{
      //   console.log(response)
      // })
      // .catch(error => {
      //   console.log("the data was not returned")
      // })},[]);
      const data = dummyData;
      console.dir(data);

    return (
      <div className="App" style={{backgroundImage: `url(${data.hdurl})` }}>
        <div className="Clock">
          <h2>{data.</h2>
        </div>
        <Card data={data}/>
      </div>
  );
}

export default App;


