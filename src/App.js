import './styles/index.scss';

import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ResultPage from './pages/ResultPage';

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    // Get available languages
    fetch('availableLanguages.json', {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      setLanguages(data[0].languages);
      setIsLoaded(true);
    })
    .catch(err => {
      console.error(err);
    });
  }, []);

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          {isLoaded && <HomePage languages={languages} />}
        </Route>
        <Route exact path="/result" component={ResultPage} />
      </Switch>
      <Footer />
    </>
  )
}

export default App
