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
// import {Routes, Route} from 'react-router-dom';

//CA practice
// import Caprac from './CA/Caprac';
// import FunWelcome from './CA/FunWelcome';
// import ClaWelcome from './CA/ClaWelcome';
// import Click from './CA/Click';
// import MapList from './CA/MapList';
// import Alert from './CA/Alert';
// import AddButton from './CA/AddButton';
// import ShowText from './CA/ShowText';
// import Toggle from './CA/Toggle';
// import ComMount from './CA/ComMount';
// import Time from './CA/Time';
// import { MyContext } from './CA/Context';
// import Child from './CA/Child';
// import Profile from './CA/Profile.jsx';
// import Home from './CA/home.jsx';
// import About from './CA/About.jsx';


//FOR ETP
import Hello from './ETPDay1-9/1Home.jsx';
import User from './ETPDay1-9/2funCom.jsx';
import BtnDisable from './ETPDay1-9/3useState.jsx';


function App(){

    // const[count, setCount]=useState(0);

//     return(
//         <>
//         {/* <Header />
       
//         <Food />
//         {/* <div className="flex flex-col min-h-screen">
//             <Card name="Rudra"/>
//             <Greeting name="Rudra"/>
//             <Parent/>
//             <Mapfil />
//             <Array />
            
//         // </div> */}
//         {/* <Footer />  */}

//         {/* CA practice */}
//         {/* <Click/>
//         <MapList/>
//         <FunWelcome name="Rudra" age="20"/>
//         <ClaWelcome name="Rudra" age="20"/>
//         <Caprac/>
        
//         <AddButton/> */}
//         {/* <ShowText/>
//         <Toggle/> */}
//         {/* <ComMount/>
//         <Time/> */}
//        {/* <Alert/>
//         <MyContext.Provider value={{count, setCount}}>
//             <Child/>
//         // </MyContext.Provider>
//         // </> */}
//         {/* // <Memo/>
//         // </> */}
//         <Routes>
//             <Route path='/' element={<Home/>}/> 
//             <Route path='/about' element={<About/>}/>
//             <Route path='/profile' element={<Profile/>}/>
//         </Routes>
//         </>
//     )
// }

return (
    <>
    <User name="Rudra" location="Gwalior"/>
    <BtnDisable/>
    </>
)
}
export default App;
