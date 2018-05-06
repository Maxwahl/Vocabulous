import BackEndHandler from './classes/backEndHandler.js';
import Unit from './classes/unit.js';
import Word from './classes/word.js';
console.log("Javascript: unitsoverview loaded");
var myapp = document.querySelector("my-app");
var overview = myapp._getOverviewpage();
console.dir(overview);
var unitView = overview._getUnitView();
console.dir(unitView);
var unitTable = unitView._getUnitTable();
console.dir(unitTable);
var searchBar = unitView._getSearchBar();
console.dir(searchBar);
var checked = unitView._getChecked();
console.dir(checked);
var newUnitButton = unitView._getNewUnitButton();
console.dir(newUnitButton);
var translateButton = unitView._getTranslateButton();
console.dir(translateButton);
var ironPages = overview._getIronPages();
console.dir(ironPages);
var units = [];
var user;
var register = myapp._getRegisterLogin();
var username = register._getUsername();
var password = register._getPassword();

ironPages.addEventListener("iron-select",function(){
    if(ironPages.selected=="unit-overview"){
        searchBar.query = "";
        clearFilter();
        load();
    }
});
load();
async function load(){
    user = await BackEndHandler.login(username.value, password.value);
    console.log("Unitsoverview: "+user.getId());
    units = await BackEndHandler.getUnits(user.getId());
    var rowCount = 0;
    while ( unitTable.rows.length > 0 ){
        unitTable.deleteRow(0);
    }
    for(var i = 0; i < units.length; i++){
        var newRow = unitTable.insertRow(rowCount);
        rowCount++;
        var newData = newRow.insertCell(0);
        newData.innerHTML = units[i].getName();
        //var text = units[i].getName();
        newData.value = units[i].getName();
        var trash = document.createElement("paper-icon-button");
        trash.setAttribute("class", "trash");
        trash.setAttribute("name", "trash"+i);
        trash.setAttribute("icon", "vaadin:trash");
        trash.setAttribute("value", units[i].getId());
        trash.onclick = async function(){
            await BackEndHandler.deleteUnit(this.value);
        }
        newData.appendChild(trash);
        newData.onclick=function(){
            checked.value = this.value;
            overview._routePageChanged("unit-page")};
        console.dir(newData);
    }
}
searchBar.addEventListener("paper-search-clear",e=>clearFilter());
searchBar.onkeyup = function(){
    console.dir(searchBar.query);
    if(searchBar.query == ""){
        clearFilter();
        return;
    }
    for(var i = 0; i < unitTable.rows.length; i++){
        if(!unitTable.rows[i].cells[0].innerHTML.toLowerCase().startsWith(searchBar.query.toLowerCase())){
            unitTable.rows[i].style.display = "none";
        }
        else{
            unitTable.rows[i].style.display = "block";
        }
    }
}
function clearFilter(){
    for(var i = 0; i < unitTable.rows.length; i++){
        unitTable.rows[i].style.display = "block";
    }
}
newUnitButton.onclick = function(){overview._routePageChanged("create-unit")}
translateButton.onclick = function(){overview._routePageChanged("translate-page")};