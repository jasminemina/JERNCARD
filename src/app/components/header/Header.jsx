import React from 'react';
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/all-decks">All Decks</Link>
          </li>          
          <li>
            <Link to="/create-decks">Create Decks</Link>
          </li>
          <li>
            <Link to="/deck-profile">Deck Profile</Link>
          </li>           
          <li>
            <Link to="/deck-view">Deck View</Link>
          </li>          
          <li>
            <Link to="/profile">Profile</Link>
          </li>          
          <li>
            <Link to="/summary">Summary</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>          
        </ul>
      </nav>
    </header>
  )
}

export default Header;
