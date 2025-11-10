import { useState } from 'react'
import './App.css'
import Footer from './Footer.jsx'
import Card from './Card.jsx'

function App(){
    return(
        <div className="flex flex-col min-h-screen">
            <Card name="Rudra"/>
            <Footer />
        </div>
    )
}



export default App
