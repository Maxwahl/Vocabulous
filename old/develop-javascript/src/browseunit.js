import BackEndHandler from './classes/backEndHandler.js';
import Unit from './classes/unit.js';
import Word from './classes/word.js';
console.log("Javascript: createunit loaded");
var myapp = document.querySelector("my-app");
var overview = myapp._getOverviewpage();
console.dir(overview);
var browseunit = overview._getBrowseUnit();
console.dir(browseunit);
var returnButton = browseunit._getReturnButton();
console.dir(returnButton);
var searchbar = browseunit._getSearchBar();
console.dir(searchbar);
var ironPages = overview._getIronPages();
var paperDialog = browseunit._getPaperDialog();
var ironPages = overview._getIronPages();
var units;
var table = browseunit._getTable();
ironPages.addEventListener("iron-select",function(){
    if(ironPages.selected=="browse-unit"){
        load();
    }
});
load();
async function load(){
    while(table.rows.length != 0){
        table.removeRow(0);
    }
    units = await BackEndHandler.getAlllUnits();
    for(var i = 0; i < units.length; i++){
        var row = table.insertRow(0);
        var cell = row.insertCell(0);
        cell.innerHTML = units[i].getName()+"<paper-checkbox noink></paper-checkbox>";
    }
}
returnButton.onclick = function(){
    overview._routePageChanged("create-unit");
    reset();
}
ironPages.addEventListener("iron-select",function(){
    if(ironPages.selected=="browse-unit"){
        searchBar.query = "";
    }
});
searchbar.addEventListener("paper-search-filter",e=>paperDialog.open());