import BackEndHandler from './classes/backEndHandler.js';
import Unit from './classes/unit.js';
import Word from './classes/word.js';
console.log("Javascript: createunit loaded");
var myapp = document.querySelector("my-app");
var overview = myapp._getOverviewpage();
console.dir(overview);
var register = myapp._getRegisterLogin();
var username = register._getUsername();
var password = register._getPassword();
var browseunit = overview._getBrowseUnit();
console.dir(browseunit);
var returnButton = browseunit._getReturnButton();
console.dir(returnButton);
var searchbar = browseunit._getSearchBar();
console.dir(searchbar);
var transferButton = browseunit._getTransferButton();
console.log(transUnits);
var ironPages = overview._getIronPages();
var filterDialog = browseunit._getPaperDialogFilters();
var filterUn = browseunit._getPaperDialogFiltersName();
var filterSave = browseunit._getPaperDialogFiltersSave();
var ironPages = overview._getIronPages();
var units;
var table = browseunit._getTable();
var transUnits = [];
var confirmAlertNo = browseunit._getPaperDialogNo();
console.dir(confirmAlertNo);
var confirmAlertYes = browseunit._getPaperDialogYes();
console.dir(confirmAlertYes);
var confirmAlert = browseunit._getPaperDialog();
console.dir(confirmAlert);
var user;
ironPages.addEventListener("iron-select",function(){
    if(ironPages.selected=="browse-unit"){
        searchbar.query = "";
        load();
    }
});
load();
async function load(){
    while(table.rows.length != 0){
        table.deleteRow(0);
    }
    user = await BackEndHandler.login(username.value, password.value);
    units = await BackEndHandler.getOtherUnits(user.getId());
    for(var i = 0; i < units.length; i++){
        var row = table.insertRow(0);
        row.setAttribute("name", units[i].getId());
        var cell = row.insertCell(0);
        var checkbox = document.createElement("paper-checkbox");
        checkbox.setAttribute("noink", "noink");
        checkbox.setAttribute("value", units[i].getId());
        checkbox.setAttribute("name", units[i].getId());
        checkbox.onclick = function(){
            if(this.active){
                transUnits.push(this.value);
                return;
            }
            var index = transUnits.indexOf(this.value);
            if (index > -1) {
                transUnits.splice(index, 1);
            }
        };
        cell.innerHTML = units[i].getName()/*+"<paper-checkbox noink value='"+units[i].getId()+"'></paper-checkbox>"*/;
        cell.appendChild(checkbox);
    }
}
returnButton.onclick = function(){
    overview._routePageChanged("create-unit");
}
ironPages.addEventListener("iron-select",function(){
    if(ironPages.selected=="browse-unit"){
        searchbar.query = "";
    }
});
searchbar.addEventListener("paper-search-filter",e=>filterDialog.open());
searchbar.addEventListener("paper-search-clear",e=>clearFilter());

function clearFilter(){
    for(var i = 0; i < table.rows.length; i++){
        table.rows[i].style.display = "block";
    }
}
searchbar.onkeyup = function(){
    console.dir(searchbar.query);
    if(searchbar.query == ""){
        clearFilter();
        return;
    }
    for(var i = 0; i < table.rows.length; i++){
        if(!table.rows[i].cells[0].innerHTML.toLowerCase().startsWith(searchbar.query.toLowerCase())){
            table.rows[i].style.display = "none";
        }
        else{
            table.rows[i].style.display = "block";
        }
    }
}
transferButton.onclick = function(){
    confirmAlert.open();
}
confirmAlertYes.onclick = function(){
    for(var i = 0; i < table.rows.length; i++){
        for(var a = 0; a < transUnits.length; a++){
            console.log(table.rows[i].getAttribute("name"));
            if(table.rows[i].getAttribute("name") == transUnits[a]){
                table.rows[i].parentNode.removeChild(table.rows[i]);
            }
        }    
    }
    for(var i = 0; i < transUnits.length; i++){
        BackEndHandler.addUnit(user.getId(), transUnits[i]);
    }
    confirmAlert.close();
}
confirmAlertNo.onclick = function(){
    confirmAlert.close();
}
filterSave.onclick = async function(){ 
    while(table.rows.length != 0){
        table.deleteRow(0);
    }
    units = [];
    var otherUnits = await BackEndHandler.getOtherUnits(user.getId());
    var filterUser = await BackEndHandler.user(filterUn.value);
    if(filterUser == undefined || filterUser == null){
        return;
    }
    var filterUnits = await BackEndHandler.getUnits(filterUser.getId());
    loop1:
    for(var i = 0; i < otherUnits.length; i++){
        loop2:
        for(var a = 0; i < filterUnits.length; a++){
            if(filterUnits[a].getId() == otherUnits[i].getId()){
                units.push(filterUnits[i]);
                break loop2;
            }
        }
    }
    for(var i = 0; i < units.length; i++){
        var row = table.insertRow(0);
        row.setAttribute("name", units[i].getId());
        var cell = row.insertCell(0);
        var checkbox = document.createElement("paper-checkbox");
        checkbox.setAttribute("noink", "noink");
        checkbox.setAttribute("value", units[i].getId());
        checkbox.setAttribute("name", units[i].getId());
        checkbox.onclick = function(){
            if(this.active){
                transUnits.push(this.value);
                return;
            }
            var index = transUnits.indexOf(this.value);
            if (index > -1) {
                transUnits.splice(index, 1);
            }
        };
        cell.innerHTML = units[i].getName()/*+"<paper-checkbox noink value='"+units[i].getId()+"'></paper-checkbox>"*/;
        cell.appendChild(checkbox);
    }
    filterDialog.close();
}