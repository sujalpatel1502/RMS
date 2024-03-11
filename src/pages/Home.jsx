import React from 'react'
import Navbar from "../components/Navbar/Navbar"
import Header from '../components/Header/Header'
import Plan from '../components/Planning/Plan'
import Dictation from '../components/Dictation/Dictation'
import './home.css'
const Home = () => {
  return (
    <>
    <Navbar/>
    <Header/>
    <Plan/>
    {/* <div className="otherContainer">
    <span style={{width:"1444px",color:"#FFA03F",fontSize:"25px"}} >Famous Dictation!</span> */}
    <Dictation/>
    {/* </div> */}
  
    </>
  )
}

export default Home