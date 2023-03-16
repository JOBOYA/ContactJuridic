import React from 'react';
import Navigation from './component/NavBar';
import MobileNavBar from './component/MobileNavBar';
import HomePage from './Pages/Forms';
import Cookies from './component/cookies';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <MobileNavBar />
      <div className="container">
        <HomePage />
        <Cookies />
        <Footer />
       
      </div>
    </div>
  );
}

export default App;
