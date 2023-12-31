import React from "react";
import Home from "../Components/Home/Home";
import { BrowserRouter as Router, Route, createBrowserRouter, createRoutesFromElements, Navigate} from "react-router-dom";
import Analyze from  "../Components/Analyze/Analyze"
import Carbon from "../Components/Carbon/Carbon"
import Calculator from"../Components/Calculator/Calculator"
import Report from "../Components/Report/Report"
import AtherPage from "../Components/AtherPage/AtherPage";
import Launchpad from "../Components/Launchpad/Launchpad";
import Wrapper from "../Components/Wrapper/Wrapper";
import Login from "../Components/Login/Login";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='' element={<Wrapper />}>
      <Route index element={ <Navigate to="/Launchpad" /> }/>
      <Route index path='/Launchpad'element={<Launchpad/>}/>
      <Route path='Analyze' element = {<Analyze/>}/>
      <Route path='Carbon' element= {<Carbon/>}/>
      <Route path='Culator' element= {<Calculator/>}/>
      <Route path='Report' element = {<Report/>}/>
      <Route path='AtherPage' element = {<AtherPage/>}/>
    </Route>
    <Route path='login' element={<Login />} />
    </>
  )
);
export default router;
