var React = require('react');
var Nav = require('aliasNav');

var Main = (props) =>{
  return(
    <div>
      <h2>This is main component</h2>
      <Nav/>
      {props.children}
    </div>

  );

};

module.exports = Main;
