import React, { useState } from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Collections from '../components/Collections'
import Footer from '../components/Footer'
import { Gents, Ladies } from '../data'
import WomenCollection from '../components/WomenCollection'


const MainPage = () => {

  const [gentsFashion, setgentsFashion] = useState(Gents);
  const [womenFashion, setwomenFashion] = useState(Ladies);

  

  return (
    <div>
        <Header /> 
        <Banner />
        <Collections man = {gentsFashion}/>
        <WomenCollection women = {womenFashion}/>
        <Footer />
        
    
    </div>
  )
}

export default MainPage