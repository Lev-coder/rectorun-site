import React from 'react';

import './App.css';

import Head from './sections/head/Head';
import Menu from './sections/menu/Menu';
import Comments from './sections/comments/Comments';
import Ordering from './sections/ordering/Ordering';
import Footer form './sections/footer/Foote';

export default class App extends React.Component
{
  render()
  {
    return(
      <div>
        <Head />
      </div>
    )
  }
}