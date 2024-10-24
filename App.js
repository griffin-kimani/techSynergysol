import React from 'react';
import { Header, Footer } from './containers';
import {
    Navbar,
    Home,
    About,
    Chatbot,
    Portal,
    Services,
    Talktous,
    Contactus,
  } from './components';

  const App = () => {
    return (
      <>
        <Navbar />  
        <Home />
        <Services />
        <Footer />
        <About />
        <Chatbot /> 
        <Portal />
        <Contactus />
        <Talktous /> 
        <Header />
        
        </>
    );
  };

  export default App;
  