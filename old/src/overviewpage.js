import User from './classes/user.js';
var user;
var menuopen = false;
var myapp = document.querySelector("my-app");
var register = myapp._getRegisterLogin();
var username = register._getUsername();
var password = register._getPassword();
user = new User(username.value, password.value);
console.log(user);
console.log("Javascript: overviewpage loaded");
var overview = myapp._getOverviewpage();
console.dir(overview);
var homeview = overview._getHomeview();
console.dir(homeview);
var startlesson = overview._getStartlesson();
console.dir(startlesson);
var statisticview = overview._getStatisticview();
console.dir(statisticview);
var messageview = overview._getMessageview();
var logoutbutton = overview._getLogoutbutton();
console.dir(logoutbutton);
var userbutton = overview._getUserbutton();
console.dir(userbutton);
var settingsicon = overview._getSettingsicon();
console.dir(settingsicon);
var accounticon = overview._getAccounticon();
console.dir(accounticon);
var menuicon = overview._getMenuicon();
console.dir(menuicon);
var appdrawer = overview._getAppdrawer();
console.dir(appdrawer);
userbutton.textContent = user.getUsername();
userbutton.onclick = function(){overview._routePageChanged("account-view")}
homeview.onclick = function(){overview._routePageChanged("home-view")}
startlesson.onclick = function(){overview._routePageChanged("start-lesson")}
statisticview.onclick = function(){overview._routePageChanged("statistics-view")}
messageview.onclick = function(){overview._routePageChanged("messages-view")}
settingsicon.onclick = function(){overview._routePageChanged("settings-view")}
logoutbutton.onclick = function(){myapp._updatePage("register-login");
                                  overview._routePageChanged("home-view");
                                  username.value = "";
                                  password.value = "";}
accounticon.onclick = function(){overview._routePageChanged("account-view")}
console.log(appdrawer);
menuicon.onclick = function(){
    if(menuopen){
      appdrawer.setAttribute("force-narrow",true);
      menuopen = false;
      return;
    }
    appdrawer.removeAttribute("force-narrow");
    menuopen = true;
  }

