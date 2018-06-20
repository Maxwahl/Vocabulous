import BackEndHandler from './classes/backEndHandler.js';
import Unit from './classes/unit.js';
import Word from './classes/word.js';
console.log("Javascript: unitpage loaded");
var myapp = document.querySelector("my-app");
var overview = myapp._getOverviewpage();
var unitpage = overview._getUnitPage();
var unitName = unitpage._getUnitName();
var unitView = overview._getUnitoverviewPage();
var checked = unitView._getChecked();
var ironPages = overview._getIronPages();
var wordTable = unitpage._getWordTable();
var returnButton = unitpage._getReturnButton();
var updateInput = overview._getUpdateInput();
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