import React from 'react';
import Navbar from './components/Navbar';
import BodyHeader from './components/BodyHeader';
import BodyTop from './components/BodyTop';
import BodyMiddle from './components/BodyMiddle';

import './styles/App.css';

function App() {
  return ( 
    <div className = "app" >
    <Navbar /> 
    <BodyHeader />
    <BodyTop />
    <BodyMiddle />

    </div>
  );
}

export default App;