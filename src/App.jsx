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

import Caprac from './CA/Caprac';
import FunWelcome from './CA/FunWelcome';
import ClaWelcome from './CA/ClaWelcome';
import Click from './CA/Click';
import MapList from './CA/MapList';
import Alert from './CA/Alert';
import AddButton from './CA/AddButton';

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
        <Click/>
        <MapList/>
        <FunWelcome name="Rudra" age="20"/>
        <ClaWelcome name="Rudra" age="20"/>
        <Caprac/>
        <Alert/>
        <AddButton/>
        </>

    )
}



export default App
