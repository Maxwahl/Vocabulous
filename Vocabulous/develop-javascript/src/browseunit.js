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
var paperFilterDialog = browseunit._getPaperFilterDialog();

returnButton.onclick = function(){
    overview._routePageChanged("create-unit");
    reset();
}
ironPages.addEventListener("iron-select",function(){
    if(ironPages.selected=="browse-unit"){
        searchBar.query = "";
    }
});
searchbar.addEventListener("paper-search-filter",e=>paperFilterDialog.open());