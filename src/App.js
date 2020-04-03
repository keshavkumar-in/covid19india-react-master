import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import './App.scss';

import Home from './components/home';
import Navbar from './components/navbar';
import Links from './components/links';
import SC from './components/sc';
import Banner from './components/banner';

const history = require('history').createBrowserHistory;

function App() {
  const pages = [
    {
      pageLink: '/',
      view: Home,
      displayName: 'Home',
      animationDelayForNavbar: 0.2,
    },
    {
      pageLink: '/symptomchecker',
      view: SC,
      displayName: 'Symptom Checker',
      animationDelayForNavbar: 0.5,
    },
    {
      pageLink: '/links',
      view: Links,
      displayName: 'Helpful Links',
      animationDelayForNavbar: 0.6,
    },
  ];

  return (
    <div className="App">
      <Router history={history}>
        <Route
          render={({location}) => (
            <div className="Almighty-Router">
              <Navbar pages={pages} />
              <Banner />
              <Route exact path="/" render={() => <Redirect to="/" />} />
              <Switch location={location}>
                {pages.map((page, i) => {
                  return (
                    <Route
                      exact
                      path={page.pageLink}
                      component={page.view}
                      key={i}
                    />
                  );
                })}
              </Switch>
            </div>
          )}
        />
      </Router>

      <footer className="fadeInUp" style={{animationDelay: '2s'}}>
        <h5>We stand with everyone fighting on the frontlines</h5>
        <div className="link">
          <a href="https://coronalivestatus.info">Covid-19 India Live Status</a>
        </div>
        <div className="tags">
          <h1>Related tags:</h1>
          <ul>
            <li>covid19india</li>
            <li>covid19</li>
            <li>covid-19</li>
            <li>COVID-19</li>
            <li>COVID19</li>
            <li>coronavirus</li>
            <li>corona-virus</li>
            <li>corona virus</li>
            <li>nobel corona virus</li>
            <li>nobel coronavirus</li>
            <li>what is covid-19</li>
            <li>what is covid19</li>
            <li>what is coronavirus</li>
            <li>what is corona virus</li>
            <li>coronavirus symptoms</li>
            <li>corona virus symptoms</li>
            <li>what is the symptoms of coronavirus</li>
            <li>what is the symptoms of corona virus</li>
            <li>what is the symptoms of covid19</li>
            <li>what is the symptoms of covid-19</li>
            <li>stay home</li>
            <li>WHO guidlines on corona</li>
            <li>Corona symptoms checker</li>
            <li>online corona symptoms checker</li>
            <li>coronavirus symptoms checker</li>
            <li>corona virus symptoms checker</li>
            <li>latest report of coronavirus</li>
            <li>corona prevention</li>
            <li>corona disease</li>
            <li>treatment of coronavirus</li>
            <li>coronavirus treatment</li>
            <li>corona virus treatment</li>
            <li>treatment of corona virus</li>
            <li>corona current situation</li>
            <li>corona infected</li>
            <li>virus 2019</li>
            <li>how may peoples are infected by corona</li>
            <li>what is the meaning of lockdown</li>
            <li>what is the meaning of Quarantine</li>
            <li>corona latest news</li>
            <li>latest news on corona</li>
            <li>coronavirus latest news</li>
            <li>corona virus latest report</li>
            <li>coronavirus latest report</li>
            <li>China virus</li>
            <li>myth related to coronavirus</li>
            <li>myth and truth of coronavirus</li>
            <li>global report on coronavirus</li>
            <li>latest report on coronavirus</li>
            <li>coronavirus news</li>
            <li>corona virus news</li>
            <li>latest report on corona virus</li>
            <li>latest corona news</li>
            <li>latest coronavirus news</li>
            <li>myth behind corona virus</li>
            <li>myth behind coronvirus</li>
            <li>corona in india</li>
            <li>infected people in india due to coronavirus</li>
            <li>infected people in india</li>
            <li>infected people in india due to covid19</li>
            <li>infected people in india due to corona virus</li>
            <li>infected people in india due to COVID19</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
