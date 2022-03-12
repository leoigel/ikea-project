import React from "react";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import {DataProvider} from './context/DataContext';
import Home from './components/home/Home';
import Questions from './components/questions/Questions';
import Carossel from './components/carossel/Carossel';
import List from './components/list/List.js'
function App() {
  return (      
                <DataProvider>
                   

                <BrowserRouter>
                  <Routes>
                   <Route path={"/"}  element={<Home />} exact />
                   <Route path={"/questions/:id"}  element={<Questions />} exact />
                   <Route path={"/carossel-page/:id"}  element={<Carossel />} exact />
                   <Route path={"/list-items"} element={<List/>} exact/>
                   
                  </Routes>   
                </BrowserRouter>
                </DataProvider>
    
  );
}

export default App;
