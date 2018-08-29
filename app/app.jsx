var React = require('react');
var ReactDOM = require('react-dom');
var Main = require('aliasMain');
var {Router, Route, IndexRoute, hashHistory} = require('react-router');
var Login = require('aliasLogin');
var About = require('aliasabout');
var Weather = require('aliasWeather');
var Examples = require('aliasExamples');

var varName = 'Ayush';
var varMaessage='This is first message!';
ReactDOM.render(
  <Router history={hashHistory}>

    <Route path="/" component={Main}>
          <IndexRoute component={Weather}/>
    <Route path="about" component={About}/>
    <Route path="example" component={Examples}/>

    </Route>
  </Router>,
  document.getElementById('app')
);
