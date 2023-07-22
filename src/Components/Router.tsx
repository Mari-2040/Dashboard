import React from "react";
import Home from "../Components/Home/Home";
import { BrowserRouter as Router, Route, createBrowserRouter, createRoutesFromElements,} from "react-router-dom";
import Analyze from  "../Components/Analyze/Analyze"
import Carbon from "../Components/Carbon/Carbon"
import Calculator from"../Components/Calculator/Calculator"
import Report from "../Components/Report/Report"
import AtherPage from "../Components/AtherPage/AtherPage";
import Launchpad from "../Components/Launchpad/Launchpad";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path=''element={<Home />}>
      <Route index path='/Launchpad'element={<Launchpad/>}/>
      <Route path='Analyze' element = {<Analyze/>}/>
      <Route path='Carbon' element= {<Carbon/>}/>
      <Route path='Culator' element= {<Calculator/>}/>
      <Route path='Report' element = {<Report/>}/>
      <Route path='AtherPage' element = {<AtherPage/>}/>
    </Route>
  )
);
export default router;
