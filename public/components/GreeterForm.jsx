var React = require('react');
var GreeterForm = React.createClass({
  onFormButtonClick: function(e){
    e.preventDefault();
    var updates={};
    var inputName = this.refs.refName.value;
    var inputMsg = this.refs.refMessage.value;
    if(inputName.length > 0){
       this.refs.refName.value = '';
       updates.stateName=inputName;
     }
     if(inputMsg.length > 0){
        this.refs.refMessage.value = '';
        updates.stateMsg=inputMsg;
      }
     this.props.onNewName(updates);

  },
  render: function(){
    return(
      <form onSubmit={this.onFormButtonClick}>
        <div>
          <input type="text" ref="refName" placeholder="Enter your name" />
        </div>
        <div>
          <textarea ref="refMessage" placeholder="Enter your message"></textarea>
        </div>
       <div>
         <button>click me</button>
       </div>

      </form>
    );
  }
});
module.exports = GreeterForm;
