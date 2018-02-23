import User from './classes/user.js';
console.log("Javascript: login loaded");
var myapp = document.querySelector("my-app");
var register = myapp._getRegisterLogin();
var loginButton = register._getLoginButton();
var user;
var username = register._getUsername();
var password = register._getPassword();
function checkLogin(){
    if(username == undefined || password == undefined){
        return false;
    }
    user = new User(username.value, password.value);
    if(user.getPassword() == 'admin' || user.getPassword() == 'admin'){
        myapp._updatePage("overview-page");
        return true;
    }
}
loginButton.onclick = function(){checkLogin()};
password.onkeypress = function(e){
    if (e.keyCode == 13 || e.which == 13){
        checkLogin();
    }
}
username.onkeypress = function(e){
    if (e.keyCode == 13 || e.which == 13){
        checkLogin();
    }
}
