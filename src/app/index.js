import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import App from './components/App';
import Home from './components/home/Home';
import Header from './components/header/Header';
import AllDecks from './components/alldecks/AllDecks';
import CreateDecks from './components/createdecks/CreateDecks';
import DeckProfile from './components/deckprofile/DeckProfile';
import DeckView from './components/deckview/DeckView';
import Login from './components/login/Login';
import Profile from './components/profile/Profile';
import Summary from './components/summary/Summary';


import reducers from './reducers';

import './components/bundle.scss';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={App} />
        <Route path="/all-decks" component={AllDecks} />
        <Route path="/create-decks" component={CreateDecks} />
        <Route path="/deck-profile" component={DeckProfile} />
        <Route path="/deck-view" component={DeckView} />
        <Route path="/profile" component={Profile} />
        <Route path="/summary" component={Summary} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  </Provider>
  , document.getElementById('app'));
