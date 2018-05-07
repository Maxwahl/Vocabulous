import BackEndHandler from './classes/backEndHandler.js';
import Unit from './classes/unit.js';
import Word from './classes/word.js';
import Stopwatch from './classes/stopwatch.js';
console.log("Javascript: practicePage_Selectionmode loaded");
var myapp = document.querySelector("my-app");
var overview = myapp._getOverviewpage();
console.dir(overview);
var practicePageSelectionmode = overview._getPracticeUnitPageSelectionmode();
console.dir(practicePageSelectionmode);
var unitName = practicePageSelectionmode._getUnitName();
console.dir(unitName);
var unitView = overview._getUnitView();
console.dir(unitView);
var checked = unitView._getChecked();
console.dir(checked);
var ironPages = overview._getIronPages();
console.dir(ironPages);
var returnButton = practicePageSelectionmode._getReturnButton();
console.dir(returnButton);
returnButton.onclick = function(){overview._routePageChanged("unit-page");}