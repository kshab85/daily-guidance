import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Containers/Home/Home';
function App() {
  return (
    <div className="main">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
