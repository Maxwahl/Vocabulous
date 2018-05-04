import User from './classes/user.js';
import BackEndHandler from './classes/backEndHandler.js';
console.log("Javascript: login loaded");
var myapp = document.querySelector("my-app");
var register = myapp._getRegisterLogin();
var loginButton = register._getLoginButton();
var user;
var username = register._getUsername();
var password = register._getPassword();
var toast = register._getToast();
async function checkLogin(){
    if(username == undefined || password == undefined || username.value == "" || password.value == ""){
        toast.open();
        return false;
    }
    console.log(username.value);
    console.log(password.value);
    user = await BackEndHandler.login(username.value, password.value);
    console.log(user.getUsername());
    console.log(user.getPassword());
    if(user == null){
        toast.open();
        return false;
    }
    myapp._updatePage("overview-page");
    return true;
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
