import React from 'react';
import Navbar from './components/Navbar/index.js';
import Welcome from './components/Welcome/index.js';
import Footer from './components/Footer/index.js';

// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  return (
    <div>
      <Navbar />
      <Welcome />
      <Footer />
    </div>
  );
}

export default App;
