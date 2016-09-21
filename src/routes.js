import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './containers/homePage';
import DiscoveryPage from './containers/discoveryPage';
import CameraPage from './containers/cameraPage';
import ActivityPage from './containers/activityPage';
import PersonalPage from './containers/personalPage';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="discovery" component={DiscoveryPage}/>
    <Route path="camera" component={CameraPage}/>
    <Route path="activity" component={ActivityPage}/>
    <Route path="personal" component={PersonalPage}/>
  </Route>
);
