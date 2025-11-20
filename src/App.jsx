import { useState } from 'react'
import './App.css';
import Header from './components/Header.jsx';
import Food from './components/Food.jsx';
import Footer from './components/Footer.jsx';
// import Parent from './components/Parent.jsx';
// import Mapfil from './components/Mapfil.jsx';
// import Card from './components/Card.jsx';
// import Array from './components/Array.jsx';
// import Greeting from './components/Greeting.jsx';

function App(){
    return(
        <>
        <Header />
        <Food />
        {/* <div className="flex flex-col min-h-screen">
            <Card name="Rudra"/>
            <Greeting name="Rudra"/>
            <Parent/>
            <Mapfil />
            <Array />
            
        </div> */}
        <Footer />
        </>

    )
}



export default App
