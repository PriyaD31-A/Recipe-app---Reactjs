import React from 'react'
import './App.css';
import Header from './Components/Header'
import Content from './Components/Content'
import {BrowserRouter,Route,Routes} from 'react-router-dom'

import Recipedetails from './Components/Recipedetails'
import Footer from './Components/Footer';
import RecipeCards from './Components/Recipecards';

const App = () => {
  return (
    <div>
      <Header/>
      <Content/>
      <BrowserRouter>
        <Routes>
             <Route path="/" element={<RecipeCards/>}/>
             <Route path="/recipe/:id" element={<Recipedetails/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}

export default App

