import React from 'react';
import Navbar from './components/Navbar/index.js';

// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  return (
    <div>
    <Navbar />
    </div>
  );
}

export default App;
