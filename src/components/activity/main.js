/**
 * Created by Administrator on 2016/9/21 0021.
 */
import React from 'react';
import {Link} from 'react-router';


class Main extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount(){
    console.log('asfasfa');
    console.log(this.props);
  }

  render() {

    return (
      <div>
        <h1>React Slingshotsfasfasdf</h1>

        <h2>Get Started</h2>
        <ol>
          <li>Review the <Link to="fuel-savings">demo app</Link></li>
          <li>Remove the demo and start coding: npm run remove-demo</li>
          <li>Remove the demo and start coding: npm run remove-demo</li>
          <li>Remove the demo and start coding: npm run remove-demo</li>
          <li>Remove the demo and startsadfasfafasf coding: npm run remove-demo</li>
          <li>Remove the demo and start coding: npm run remove-demo</li>
        </ol>
      </div>
    )
  }
}
export default Main;
