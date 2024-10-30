import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Footer } from './containers';
import {
  Navbar,
  Home,
  About,
  Chatbot,
  Services,
  Talktous,
  Contactus,
} from './components';

const App = () => {
  return (
    <Router>
  
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Navbar />
              <Home />
              <Services />
              <About />
              <Chatbot />
              <Contactus />
              <Footer />
            </>
          }
        />
        
        {/* Separate Route for Talk to Us */}
        <Route
          path="/talktous"
          element={
            <>
              <Talktous />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
