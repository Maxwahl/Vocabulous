import BackEndHandler from './classes/backEndHandler.js';
import Unit from './classes/unit.js';
import Word from './classes/word.js';
console.log("Javascript: createunit loaded");
var myapp = document.querySelector("my-app");
var overview = myapp._getOverviewpage();
console.dir(overview);
var createunit = overview._getCreateUnit();
console.dir(createunit);
var returnButton = createunit._getReturnButton();
console.dir(returnButton);
returnButton.onclick = function(){overview._routePageChanged("unit-overview")}