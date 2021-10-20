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
    // fetch("https://google-translate1.p.rapidapi.com/language/translate/v2/languages", {
    //   "method": "GET",
    //   "headers": {
    //     "accept-encoding": "application/gzip",
    //     "x-rapidapi-host": "google-translate1.p.rapidapi.com",
    //     "x-rapidapi-key": "b4096686a4msh43536491990dcd7p1cbadcjsnf3dbd6782036"
    //   }
    // })
    // .then(response => response.json())
    // .then(body => {
    //   body.data.languages.forEach(el => allLanguages.push(el.language));
    //   setIsLoaded(true);
    // })
    // .catch(err => {
    //   console.error(err);
    // });

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
          <HomePage languages={languages} />
        </Route>
        <Route exact path="/result" component={ResultPage} />
      </Switch>
      <Footer />
    </>
  )
}

export default App
