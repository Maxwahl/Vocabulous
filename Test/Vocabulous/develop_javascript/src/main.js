console.log("Javascript:login loaded");
import User from './classes/user.js';
var myApp = document.querySelector("my-app");
console.dir(myApp);
console.dir(myApp.__proto__);
var registerLogin = myApp.getRegisterLogin();
var loginButton = registerLogin.getLoginButton();
loginButton.onclick = function (){
    var username = registerLogin.getUsername();
    var password = registerLogin.getPassword();
    if(username.value == undefined || password.value == undefined){
        return false;
    }
    let user = new User(username.value, password.value);
    if(user.getName() == "admin" && user.getPassword()=="admin"){
        myApp._updatePage("overview-page");
        return true;
    }
    return false;
}

function containsUserInDb(benutzer){
    //db->user??
}
//var myApp = document.querySelector("my-app");
