import React from 'react'
import './home.css'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/navbar/header/Header'
import Featured from '../../components/featured/Featured'
import PropertyList from '../../components/propertyList/PropertyList'
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
const Home = () => {
  return (
    <>
   <Navbar/>
   <Header/>
   <div className="homeContainer">
    <Featured/>
    <h1 className='homeTitle'>Browse by property type</h1>
    <PropertyList/>
    <h1 className='homeTitle'>Homes guest love</h1>
    <FeaturedProperties/>
    <MailList/>
    <Footer/>
   </div>
   </>
  )
}

export default Home