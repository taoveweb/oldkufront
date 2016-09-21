import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import '../styles/css/ionicons.min.css';
class App extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div>
        <IndexLink to="/"><span className="ion-social-vimeo-outline" />首页 </IndexLink>
        {' | '}
        <Link to="/discovery">发现</Link>
        {' | '}
        <Link to="/camera">发布</Link>
        {' | '}
        <Link to="/activity">活动</Link>
        {' | '}
        <Link to="/personal">个人</Link>
        <br/>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;


