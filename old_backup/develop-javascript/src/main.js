import User from './classes/user.js';
console.log("Javascript: main loaded");
var myapp = document.querySelector("my-app");
var register = myapp._getRegisterLogin();
var loginButton = register._getLoginButton();
var user;
loginButton.onclick = function(){
    var username = register._getUsername();
    var password = register._getPassword();
    if(username == undefined || password == undefined){
        return false;
    }
    user = new User(username.value, password.value);
    if(user.getPassword() == 'admin' || user.getPassword() == 'admin'){
        myapp._updatePage("overview-page");
        return true;
    }
}