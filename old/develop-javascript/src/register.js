import User from './classes/user.js';
import BackEndHandler from './classes/backEndHandler.js';
console.log("Javascript: login loaded");
var myapp = document.querySelector("my-app");
var register = myapp._getRegisterNew();
/*var loginButton = register._getLoginButton();
var user;
var username = register._getUsername();
var password = register._getPassword();
var toast = register._getToast();*/
var firstnameClear = register._getClearButton1();
var lastnameClear = register._getClearButton2();
var emailClear = register._getClearButton3();
var institutionClear = register._getClearButton4();
var firstname = register._getFirstname();
var lastname = register._getLastname();
var email = register._getEmail();
var institution = register._getInstitution();
var username = register._getUsername();
var password = register._getPassword();
var passwordVerify = register._getVerifyPassword();
var spinner = register._getSpinner();
var iconOk = register._getIconOk();
var loginButton = register._getLoginButton();
var iconWrong = register._getIconWrong();
var wrongToast = register._getWrongToast();
var correctToast = myapp._getCorrectToast();
var ironPages = myapp._getIronPages();
var registerButton = register._getRegisterButton();
ironPages.addEventListener("iron-select",function(){
    load();
});
loginButton.onclick = function(){
    myapp._updatePage("register-login");
}
async function load(){
    firstnameClear.style.display="none";
    lastnameClear.style.display="none";
    emailClear.style.display="none";
    institutionClear.style.display="none";
    firstname.value = "";
    lastname.value = "";
    email.value = "";
    institution.value = "";
    username.value = "";
    password.value = "";
    passwordVerify.value = "";
    spinner.removeAttribute("active");
    iconWrong.style.display = "none";
    iconOk.style.display = "none";
}
load();
var checkTimer;
firstname.onkeyup = function(){
    if(firstname.value == ""){
        firstnameClear.style.display="none";
        return;
    }
    firstnameClear.style.display="block";
};
lastname.onkeyup = function(){
    if(lastname.value == ""){
        lastnameClear.style.display="none";
        return;
    }
    lastnameClear.style.display="block";
};
email.onkeyup = function(){
    if(email.value == ""){
        emailClear.style.display="none";
        return;
    }
    emailClear.style.display="block";
};
institution.onkeyup = function(){
    if(institution.value == ""){
        institutionClear.style.display="none";
        return;
    }
    institutionClear.style.display="block";
};
firstnameClear.onclick = function(){
    firstname.value = "";
    firstnameClear.style.display="none";
}
lastnameClear.onclick = function(){
    lastname.value = "";
    lastnameClear.style.display="none";
}
email.onclick = function(){
    email.value = "";
    emailClear.style.display="none";
}
institution.onclick = function(){
    institution.value = "";
    institutionClear.style.display="none";
}
username.onkeyup = function(){
    clearTimeout(checkTimer);
    iconWrong.style.display = "none";
    iconOk.style.display = "none";
    spinner.setAttribute("active",true);
    changeLineColor("inherit");
    checkTimer = setTimeout(function(){checkUsername()}, 1000);
}
async function checkUsername(){
    if(username.value == ""){
        changeLineColor("red");
        spinner.removeAttribute("active");
        iconWrong.style.display = "block";
        iconOk.style.display = "none";
        return
    }
    var user = await BackEndHandler.user(username.value);
    spinner.removeAttribute("active");
    if(user == null){
        iconOk.style.display = "block";
        iconWrong.style.display = "none";
        changeLineColor("inherit");
        return;
    }
    changeLineColor("red");
    iconOk.style.display = "none";
    iconWrong.style.display = "block";
}
registerButton.onclick = function(){
    add();
}
async function add(){
    if(firstname.value == "" || lastname.value == ""|| email.value == ""||
    institution.value == ""|| username.value == ""|| password.value == ""||
    passwordVerify.value == "" || iconWrong.style.display == "block" || !password.validate() || !passwordVerify.validate()){
        wrongToast.open();
        return;
    }
    var user = new User(username.value, password.value);
    user.setEmail(email.value);
    user.setFirstname(firstname.value);
    user.setInstitution(institution.value);
    user.setLastname(lastname.value);
    var userId= await BackEndHandler.register(user);
    correctToast.open();
    myapp._updatePage("register-login");
    await BackEndHandler.sendMail(userId,"registration");
}
function changeLineColor(color){
    username.updateStyles({"--paper-input-container-color":color});
    username.updateStyles({"--paper-input-container-focus-color":color});
    username.updateStyles({"--paper-input-container-invalid-color":color});
    username.updateStyles({"--paper-input-container-input-color":color})
}