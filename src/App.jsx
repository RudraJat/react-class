import { useState } from 'react'
import './App.css';
// import Header from './components/Header.jsx';
// import Food from './components/Food.jsx';
// import Footer from './components/Footer.jsx';
// import AuthContext from './components/AuthContext.jsx';
// import Increment from './components/Increment.jsx';
// import Decrement from './components/Increment.jsx';
// import {Context} from './components/Context.jsx';
// import Reset from './components/Increment.jsx';
// import Display from './components/Increment.jsx';
// import Parent from './components/Parent.jsx';
// import Mapfil from './components/Mapfil.jsx';
// import Card from './components/Card.jsx';
// import Array from './components/Array.jsx';
// import Greeting from './components/Greeting.jsx';

import FunWelcome from './CA/FunWelcome';
import ClaWelcome from './CA/ClaWelcome';
import Caprac from './CA/Caprac';

function App(){

    return(
        <>
        {/* <Header />
       
        <Food />
        {/* <div className="flex flex-col min-h-screen">
            <Card name="Rudra"/>
            <Greeting name="Rudra"/>
            <Parent/>
            <Mapfil />
            <Array />
            
        // </div> */}
        {/* <Footer />  */}
        <FunWelcome/>
        <ClaWelcome/>
        <Caprac/>
        </>

    )
}



export default App
