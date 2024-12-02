import React from 'react';
import {Link} from 'react-router-dom';
import Footer from './Footer.js';

const Home = (props) => {
  

  return (
    <div>
      <div className='home-background'>
        <h1 className='home-title'>
          <Link to='/'>Tech Scope</Link>
        </h1>
        <div className='div-white-line'></div>
          <ul className='home-cat'>
            <li>
              <Link to='/ethics'>Ethics</Link>
            </li>
            <li>
              <Link to='/society'>Society</Link>
            </li>
            <li>
              <Link to='/politics'>Politics</Link>
            </li>
            <li>
              <Link to='/global'>Global</Link></li>
            <li>
              <Link to='/innovation'>Innovation</Link>
            </li>
          </ul>
        <div className='div-white-line'></div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
