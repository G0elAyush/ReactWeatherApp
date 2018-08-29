var React = require('react');
var Login = React.createClass({

onLoginSubmit: function(e){
  e.preventDefault();
  var loginDetails={};
  var inputUserName = this.refs.refUserName.value;
  var inputPassword = this.refs.refPassword.value;
  if(inputUserName.length > 0){
     this.refs.refUserName.value = '';
     //updates.stateUserName=inputName;
     alert("UserName - "+inputUserName);
   }
   if(inputPassword.length > 0){
      this.refs.refPassword.value = '';
      //updates.statePassword=inputMsg;
      alert("Password - "+inputPassword);
    }
   this.props.onNewName(updates);

},

  render: function(){
    return(
      <div>
        <form onSubmit={this.onLoginSubmit} >
          <input  type="text" ref="refUserName" placeholder="Enter your name" />
            <input  type="text" ref="refPassword" placeholder="Enter your password" ></input>
            <button>Login</button>
        </form>
      </div>
    );
  }
});
module.exports = Login;
