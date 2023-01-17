import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Detail from './Detail';
import Home from './Home';
import List from './List';

const App =()=>{
    return(
        <Routes>
            <Route path='/'  element={<Home />} />
            <Route path='/:strCategory'  element={<List />} />
            <Route path='/:strCategory/:idMeal'  element={<Detail />} />

            
        </Routes>
    )
}
export default App;