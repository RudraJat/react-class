import { useState } from 'react'
import './App.css';
import Footer from './components/Footer.jsx';
import Parent from './components/Parent.jsx';
import Mapfil from './components/Mapfil.jsx';
import Card from './components/Card.jsx';

function App(){
    return(
        <div className="flex flex-col min-h-screen">
            <Card name="Rudra"/>
            <Parent/>
            <Mapfil />
            <Footer />
        </div>
    )
}



export default App
