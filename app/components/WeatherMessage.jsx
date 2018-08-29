var React = require('react');
var WeatherForm= require('./WeatherForm.jsx');
var WeatherMessage = ({temp,location}) => {

    return(
      <div>
        <h3>It is  {temp}&#8451;  in  {location}.</h3>
      </div>
    );

  };
module.exports = WeatherMessage;
