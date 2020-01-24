import React, {useState,useEffect} from "react";
import axios from "axios";
import Card from "./Card"
import "./App.css";
import BottomBar from "./BottomBar";
import styled from "styled-components"
const MainPage = styled.div`
height:100vh;
// background-size:fit;

`;
const Clock = styled.h2`
color:white;
font-size:2rem;
z-index:10;

`;


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
      <MainPage className="App" style={{backgroundImage: `url(${data.hdurl})` }}>
        <Card data={data}/>
      </MainPage>
  );
}

export default App;


