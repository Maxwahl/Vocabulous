import User from './classes/user.js';
import BackEndHandler from './classes/backEndHandler.js';
import Theme from './classes/theme.js';
import ChangeThemes from './classes/changeTheme.js';
var user;
var menuopen = false;
var myapp = document.querySelector("my-app");
var register = myapp._getRegisterLogin();
var username = register._getUsername();
var password = register._getPassword();

console.log(user);
console.log("Javascript: overviewpage loaded");
var overview = myapp._getOverviewpage();
console.dir(overview);
var homeview = overview._getHomeview();
console.dir(homeview);
var unitoverview = overview._getUnitoverview();
console.dir(unitoverview);
var statisticview = overview._getStatisticview();
console.dir(statisticview);
var logoutbutton = overview._getLogoutbutton();
console.dir(logoutbutton);
var userbutton = overview._getUserbutton();
console.dir(userbutton);
var settingsview = overview._getSettingsview();
console.dir(settingsview);
var accounticon = overview._getAccounticon();
console.dir(accounticon);
var menuicon = overview._getMenuicon();
console.dir(menuicon);
var appdrawer = overview._getAppdrawer();
var mode = overview._getModeInput();
console.dir(appdrawer);
var wordView = overview._getWordview();
var practiceAnswerView = overview._getPracticeAnswerview();
var selfcheckView = overview._getSelfcheckview();
var practiceMemoryView = overview._getPracticeMemoryview();
(async function start(){
  user = await BackEndHandler.login(username.value, password.value);
  userbutton.textContent = user.getUsername();
  console.log(user.getId());
  var theme = await BackEndHandler.startingTheme(user.getId());
  ChangeThemes.changeTheme(theme);
})();
userbutton.onclick = function(){overview._routePageChanged("account-view")}
homeview.onclick = function(){overview._routePageChanged("home-view")}
unitoverview.onclick = function(){overview._routePageChanged("unit-overview")}
statisticview.onclick = function(){overview._routePageChanged("statistics-view")}
settingsview.onclick = function(){overview._routePageChanged("settings-view")}
logoutbutton.onclick = function(){location.reload();}
accounticon.onclick = function(){overview._routePageChanged("account-view")}

wordView.onclick = function(){
  mode.value = "0";
  overview._routePageChanged("unit-overview");
}
practiceAnswerView.onclick = function(){
  mode.value = "1";
  overview._routePageChanged("unit-overview");
}
selfcheckView.onclick = function(){
  mode.value = "2";
  overview._routePageChanged("unit-overview");
}
practiceMemoryView.onclick = function(){
  mode.value = "3";
  overview._routePageChanged("unit-overview");
}
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

