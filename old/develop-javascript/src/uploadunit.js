import BackEndHandler from './classes/backEndHandler.js';
import Unit from './classes/unit.js';
import Word from './classes/word.js';
console.log("Javascript: createunit loaded");
var myapp = document.querySelector("my-app");
var overview = myapp._getOverviewpage();
var uploadunit = overview._getUploadUnit();
var returnButton = uploadunit._getReturnButton();

returnButton.onclick = function(){
    overview._routePageChanged("create-unit");
    reset();
}