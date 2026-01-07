import {configureStore} from "@reduxjs/toolkit";
import countReducer from "./countSlice.jsx";

const storeRtk = configureStore({
    reducer:{
        counter: countReducer
    }
});

export default storeRtk;