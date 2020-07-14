import React from 'react';
import './App.css';
import Homepage from './Pages/Homepage';
import Contact from './Pages/Contact';
import Resume from './Pages/Resume';
import {Route, Link} from 'react-router-dom'
import Navbar from './Componets/Navbar';
import Footer from './Componets/Footer'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Route exact path='/Pages/Homepage' component={Homepage}/>
      <Route exact path='/Pages/Resume' component={Resume}/>
      <Route exact path='/Pages/Contact' component={Contact}/>
      <Footer></Footer>
    </div>
  );
}

export default App;
