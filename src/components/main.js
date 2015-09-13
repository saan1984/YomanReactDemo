'use strict';

var YomanReactDemoApp = require('./YomanReactDemoApp');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var content = document.getElementById('content');

var Routes = (
  <Route handler={YomanReactDemoApp}>
    <Route name="/" handler={YomanReactDemoApp}/>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
