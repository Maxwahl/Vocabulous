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
var ironPages = overview._getIronPages();
console.dir(ironPages);
var units = [];

ironPages.addEventListener("iron-select",function(){
    if(ironPages.selected=="unit-overview"){
        searchBar.query = "";
        clearFilter();
    }
});
(async function(){
    units = await BackEndHandler.getUnits();
    var rowCount = 0;
    for(var i = 0; i < units.length; i++){
        var newRow = unitTable.insertRow(rowCount);
        rowCount++;
        var newData = newRow.insertCell(0);
        newData.innerHTML = units[i].getName();
        var text = units[i].getName();
        newData.value = units[i].getName();
        newData.onclick=function(){
            checked.value = this.value;
            overview._routePageChanged("unit-page")};
        console.dir(newData);
    }
})();
searchBar.addEventListener("paper-search-clear",e=>clearFilter());
searchBar.onkeyup = function(){
    console.dir(searchBar.query);
    if(searchBar.query == ""){
        clearFilter();
        return;
    }
    for(var i = 0; i < unitTable.rows.length; i++){
        if(unitTable.rows[i].innerHTML.toLowerCase().search(searchBar.query.toLowerCase())== -1){
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