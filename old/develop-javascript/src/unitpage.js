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
var updateInput = overview._getUpdateInput();
console.dir(examButton);
var words;
var editButton = unitpage._getEditButton();
editButton.onclick = function(){
    updateInput.value = checked.value;
    overview._routePageChanged("create-unit");
}
ironPages.addEventListener("iron-select",function(){
    if(ironPages.selected=="unit-page"){
        changedUnit();
    }
});
async function changedUnit(){
    var stockUnits = await BackEndHandler.getUnits(0);
    unitName.innerHTML = await BackEndHandler.getUnitName(checked.value);
    if(updateInput.value !=-1){
        unitName.innerHTML = await BackEndHandler.getUnitName(updateInput.value);
        updateInput.value = -1;
    }
    var hideOrNot = false;
    words = await BackEndHandler.getVocabByID(checked.value); 
    for(var i = 0; i < stockUnits.length; i++){
        if(stockUnits[i].getName() == unitName.innerHTML){
            hideOrNot = true;
        }
    }
    if(hideOrNot){
        hideOrNot = false;
        editButton.style.display = "none";
    }
    else{
        editButton.style.display = "inline";
    }
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