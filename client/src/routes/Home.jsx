import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ArticlesHero from "../components/ArticlesHero"
import Footer from '../components/Footer'

function Home() {
  return (
     <>
        <Navbar/>
        <Hero/>
        <ArticlesHero/>
        <Footer/>
     </>
  )
}

export default Home