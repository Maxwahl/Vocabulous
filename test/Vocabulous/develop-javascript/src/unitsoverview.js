import BackEndHandler from './classes/backEndHandler.js';
import Unit from './classes/unit.js';
import Word from './classes/word.js';
console.log("Javascript: unitsoverview loaded");
var myapp = document.querySelector("my-app");
var overview = myapp._getOverviewpage();
var unitView = overview._getUnitoverviewPage();
var unitTable = unitView._getUnitTable();
var searchBar = unitView._getSearchBar();
var checked = unitView._getChecked();
var uid = unitView._getUnitId();
var newUnitButton = unitView._getNewUnitButton();
var updateInput = overview._getUpdateInput();
var confirmAlertNo = unitView._getPaperDialogNo();
var confirmAlertYes = unitView._getPaperDialogYes();
var confirmAlert = unitView._getPaperDialog();
var ironPages = overview._getIronPages();
var mode = overview._getModeInput();
var units = [];
var user;
var register = myapp._getRegisterLogin();
var username = register._getUsername();
var password = register._getPassword();
var trashHover = false;
var unitId;
confirmAlertNo.onclick = function(){
    confirmAlert.close();
}
ironPages.addEventListener("iron-select",function(){
    if(ironPages.selected=="unit-overview"){
        searchBar.query = "";
        clearFilter();
        load();
    }
});
load();
confirmAlertYes.onclick = async function(){
    await BackEndHandler.deleteUnit(unitId);
    confirmAlert.close();
    load();
}

async function load(){
    updateInput.value = -1;
    user = await BackEndHandler.login(username.value, password.value);
    units = await BackEndHandler.getUnits(user.getId());
    var rowCount = 0;
    while ( unitTable.rows.length > 0 ){
        unitTable.deleteRow(0);
    }
    for(var i = 0; i < units.length; i++){
        var newRow = unitTable.insertRow(rowCount);
        rowCount++;
        var newData = newRow.insertCell(0);
        newData.innerHTML ="<p>" + units[i].getName() + "</p>";
        //var text = units[i].getName();
        newData.value = units[i].getId();
        newData.setAttribute("name", units[i].getId());
        var trash = document.createElement("paper-icon-button");
        trash.setAttribute("class", "trash");
        trash.setAttribute("noink", "");
        trash.setAttribute("name", "trash"+i);
        trash.setAttribute("icon", "icons:delete");
        trash.value=units[i].getId();
        trash.onclick = async function(){
            unitId=this.value;
            confirmAlert.open();
            /*var result = confirm("Want to delete?");
            if (result) {
                await BackEndHandler.deleteUnit(this.value);
            }*/
        }
        trash.onmouseover = function(){
            trashHover = true;
        }
        trash.onmouseout = function(){
            trashHover = false;
        }
        newData.appendChild(trash);
        newData.onclick=function(){
            if(!trashHover){
                if(mode.value == "0"){
                    checked.value = this.value;
                    uid.value = this.getAttribute("name");
                    overview._routePageChanged("unit-page");
                }
                if(mode.value == "1"){
                    checked.value = this.value;
                    uid.value = this.getAttribute("name");
                    overview._routePageChanged("practiceunit-page");
                }
                if(mode.value == "2"){
                    checked.value = this.value;
                    uid.value = this.getAttribute("name");
                    overview._routePageChanged("selfcheck-page");
                }
                if(mode.value == "3"){
                    checked.value = this.value;
                    uid.value = this.getAttribute("name");
                    overview._routePageChanged("practiceunit-page-selectionmode");
                }
            }
            else{
                load();
            }
    }
}
}
searchBar.addEventListener("paper-search-clear",e=>clearFilter());
searchBar.onkeyup = function(){
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