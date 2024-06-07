import React from 'react';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import BookPage from './components/BookingPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import './App.css';

const App = () => {
  return (
    <div className='container'>
      <HomePage/>
    </div>
  );
};

export default App;
