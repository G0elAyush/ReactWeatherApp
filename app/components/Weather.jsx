var React = require('react');
var WeatherForm= require('./WeatherForm.jsx');
var WeatherMessage= require('./WeatherMessage.jsx');
var openWeatherMap = require('../api/openWeatherMap.jsx');
var Weather = React.createClass({
  getInitialState: function(){
    return{
      isLoading:false
    };
  },

handleSearch:function(location){
  var that = this;
  this.setState({isLoading:true});
  debugger;

  openWeatherMap.getTemp(location).then(function (temp) {
    that.setState({
      stateLocation: location,
      stateTemp: temp,
      isLoading:false
    });

  }, function (errorMessage) {
      that.setState({
        isLoading:false
            });
      alert(errorMessage);
  });

},

  render: function(){
var {stateLocation, stateTemp, isLoading, errorMessage} = this.state;

function renderMessage(){
  if(isLoading){
return <h3>FetchingWeather</h3>;
  }
  else if (stateLocation && stateLocation) {
  return  <WeatherMessage location={stateLocation} temp={stateTemp} />;
  }

}
    return(
<div>
<h3>Get Weather</h3>
<WeatherForm onSearch={this.handleSearch}/>
{renderMessage()}

</div>


    );

  }


});
module.exports = Weather;
