import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import '../styles/css/ionicons.min.css'
const App = (props) => {
  return (
    <div>
      <IndexLink to="/"><span className="ion-social-vimeo-outline" />Home </IndexLink>
      {' | '}
      <Link to="/fuel-savings">Demo App </Link>
      {' | '}
      <Link to="/about">About</Link>
      <br/>
      {props.children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
