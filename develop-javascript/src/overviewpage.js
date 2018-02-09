console.log("Javascript: overviewpage loaded");
var myapp = document.querySelector("my-app");
var overview = myapp._getOverviewpage();
console.dir(overview);
var homeview = overview._getHomeview();
console.dir(homeview);
var startlesson = overview._getStartlesson();
console.dir(startlesson);
var statisticview = overview._getStatisticview();
console.dir(statisticview);
var messageview = overview._getMessageview();
console.dir(messageview);
var accountview = overview._getAccountview();
console.dir(accountview);
var settingsview = overview._getSettingsview();
console.dir(settingsview);
startlesson.onclick = function(){overview._routePageChanged("start-lesson");}