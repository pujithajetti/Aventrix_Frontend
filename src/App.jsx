import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landingpage from "./pages/Landingpage";
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUp";
import ResetPage from "./pages/ResetPage";
import Contact from "./components/Contact";
import DashBoard from './pages/DashBoard';
import Users from './pages/Users';
import Projects from './pages/Projects';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';



const App = () => {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landingpage/>}/>

      <Route path='/login' element={<LoginPage/>}/>

      <Route path='/signup' element={<SignUp/>}/>

      <Route path='/reset' element={<ResetPage/>}/>

      <Route path='/contact' element={<Contact/>}/>
      
      <Route path='/dashboard' element={<DashBoard/>}/>

      <Route path='/users' element={<Users/>}/>

      <Route path='/projects' element={<Projects/>}/>

      <Route path='/analytics' element={<Analytics/>}/>

      <Route path='/settings' element={<Settings/>}  />    

      </Routes>
    </BrowserRouter>
  );
}

export default App;
