var React = require('react');
var GreeterMessage = React.createClass({
  render : function(){
    var finalName = this.props.greeterName;
    var finalMsg = this.props.greeterMsg;
    return(
      <div>
        <h1>Hello {finalName}!</h1>
        <p>{finalMsg}</p>
        </div>
    );
  }
});
module.exports = GreeterMessage;
