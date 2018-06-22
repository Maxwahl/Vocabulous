import User from './classes/user.js';
import BackEndHandler from './classes/backEndHandler.js';
console.log("Javascript: login loaded");
var myapp = document.querySelector("my-app");
var register = myapp._getRegisterLogin();
var loginButton = register._getLoginButton();
var forgotPasswordButton = register._getForgotPasswordButton();
var registernew = register._getRegisterNew();
var confirmAlert = register._getPaperDialog();
var user;
var username = register._getUsername();
var password = register._getPassword();
var toast = register._getToast();
registernew.onclick = function(){myapp._updatePage("register-new")}
forgotPasswordButton.onclick = async function(){
    confirmAlert.open();
}
async function checkLogin(){
    if(username == undefined || password == undefined || username.value == "" || password.value == ""){
        toast.open();
        return false;
    }
    user = await BackEndHandler.login(username.value, password.value);
    if(user == null || user == undefined){
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