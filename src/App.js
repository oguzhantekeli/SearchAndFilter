import React from 'react'; 
import {Switch, BrowserRouter, Route } from 'react-router-dom'; 
import Home from './Search'; 
import ShowMore from './ShowMore'; 
import paths from "./paths" 
 
const RouterComponent = () => { 
  return ( 
    <BrowserRouter> 
      <Switch> 
        <Route path={paths.SEARCH_RESULT} component={ShowMore} /> 
        <Route path={paths.ROOT} component={Home} /> 
        <Route component={Home} /> 
      </Switch> 
    </BrowserRouter> 
  ); 
}; 
export default RouterComponent; 
 