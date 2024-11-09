import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';

const App = () => {
  const homeProps = {
    title: "Welcome to Our Template",
    description: "This is a customizable React template built with Vite and Bootstrap."
  };

  const aboutProps = {
    title: "About Us",
    info: "This is a versatile template that can be modified to create different websites."
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home {...homeProps} />} />
        <Route path="/about" element={<About {...aboutProps} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
