import User from './classes/user.js';
import BackEndHandler from './classes/backEndHandler.js';
import Theme from './classes/theme.js';
import ChangeThemes from './classes/changeTheme.js';
import LearnProgress from './classes/learnProgress.js';
var user;
var menuopen = false;
var myapp = document.querySelector("my-app");
var register = myapp._getRegisterLogin();
var username = register._getUsername();
var password = register._getPassword();
console.log("Javascript: overviewpage loaded");
var overview = myapp._getOverviewpage();
var homeview = overview._getHomeview();
var progressbar = overview._getLearnProgressbar();
console.log(homeview);
/*var unitoverview = overview._getUnitoverview();
console.dir(unitoverview);*/
var statisticview = overview._getStatisticview();
var logoutbutton = overview._getLogoutbutton();
var userbutton = overview._getUserbutton();
var settingsview = overview._getSettingsview();
var aboutview = overview._getAboutView();
var accounticon = overview._getAccounticon();
var menuicon = overview._getMenuicon();
var appdrawer = overview._getAppdrawer();
var mode = overview._getModeInput();
var wordView = overview._getWordview();
var practiceOverviewView = overview._getPracticeOverviewView();
var selfcheckView = overview._getSelfcheckview();
var mainTitle = overview._getMainTitle();
//var practiceMemoryView = overview._getPracticeMemoryview();
(async function start(){
  user = await BackEndHandler.login(username.value, password.value);
  userbutton.textContent = user.getUsername();
  var theme = await BackEndHandler.startingTheme(user.getId());
  var progress = await LearnProgress.getProgress(user.getId());
  progressbar.max = progress[1];
  progressbar.value = progress[0];
  ChangeThemes.changeTheme(theme);
})();
//var practiceOverview = overview._getPracticeOverview();
//console.log(practiceOverview);
userbutton.onclick = function(){overview._routePageChanged("account-view")}
homeview.onclick = function(){overview._routePageChanged("unit-overview")}
var browseUnitview = overview._getBrowseUnitview();
//unitoverview.onclick = function(){overview._routePageChanged("unit-overview")}
statisticview.onclick = function(){overview._routePageChanged("statistics-view")}
settingsview.onclick = function(){overview._routePageChanged("settings-view")}
aboutview.onclick = function(){overview._routePageChanged("about-view")}
logoutbutton.onclick = function(){location.reload();}
accounticon.onclick = function(){overview._routePageChanged("account-view")}

wordView.onclick = function(){
  mode.value = "0";
  overview._routePageChanged("unit-overview");
}
practiceOverviewView.onclick = function(){
  mode.value = "1";
  overview._routePageChanged("practice-overview");
}
selfcheckView.onclick = function(){
  mode.value = "2";
  overview._routePageChanged("unit-overview-for-sessions");
}
browseUnitview.onclick = function(){
  overview._routePageChanged("browse-unit");
}
/*practiceMemoryView.onclick = function(){
  mode.value = "3";
  overview._routePageChanged("unit-overview");
}*/
menuicon.onclick = function(){
    if(menuopen){
      mainTitle.innerHTML = "Vocabulous";
      appdrawer.setAttribute("force-narrow",true);
      menuopen = false;
      return;
    }
    mainTitle.innerHTML = "";
    appdrawer.removeAttribute("force-narrow");
    menuopen = true;
  }

