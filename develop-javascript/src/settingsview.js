import Theme from './classes/theme.js';
console.log("Javascript: settingsview loaded");
var myapp = document.querySelector("my-app");
var overview = myapp._getOverviewpage();
var settings = overview._getSettingsviewTag();
var defaultswitch = settings._getDefaultswitch();
var darkswitch = settings._getDarkswitch();
var themeName = settings._getThemeName();
var data = [];                                   //Wird später durch DB erstetzt
console.log(themeName);
var headerBackgroundColour = settings._getHeaderBackgroundColour();
console.log(headerBackgroundColour);
var headerFontColour = settings._getHeaderFontColour();
console.log(headerFontColour);
var menuBackgroundColour = settings._getMenuBackgroundColour();
console.log(menuBackgroundColour);
var menuFontColour = settings._getMenuFontColour();
console.log(menuFontColour);
var menuNavigationColour = settings._getMenuNavigationColour();
console.log(menuNavigationColour);
var menuNavigationFontColour = settings._getMenuNavigationFontColour();
console.log(menuNavigationFontColour);
var cardAreaBackgroundColour = settings._getCardAreaBackgroundColour();
console.log(cardAreaBackgroundColour);
var createTheme = settings._getCreateThemeDiv();
var createButton = settings._getCreateNewThemeButton();
var cancelButton = settings._getCancelButton();
var saveButton = settings._getSaveButton();
var appheader = overview._getAppHeader();
var ironSelector = overview._getIronSelector();
var appdrawerLayout = overview._getAppdrawer();
var appdrawer = overview._getAppdrawerForTheme();
var paperListBox = settings._getPaperListBox();
var isDefault = true;
console.log(settings);
console.log(defaultswitch);
console.log(darkswitch);
console.log(createTheme);
createTheme.style.display="none";
saveButton.style.display="none";
cancelButton.style.display="none";
defaultswitch.onclick = function(){toggle()}
darkswitch.onclick = function(){toggle()}
function toggle(){
    var darkTheme = new Theme("Dark Theme","#2E2E2E","#A9E2F3","#FFFFFF","#585858","#6E6E6E","#424242","#FFFFFF");
    var defaultTheme = new Theme("Default Theme","#1E88E5","#000000","#FFFFFF","#eeeeee","#f2f2f2","#ffffff","#000000");
    if(isDefault){
        changeTheme(darkTheme);
        defaultswitch.removeAttribute("checked");      
        darkswitch.setAttribute("checked",true);
        isDefault = false;
        return;
    }
    changeTheme(defaultTheme);
    defaultswitch.setAttribute("checked",true);      
    darkswitch.removeAttribute("checked");
    isDefault = true;
}
console.log(overview.style);
function changeTheme(theme){
    overview.updateStyles({"--app-primary-color":theme.getHeaderBackgroundcolor()});
    overview.updateStyles({"--app-secondary-color":theme.getMenuFontColor()});
    overview.updateStyles({"color":theme.getMenuFontColor()});
    overview.updateStyles({"--containercolor":theme.getMenuBackgroundColor()});
    appheader.updateStyles({"color":theme.getHeaderFontColor()});
    appdrawerLayout.updateStyles({"background-color":theme.getCardAreaBackgroundColor()});
    overview.updateStyles({"--navigationcolorbackground":theme.getMenuNavigationColor()});
    overview.updateStyles({"--navigationcolorfont":theme.getMenuNavigationFontColor()});
    console.log(appdrawer);
}
createButton.onclick = function(){
    clear();
    createButton.style.display="none";
    createTheme.style.display="inline";
    saveButton.style.display="inline";
    cancelButton.style.display="inline";
}
cancelButton.onclick = function(){
    createButton.style.display="inline";
    createTheme.style.display="none";
    saveButton.style.display="none";
    cancelButton.style.display="none";
    console.log(headerBackgroundColour.color);
    clear();
}
saveButton.onclick = function(){
    if(themeName.value == null || headerBackgroundColour.color == undefined 
    || headerFontColour.color == undefined || menuBackgroundColour.color == undefined
|| menuFontColour.color == undefined || menuNavigationColour.color == undefined
|| menuNavigationFontColour.color == undefined || cardAreaBackgroundColour.color == undefined){
        alert("Name angeben!");
        return;
    }
    createButton.style.display="inline";
    createTheme.style.display="none";
    saveButton.style.display="none";
    cancelButton.style.display="none";
    save();
}
console.dir(paperListBox);
function save(){
    //DB save data
    var newTheme = new Theme(themeName.value, headerBackgroundColour.color,menuFontColour.color,headerFontColour.color,cardAreaBackgroundColour.color,menuNavigationColour.color,menuBackgroundColour.color, menuNavigationFontColour.color);
    data.push(newTheme); //Später durch Datenbank ersetzt
    console.log(newTheme);
    var newElement = document.createElement("paper-item");
    newElement.innerHTML=newTheme.getName();
    newElement.onclick = function(){check()};
    console.dir(newElement);
    paperListBox.appendChild(newElement);
}
function clear(){
    themeName.value = null;
    headerBackgroundColour.color = "#757575";
    headerBackgroundColour.color = undefined; 
    headerFontColour.color = "#757575";
    headerFontColour.color = undefined;
    menuBackgroundColour.color = "#757575";
    menuBackgroundColour.color = undefined;
    menuFontColour.color = "#757575";
    menuFontColour.color = undefined;
    menuNavigationColour.color = "#757575";
    menuNavigationColour.color = undefined;
    menuNavigationFontColour.color = "#757575";
    menuNavigationFontColour.color = undefined;
    cardAreaBackgroundColour.color = "#757575";
    cardAreaBackgroundColour.color = undefined;
}
/*function check(){
    var selectedElement = paperListBox.selectedItem;
    console.log(selectedElement);
    if(selectedElement.innerHTML=="no custom theme selected"){
        isDefault = false;
        toggle();
        return;
    }
    defaultswitch.removeAttribute("checked");      
    darkswitch.removeAttribute("checked");
}
var paperElement=settings._getFirstPaperItem();
paperElement.onclick = function(){check()};*/