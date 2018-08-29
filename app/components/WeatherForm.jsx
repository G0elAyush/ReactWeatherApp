var React = require('react');
var WeatherForm = React.createClass({
  onFormButtonClick: function(e){
    e.preventDefault();

    // var updates={};
     var inputCity = this.refs.refCity.value;
    // var inputMsg = this.refs.refMessage.value;
    if(inputCity.length > 0){
       this.refs.refCity.value = '';
       //updates.stateName=inputName;
           this.props.onSearch(inputCity);
     }
    //  if(inputMsg.length > 0){
    //     this.refs.refMessage.value = '';
    //     updates.stateMsg=inputMsg;
    //   }
    //  this.props.onNewName(updates);

  },
  render: function(){

    return(

<div>

  <form onSubmit={this.onFormButtonClick}>
<div>
      <input type="text" ref="refCity" placeholder="Enter city name" />
</div>
<div>
     <button>Get Weather</button>
</div>

  </form>
</div>

    );

  }


});
module.exports = WeatherForm;
