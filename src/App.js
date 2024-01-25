import React from 'react';
import { BrowserRouter,
  Routes,
  Route} from 'react-router-dom'
import About from './components/About';
import './App.css';

const App  = () =>{
  return(
  <div className='app-container'>
    <BrowserRouter>
    <Routes>
    <Route exact path='/' Component={About}/>

    </Routes>
    </BrowserRouter>
    </div>
);
  };

export default App
