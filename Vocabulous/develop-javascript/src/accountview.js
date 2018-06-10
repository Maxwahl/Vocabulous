import User from './classes/user.js';
import BackEndHandler from './classes/backEndHandler.js';
console.log("Javascript: accountview loaded");
var myapp = document.querySelector("my-app");
var register = myapp._getRegisterLogin();
var loginButton = register._getLoginButton();
var user;
var overview = myapp._getOverviewpage();
var settingsToast = overview._getAccountWrongSettingsToast();
console.dir(settingsToast);
var settingsChangedToast = overview._getAccountSettingsToast();
console.dir(settingsChangedToast);
var usernameButton = overview._getUserbutton();
console.dir(overview);
var accounticon = overview._getAccounticon();
console.dir(accounticon);
var accountview = overview._getAccountview();
console.dir(accountview);
var fullname = accountview._getFullname();
console.dir(fullname);
var institution = accountview._getInstitution();
console.dir(institution);
var firstname = accountview._getFirstname();
console.dir(firstname);
var lastname = accountview._getLastname();
console.dir(lastname);
var email = accountview._getEmail();
console.dir(email);
var birthDate = accountview._getBirthdate();
console.dir(birthDate);
var username = accountview._getUsername();
console.dir(username);
var password = accountview._getPassword();
console.dir(password);
var edit = accountview._getEditbutton();
console.dir(edit);
var save = accountview._getSavebutton();
console.dir(save);
var confirmDialog = accountview._getPaperDialogConfirm();
var confirmPasswordInput = accountview._getPaperDialogPassword();
var passwordSave = accountview._getPaperDialogFiltersSave();
var oldPassword = "";

(async function start(){
    user = await BackEndHandler.user(usernameButton.textContent);
    fullname.innerHTML = user.getFirstname() + " " + user.getLastname();
    institution.value = user.getInstitution();
    firstname.value = user.getFirstname();
    firstname.disabled = true;
    lastname.value = user.getLastname();
    lastname.disabled = true;
    email.value = user.getEmail();
    email.disabled = true;
    birthDate.value = user.getBirthdate();
    birthDate.disabled = true;
    username.value = user.getUsername();
    username.disabled = true;
    password.value = user.getPassword();
    oldPassword = user.getPassword();
    password.disabled = true;
    save.disabled = true;
  })();
edit.onclick = function(){
    firstname.disabled = false;
    lastname.disabled = false;
    email.disabled = false;
    birthDate.disabled = false;
    password.disabled = false;
    save.disabled = false;
    save.disabled = false;
    edit.disabled = true;
}
save.onclick = function(){
    if(!firstname.validate()||!lastname.validate()||
    !email.validate()||!birthDate.validate()||
    !username.validate()||!password.validate()){
        settingsToast.open();
        return;
    }
    if(oldPassword != password.value){
        confirmDialog.open();
        return;
    }
    saveUser();
}
function syncronizeUser(){
    BackEndHandler.changeUser(user);
}
passwordSave.onclick = function(){
    if(confirmPasswordInput.value != password.value){
        confirmPasswordInput.setAttribute("invalid","true");
        return;
    }
    confirmPasswordInput.removeAttribute("invalid");
    confirmDialog.close();
    oldPassword = password.value;
    confirmPasswordInput.value = "";
    saveUser();
}
function saveUser(){
    firstname.disabled = true;
    lastname.disabled = true;
    email.disabled = true;
    birthDate.disabled = true;
    password.disabled = true;
    save.disabled = true;
    save.disabled = true;
    edit.disabled = false;
    user.setFirstname(firstname.value);
    user.setLastname(lastname.value);
    user.setEmail(email.value);
    user.setBirthdate(birthDate.value);
    user.setUsername(username.value);
    user.setPassword(password.value);
    fullname.innerHTML = user.getFirstname() + " " + user.getLastname();
    syncronizeUser();
    settingsChangedToast.open();
}
