import Theme from './classes/theme.js';
console.log("Javascript: settingsview loaded");
var myapp = document.querySelector("my-app");
var sharedStyle = myapp._getSharedStyle();
console.dir(sharedStyle);
var overview = myapp._getOverviewpage();
/*var homeview = overview._getHomeviewPage();
var unitoverview = overview._getUnitoverviewPage();
var unitPage = overview._getUnitPage();
var statisticsview = overview._getStatisticviewPage();
var messageview = overview._getMessageviewPage();
var accountView = overview._getAccountview();*/
var settings = overview._getSettingsviewTag();
/*var practiceUnitPage = overview._getPracticeUnitPage();
var selfcheckPage = overview._getSelfCheckPage();
var createUnitPage = overview._getCreateUnit();
var unitResultPage = overview._getUnitResultPage();
var translatePage = overview._getTranslatePage();
var browseUnitPage = overview._getBrowseUnit();
var uploadUnitPage = overview._getUploadUnit();*/
var defaultswitch = settings._getDefaultswitch();
var darkswitch = settings._getDarkswitch();
var themeName = settings._getThemeName();
var data = [];                                   //Wird später durch DB erstetzt
var darkTheme = new Theme(0, "Dark Theme","#2E2E2E","#FFFFFF","#FFFFFF","#585858","#6E6E6E","#424242","#FFFFFF", "#424242","#ffffff","#E0ECF8");
var defaultTheme = new Theme(1, "Default Theme","#1E88E5","#000000","#FFFFFF","#eeeeee","#f2f2f2","#ffffff","#000000","#FFFFFF","#212121","#A4A4A4");
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
var cardBackgroundColour = settings._getCardBackgroundColour();
console.log(cardBackgroundColour);
var cardHeadlineColour = settings._getCardHeadlineColour();
console.log(cardHeadlineColour);
var cardFontColour = settings._getCardFontColour();
console.log(cardFontColour);
var createTheme = settings._getCreateThemeDiv();
var createButton = settings._getCreateNewThemeButton();
var cancelButton = settings._getCancelButton();
var deleteButton = settings._getDeleteButton();
var editButon = settings._getEditButton();
var saveButton = settings._getSaveButton();
var appheader = overview._getAppHeader();
var ironSelector = overview._getIronSelector();
var appdrawerLayout = overview._getAppdrawer();
var appdrawer = overview._getAppdrawerForTheme();
var paperListBox = settings._getPaperListBox();
var toast = overview._getSettingsToast();
var isDefault = true;
console.log(settings);
console.log(defaultswitch);
console.log(darkswitch);
console.log(createTheme);
createTheme.style.display="none";
saveButton.style.display="none";
cancelButton.style.display="none";
deleteButton.style.display="none";
editButon.style.display="none";
defaultswitch.onclick = function(){toggle()}
darkswitch.onclick = function(){toggle()}
function toggle(){
    paperListBox.selectIndex(0);
    deleteButton.style.display="none";
    paperListBox.style.display = "inline";
    createButton.style.display="inline";
    createTheme.style.display="none";
    saveButton.style.display="none";
    editButon.style.display="none";
    cancelButton.style.display="none";
    console.log(headerBackgroundColour.color);
    clear();
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
    overview.updateStyles({"--itemcolor":theme.getMenuFontColor()});
    overview.updateStyles({"--containercolor":theme.getMenuBackgroundColor()});
    appheader.updateStyles({"color":theme.getHeaderFontColor()});
    appdrawerLayout.updateStyles({"background-color":theme.getCardAreaBackgroundColor()});
    overview.updateStyles({"--navigationcolorbackground":theme.getMenuNavigationColor()});
    overview.updateStyles({"--navigationcolorfont":theme.getMenuNavigationFontColor()});
    /*homeview.updateStyles({"--cardBackgroundcolor":"#03DC2B"});
    unitPage.updateStyles({"--cardBackgroundcolor":"#03DC2B"});
    unitoverview.updateStyles({"--cardBackgroundcolor":"#03DC2B"});
    statisticsview.updateStyles({"--cardBackgroundcolor":"#03DC2B"});
    messageview.updateStyles({"--cardBackgroundcolor":"#03DC2B"});
    accountView.updateStyles({"--cardBackgroundcolor":"#03DC2B"});
    settings.updateStyles({"--cardBackgroundcolor":"#03DC2B"});
    practiceUnitPage.updateStyles({"--cardBackgroundcolor":"#03DC2B"});
    selfcheckPage.updateStyles({"--cardBackgroundcolor":"#03DC2B"});
    createUnitPage.updateStyles({"--cardBackgroundcolor":"#03DC2B"});
    unitResultPage.updateStyles({"--cardBackgroundcolor":"#03DC2B"});
    translatePage.updateStyles({"--cardBackgroundcolor":"#03DC2B"});
    browseUnitPage.updateStyles({"--cardBackgroundcolor":"#03DC2B"});
    uploadUnitPage.updateStyles({"--cardBackgroundcolor":"#03DC2B"});*/
    myapp.updateStyles({"--cardBackgroundcolor":theme.getCardBackgroundColor()});
    myapp.updateStyles({"--headlineCard":theme.getCardHeadLineColor()});
    myapp.updateStyles({"--cardFontColor":"--headlineCard"});
    myapp.updateStyles({"--secondaryFontColorCard":theme.getParagraphFontColor()});
    var amt = -10;
    var color = LightenDarkenColor(theme.getCardBackgroundColor(), amt);
    myapp.updateStyles({"--hover-color":color});
    console.log(appdrawer);
}
function LightenDarkenColor(col, amt) {
  
    var usePound = false;
  
    if (col[0] == "#") {
        col = col.slice(1);
        usePound = true;
    }
 
    var num = parseInt(col,16);
 
    var r = (num >> 16) + amt;
 
    if (r > 255) r = 255;
    else if  (r < 0) r = 0;
 
    var b = ((num >> 8) & 0x00FF) + amt;
 
    if (b > 255) b = 255;
    else if  (b < 0) b = 0;
 
    var g = (num & 0x0000FF) + amt;
 
    if (g > 255) g = 255;
    else if (g < 0) g = 0;
 
    return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
  
}
createButton.onclick = function(){
    clear();
    deleteButton.style.display="none";
    paperListBox.style.display = "none";
    createButton.style.display="none";
    createTheme.style.display="inline";
    saveButton.style.display="inline";
    editButon.style.display="none";
    cancelButton.style.display="inline";
}
cancelButton.onclick = function(){
    if(isDefault){
        changeTheme(defaultTheme);
        return;
    }
    changeTheme(darkTheme);
    deleteButton.style.display="none";
    paperListBox.style.display = "inline";
    createButton.style.display="inline";
    createTheme.style.display="none";
    saveButton.style.display="none";
    editButon.style.display="none";
    cancelButton.style.display="none";
    console.log(headerBackgroundColour.color);
    clear();
}
saveButton.onclick = function(){
    if(themeName.value == null || headerBackgroundColour.color == undefined 
    || headerFontColour.color == undefined || menuBackgroundColour.color == undefined
|| menuFontColour.color == undefined || menuNavigationColour.color == undefined
|| menuNavigationFontColour.color == undefined || cardAreaBackgroundColour.color == undefined || 
cardBackgroundColour == undefined || cardHeadlineColour ==undefined || cardFontColour == undefined){
        toast.open();
        return;
    }
    createButton.style.display="inline";
    saveButton.style.display="none";
    deleteButton.style.display="none";
    editButon.style.display="inline";
    cancelButton.style.display="none";
    save();
}
headerBackgroundColour.onclick = function(){
    if(headerBackgroundColour.color != undefined && ((createButton.style.display == "none" && saveButton.style.display=="inline") || (editButon.style.display == "inline" && saveButton.style.display=="inline"))){
        overview.updateStyles({"--app-primary-color":headerBackgroundColour.color});
    }
}
menuFontColour.onclick = function(){    
    if(menuFontColour.color != undefined && ((createButton.style.display == "none" && saveButton.style.display=="inline") || (editButon.style.display == "inline" && saveButton.style.display=="inline"))){
        overview.updateStyles({"--app-secondary-color":menuFontColour.color});
        overview.updateStyles({"color":menuFontColour.color});
    }
}
menuBackgroundColour.onclick = function(){    
    if(menuBackgroundColour.color != undefined && ((createButton.style.display == "none" && saveButton.style.display=="inline") || (editButon.style.display == "inline" && saveButton.style.display=="inline"))){
        overview.updateStyles({"--containercolor":menuBackgroundColour.color});
    }
}
headerFontColour.onclick = function(){    
    if(headerFontColour.color != undefined && ((createButton.style.display == "none" && saveButton.style.display=="inline") || (editButon.style.display == "inline" && saveButton.style.display=="inline"))){
        appheader.updateStyles({"color":headerFontColour.color});
    }
}
cardAreaBackgroundColour.onclick = function(){    
    if(cardAreaBackgroundColour.color != undefined && ((createButton.style.display == "none" && saveButton.style.display=="inline") || (editButon.style.display == "inline" && saveButton.style.display=="inline"))){
        appdrawerLayout.updateStyles({"background-color":cardAreaBackgroundColour.color});
    }
}
menuNavigationColour.onclick = function(){    
    if(menuNavigationColour.color != undefined && ((createButton.style.display == "none" && saveButton.style.display=="inline") || (editButon.style.display == "inline" && saveButton.style.display=="inline"))){
        overview.updateStyles({"--navigationcolorbackground":menuNavigationColour.color});
    }
}
menuNavigationFontColour.onclick = function(){
    if(menuNavigationFontColour.color != undefined && ((createButton.style.display == "none" && saveButton.style.display=="inline") || (editButon.style.display == "inline" && saveButton.style.display=="inline"))){
        overview.updateStyles({"--navigationcolorfont":menuNavigationFontColour.color});
    }
}
cardBackgroundColour.onclick = function(){
    if(cardBackgroundColour.color != undefined && ((createButton.style.display == "none" && saveButton.style.display=="inline") || (editButon.style.display == "inline" && saveButton.style.display=="inline"))){
        myapp.updateStyles({"--cardBackgroundcolor":cardBackgroundColour.color});
        var amt = -10;
        var color = LightenDarkenColor(cardBackgroundColour.color, amt);
        myapp.updateStyles({"--hover-color":color});
    }
}
cardHeadlineColour.onclick = function(){
    if(cardHeadlineColour.color != undefined && ((createButton.style.display == "none" && saveButton.style.display=="inline") || (editButon.style.display == "inline" && saveButton.style.display=="inline"))){
        myapp.updateStyles({"--headlineCard":cardHeadlineColour.color});
        myapp.updateStyles({"--cardFontColor":"--headlineCard"});
    }
}
cardFontColour.onclick = function(){
    if(cardFontColour.color != undefined && ((createButton.style.display == "none" && saveButton.style.display=="inline") || (editButon.style.display == "inline" && saveButton.style.display=="inline"))){
        myapp.updateStyles({"--secondaryFontColorCard":cardFontColour.color});
    }
}

console.dir(paperListBox);
function save(){
    //DB save data
    paperListBox.style.display = "inline";
    var newTheme = new Theme(5, themeName.value, headerBackgroundColour.color,menuFontColour.color,headerFontColour.color,cardAreaBackgroundColour.color,menuNavigationColour.color,menuBackgroundColour.color, menuNavigationFontColour.color,cardBackgroundColour.color, cardHeadlineColour.color, cardFontColour.color);
    data.push(newTheme); //Später durch Datenbank ersetzt
    console.log(newTheme);
    var newElement = document.createElement("paper-item");
    newElement.innerHTML=newTheme.getName();
    newElement.onclick = function(){check(newTheme.getName())};
    console.dir(newElement);
    paperListBox.appendChild(newElement);
    paperListBox.selectIndex(data.length);
    changeTheme(newTheme);
    darkswitch.removeAttribute("checked");        
    defaultswitch.removeAttribute("checked");
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
    cardBackgroundColour.color = "#757575";
    cardBackgroundColour.color = undefined;
    cardHeadlineColour.color = "#757575";
    cardHeadlineColour.color = undefined;
    cardFontColour.color = "#757575";
    cardFontColour.color = undefined;
}
function check(name){
    if(name=="no custom theme selected"){
        createButton.style.display="inline";
        createTheme.style.display="none";
        saveButton.style.display="none";
        editButon.style.display="none";
        cancelButton.style.display="none";
        console.log(headerBackgroundColour.color);
        clear();
        if(isDefault){
            changeTheme(defaultTheme);
            darkswitch.removeAttribute("checked");      
            defaultswitch.setAttribute("checked",true);
            return;
        }
        changeTheme(darkTheme);
        darkswitch.setAttribute("checked",true);      
        defaultswitch.removeAttribute("checked");
        return;
    }
    darkswitch.removeAttribute("checked");        
    defaultswitch.removeAttribute("checked");
    var currentTheme;
    for(var i = 0; i<data.length;i++){
        if(data[i].getName() == name){
            currentTheme = data[i];
            break;
        }
    }
    changeTheme(currentTheme);
    createButton.style.display="inline";
    createTheme.style.display="inline";
    saveButton.style.display="none";
    cancelButton.style.display="none";
    editButon.style.display="inline";
    deleteButton.style.display="none";
    themeName.value = currentTheme.getName();
    headerBackgroundColour.color = currentTheme.getHeaderBackgroundcolor();
    headerFontColour.color = currentTheme.getHeaderFontColor();
    menuBackgroundColour.color = currentTheme.getMenuBackgroundColor();
    menuFontColour.color = currentTheme.getMenuFontColor();
    menuNavigationColour.color = currentTheme.getMenuNavigationColor();
    menuNavigationFontColour.color = currentTheme.getMenuNavigationFontColor();
    cardAreaBackgroundColour.color = currentTheme.getCardAreaBackgroundColor();
    cardBackgroundColour.color = currentTheme.getCardBackgroundColor();
    cardHeadlineColour.color = currentTheme.getCardHeadLineColor();
    cardFontColour.color = currentTheme._getCardFontColour();
}
var paperElement=settings._getFirstPaperItem();
paperElement.onclick = function(){check("no custom theme selected")};
editButon.onclick = function(){
    deleteButton.style.display="inline";
    createButton.style.display="none";
    paperListBox.style.display = "none";
    createTheme.style.display="inline";
    saveButton.style.display="inline";
    cancelButton.style.display="none";
    editButon.style.display="none";
    for(var i = 0; i<data.length;i++){
        if(data[i].getName() == themeName.value){
            data.splice(i, 1);
            break;
        }
    }
    console.log(data);
    var element = paperListBox.selectedItem;
    console.log(element);
    paperListBox.removeChild(element);
}
deleteButton.onclick = function(){
    createButton.style.display="inline";
    saveButton.style.display="none";
    deleteButton.style.display="none";
    editButon.style.display="inline";
    cancelButton.style.display="none";
    paperListBox.style.display = "inline";
    paperListBox.selectIndex(0);
    check("no custom theme selected");
}
