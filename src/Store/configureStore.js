import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";

const configureAppStore = () =>{
    return configureStore({
        reducer: reducer
    })
}

export default configureAppStore;