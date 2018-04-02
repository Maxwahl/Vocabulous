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
var minusIcon = createunit._getMinusIcon();
console.dir(minusIcon);
var plusIcon = createunit._getPlusIcon();
console.dir(plusIcon);
var saveButton = createunit._getSaveButton();
console.dir(saveButton);
var wordTable = createunit._getWordTable();
console.dir(wordTable);
var unitNameInput = createunit._getUnitNameInput();
console.dir(unitNameInput);
var ironPages = overview._getIronPages();
console.dir(ironPages);
var toast = overview._getSettingsToast();
returnButton.onclick = function(){
    overview._routePageChanged("unit-overview");
    reset();
}
loadCreateUnit();
ironPages.addEventListener("iron-select",function(){
    if(ironPages.selected=="create-unit"){
        loadCreateUnit();
    }
});
function loadCreateUnit(){
    reset();
    minusIcon.setAttribute("hidden",true);
}
plusIcon.onclick = function(){
    var row = wordTable.insertRow(wordTable.rows.length);
    var cell = row.insertCell(0);
    cell.innerHTML = "<paper-input class='germanVocab' label='German word' no-label-float></paper-input><paper-input class='englishVocab' label='English word' no-label-float></paper-input>";
    minusIcon.removeAttribute("hidden");
}
minusIcon.onclick = function(){
    wordTable.deleteRow(wordTable.rows.length-1);
    if(wordTable.rows.length == 1){
        minusIcon.setAttribute("hidden",true);
    }
}
function reset(){
    while(wordTable.rows.length != 0){
        wordTable.deleteRow(0);
    }
    var row = wordTable.insertRow(wordTable.rows.length);
    var cell = row.insertCell(0);
    cell.innerHTML = "<paper-input class='germanVocab' label='German word' no-label-float></paper-input><paper-input class='englishVocab' label='English word' no-label-float></paper-input>";
    unitNameInput.value = "";
}
function save(){
    for(var i = 0; i < wordTable.rows.length; i++){
        if(wordTable.rows[i].cells[0].childNodes[0].value == "" || wordTable.rows[i].cells[0].childNodes[0].value == undefined
        || wordTable.rows[i].cells[0].childNodes[1].value == "" || wordTable.rows[i].cells[0].childNodes[1].value == undefined){
            toast.open();
            return;
        }
    }
    if(unitNameInput.value == undefined || unitNameInput.value == ""){
        toast.open();
        return;
    }
    overview._routePageChanged("unit-overview");
    reset();
}
saveButton.onclick = function(){save()};