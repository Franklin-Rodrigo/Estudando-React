import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../routes';


import Header from './navbar/navbar';
import Footer from './footer/footer';
function App() {
  return (

  
    <BrowserRouter>
     <Header/>
    <main className="text-justify">
       <Routes />
    </main>
      <Footer/>
    </BrowserRouter>
    
    
   
  );
}

export default App;
