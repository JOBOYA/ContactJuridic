import React from 'react';
import Navigation from './component/NavBar';

import HomePage from './Pages/Forms';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="container">
        <HomePage />
        
      </div>
    </div>
  );
}

export default App;
