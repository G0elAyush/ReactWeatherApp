var React = require('react');
var GreeterForm = require('aliasGreeterForm');
var GreeterMessage = require('aliasGreeterMessage');

var Greeter = React.createClass({
  getDefaultProps: function(){
    return{
      propName:'react',
      propMessage:'default message'
    };
  },
  getInitialState: function(){
    return{
      stateName: this.props.propName,
      stateMsg:this.props.propMessage
    };
  },
  handleNewName : function(updates){
   this.setState(updates);
  },
  render: function () {
    var displayName = this.state.stateName;
    var displayMessage = this.state.stateMsg ;
    return (
      <div>
        <GreeterMessage greeterName={displayName} greeterMsg={displayMessage}/>
        <GreeterForm onNewName={this.handleNewName}/>
      </div>
    );
  }
});
module.exports = Greeter;
