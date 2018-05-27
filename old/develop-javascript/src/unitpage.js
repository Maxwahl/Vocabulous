import BackEndHandler from './classes/backEndHandler.js';
import Unit from './classes/unit.js';
import Word from './classes/word.js';
console.log("Javascript: unitpage loaded");
var myapp = document.querySelector("my-app");
var overview = myapp._getOverviewpage();
console.dir(overview);
var unitpage = overview._getUnitPage();
console.dir(unitpage);
var unitName = unitpage._getUnitName();
console.dir(unitName);
var unitView = overview._getUnitView();
console.dir(unitView);
var checked = unitView._getChecked();
console.dir(checked);
var ironPages = overview._getIronPages();
console.dir(ironPages);
var wordTable = unitpage._getWordTable();
console.dir(wordTable);
var returnButton = unitpage._getReturnButton();
console.dir(returnButton);
var practiceButton = unitpage._getPracticeButton();
console.dir(practiceButton);
var practiceButtonSelectionmode = unitpage._getPracticeButtonSelectionmode();
console.dir(practiceButtonSelectionmode);
var examButton = unitpage._getExamButton();
console.dir(examButton);
var words;
var editButton = unitpage._getEditButton();
editButton.onclick = function(){
    var updateInput = overview._getUpdateInput();
    updateInput.value = unitName.innerHTML;
    overview._routePageChanged("create-unit");
}
ironPages.addEventListener("iron-select",function(){
    if(ironPages.selected=="unit-page"){
        changedUnit();
    }
});
async function changedUnit(){
    unitName.innerHTML = checked.value;
    words = await BackEndHandler.getWords(unitName.innerHTML); 
    while(wordTable.rows.length != 0){
        wordTable.deleteRow(0);
    }
    for(var i = 0; i < words.length; i++){
        var newRow = wordTable.insertRow(i);
        var english = newRow.insertCell(0);
        var german = newRow.insertCell(1);
        english.innerHTML = words[i].getWordEnglish();
        german.innerHTML = words[i].getWordGerman();
    }
}
changedUnit();
returnButton.onclick = function(){overview._routePageChanged("unit-overview")}
practiceButton.onclick = function(){overview._routePageChanged("practiceunit-page")};
practiceButtonSelectionmode.onclick = function(){overview._routePageChanged("practiceunit-page-selectionmode")};
examButton.onclick = function(){overview._routePageChanged("selfcheck-page")};