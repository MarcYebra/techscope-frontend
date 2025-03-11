import React from 'react';
import {Link} from 'react-router-dom';

const Home = (props) => {
  

  return (
    <div>
      <div>
        <h1 className='home-title'>
          <Link to='/'>Tech Scope</Link>
        </h1>
        <div className='div-white-line'></div>
          <ul className='home-cat'>
            <li>
              <Link to='/ethics'>History</Link>
            </li>
            <li>
              <Link to='/society'>Modern</Link>
            </li>
            <li>
              <Link to='/politics'>Future</Link>
            </li>
            <li>
              <Link to='/global'>Ethics</Link></li>
          </ul>
        <div className='div-white-line'></div>
      </div>
    </div>
  );
};

export default Home;
