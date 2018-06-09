import BackEndHandler from './classes/backEndHandler.js';
import Unit from './classes/unit.js';
import Word from './classes/word.js';
console.log("Javascript: createunit loaded");
var myapp = document.querySelector("my-app");
var overview = myapp._getOverviewpage();

var user;
var register = myapp._getRegisterLogin();
var username = register._getUsername();
var password = register._getPassword();

console.dir(overview);
var createunit = overview._getCreateUnit();
console.dir(createunit);
var returnButton = createunit._getReturnButton();
console.dir(returnButton);
/*var removeIcon = createunit._getRemoveIcon();
console.dir(removeIcon);*/
var removeIndex = 0;
var plusIcon = createunit._getPlusIcon();
console.dir(plusIcon);
var saveButton = createunit._getSaveButton();
console.dir(saveButton);
var wordTable = createunit._getWordTable();
console.dir(wordTable);
var unitNameInput = createunit._getUnitNameInput();
console.dir(unitNameInput);
var browseUnitButton = createunit. _getBrowseUnitButton();
console.dir(browseUnitButton);
var uploadUnitButton = createunit._getUploadUnitButton();
console.dir(uploadUnitButton);
var ironPages = overview._getIronPages();
console.dir(ironPages);
var toast = overview._getSettingsToast();
var toast2 = overview._getNoWordToast();
var updateInput = overview._getUpdateInput();
returnButton.onclick = function(){
    overview._routePageChanged("unit-overview");
    updateInput.value = "";
    reset();
}
loadCreateUnit();
ironPages.addEventListener("iron-select",function(){
    if(ironPages.selected=="create-unit"){
        loadCreateUnit();
    }
});
async function loadWords(){
    unitNameInput.value = updateInput.value;
    var words = await BackEndHandler.getWords(updateInput.value); 
    wordTable.deleteRow(0);
    for(var i = 0; i < words.length; i++){
        var row = wordTable.insertRow(wordTable.rows.length);
        row.setAttribute("name", "row"+removeIndex);
        var cell = row.insertCell(0);
        cell.innerHTML = "<paper-input class='germanVocab' label='German word' value='"+words[i].getWordGerman()+"' no-label-float></paper-input><paper-input class='englishVocab' label='English word' value='"+words[i].getWordEnglish()+"' no-label-float></paper-input>";
        var deleteButton = document.createElement("paper-icon-button");
        deleteButton.setAttribute("class", "remove");
        deleteButton.setAttribute("noink", "");
        deleteButton.setAttribute("name", removeIndex);
        removeIndex++;
        deleteButton.setAttribute("icon", "icons:clear");
        deleteButton.onclick = function(){deleteOnClick(this);}
        cell.appendChild(deleteButton);
    }
}
function loadCreateUnit(){
    reset();
    if(updateInput.value != ""){
        loadWords();
    }
}
plusIcon.onclick = function(){
    var row = wordTable.insertRow(wordTable.rows.length);
    row.setAttribute("name", "row"+removeIndex);
    var cell = row.insertCell(0);
    cell.innerHTML = "<paper-input class='germanVocab' label='German word' no-label-float></paper-input><paper-input class='englishVocab' label='English word' no-label-float></paper-input>";
    var deleteButton = document.createElement("paper-icon-button");
    deleteButton.setAttribute("class", "remove");
    deleteButton.setAttribute("noink", "");
    deleteButton.setAttribute("name", removeIndex);
    removeIndex++;
    deleteButton.setAttribute("icon", "icons:clear");
    deleteButton.onclick = function(){deleteOnClick(this);}
    cell.appendChild(deleteButton);
    //removeIcon.removeAttribute("hidden");
}
/*removeIcon.onclick = function(){
    wordTable.deleteRow(wordTable.rows.length-1);
    if(wordTable.rows.length == 1){
        //removeIcon.setAttribute("hidden",true);
    }
}*/
async function deleteOnClick(button){
    var row = wordTable.querySelector("tr[name=row"+button.getAttribute("name")+"]");
    /*if(updateInput.value != ""){
        var word = new Word(row.cells[0].childNodes[0].value, row.cells[0].childNodes[1].value);
        deleteWords.push(word);
    }*/
    row.parentNode.removeChild(row);
}
function reset(){
    while(wordTable.rows.length != 0){
        wordTable.deleteRow(0);
    }
    var row = wordTable.insertRow(wordTable.rows.length);
    row.setAttribute("name", "row"+removeIndex);
    var cell = row.insertCell(0);
    /*
    var germanInput = document.createElement("<paper-input class='germanVocab' label='German word' no-label-float></paper-input>");
    var englishInput = document.createElement("<paper-input class='englishVocab' label='English word' no-label-float></paper-input>");
    var deleteButton = document.createElement("<paper-icon-button class='remove' name='remove' icon='icons:clear' noink></paper-icon-button>");
    deleteButton.onclick = function(){alert("test")}
    cell.appendChild(germanInput);
    cell.appendChild(englishInput);
    cell.appendChild(deleteButton);*/
    /*var germanInput = document.createElement("paper-input");
    germanInput.innerHTML = "<paper-input class='germanVocab' label='German word' no-label-float></paper-input>";
    var englishInput = document.createElement("paper-input");
    englishInput.innerHTML = "<paper-input class='englishVocab' label='English word' no-label-float></paper-input>";
    var deleteButton = document.createElement("paper-icon-button");
    deleteButton.innerHTML = "<paper-icon-button class='remove' name='remove' icon='icons:clear' noink></paper-icon-button>";
    deleteButton.onclick = function(){alert("test")}
    cell.appendChild(germanInput);
    cell.appendChild(englishInput);
    cell.appendChild(deleteButton);*/
    //cell.innerHTML = "<paper-input class='germanVocab' label='German word' no-label-float></paper-input><paper-input class='englishVocab' label='English word' no-label-float></paper-input><paper-icon-button onclick='deleteOnClick()' class='remove' name='remove' icon='icons:clear' noink></paper-icon-button>";
    cell.innerHTML = "<paper-input class='germanVocab' label='German word' no-label-float></paper-input><paper-input class='englishVocab' label='English word' no-label-float></paper-input><paper-icon-button class='remove' name='remove' icon='icons:clear' noink></paper-icon-button>";
    var deleteButton = document.createElement("paper-icon-button");
    deleteButton.setAttribute("class", "remove");
    deleteButton.setAttribute("noink", "");
    deleteButton.setAttribute("name", removeIndex);
    removeIndex++;
    deleteButton.setAttribute("icon", "icons:clear");
    deleteButton.onclick = function(){deleteOnClick(this);}
    cell.appendChild(deleteButton);
    unitNameInput.value = "";
}


async function save(){
    if(updateInput.value != ""){
        var unitoverview = overview._getUnitView();
        var uId = unitoverview._getUnitId();
        var words = await BackEndHandler.getWords(updateInput.value); 
        while(words.length != 0){
            BackEndHandler.deleteWordFromUnit(uId.value, words[0]);
            words.shift();
        }
    }
    if(wordTable.rows.length == 0){
        toast2.open();
        return;
    }
    if(unitNameInput.value == undefined || unitNameInput.value == ""){
        toast.open();
        return;
    }
    for(var i = 0; i < wordTable.rows.length; i++){
        if(wordTable.rows[i].cells[0].childNodes[0].value == "" || wordTable.rows[i].cells[0].childNodes[0].value == undefined
        || wordTable.rows[i].cells[0].childNodes[1].value == "" || wordTable.rows[i].cells[0].childNodes[1].value == undefined){
            toast.open();
            return;
        }
    }
    var unitId;
    if(updateInput.value == ""){
        user = await BackEndHandler.login(username.value, password.value);
        console.log(user.id);
        var unitId = await BackEndHandler.createUnit(user, unitNameInput.value);
    }
    else{
        var unitoverview = overview._getUnitView();
        var uId = unitoverview._getUnitId();
        unitId = uId.value;
    }
    for(var i = 0; i < wordTable.rows.length; i++){
        var word = new Word(wordTable.rows[i].cells[0].childNodes[0].value, wordTable.rows[i].cells[0].childNodes[1].value);
        await BackEndHandler.addWordToUnit(unitId, word);
    }
    if(updateInput.value != ""){
        updateInput.value = "";
        overview._routePageChanged("unit-page");
        reset();
        return;
    }
    updateInput.value = "";
    overview._routePageChanged("unit-overview");
    reset();
}
saveButton.onclick = function(){save()};
browseUnitButton.onclick = function(){overview._routePageChanged("browse-unit")}
uploadUnitButton.onclick = function(){overview._routePageChanged("upload-unit")};