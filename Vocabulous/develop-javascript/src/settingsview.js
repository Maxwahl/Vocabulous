//Derzeit Problem mit startTheme setzen und laden der Themes von User.




import Theme from './classes/theme.js';
import BackEndHandler from './classes/backEndHandler.js';
console.log("Javascript: settingsview loaded");
var myapp = document.querySelector("my-app");
var sharedStyle = myapp._getSharedStyle();
console.dir(sharedStyle);
var overview = myapp._getOverviewpage();
var settings = overview._getSettingsviewTag();
var defaultswitch = settings._getDefaultswitch();
var darkswitch = settings._getDarkswitch();
var themeName = settings._getThemeName();
var data = [];                                   //Wird später durch DB erstetzt
var darkTheme = new Theme(0, "Dark Theme","#2E2E2E","#FFFFFF","#FFFFFF","#585858","#6E6E6E","#424242","#FFFFFF", "#424242","#ffffff","#E0ECF8");
var defaultTheme = new Theme(1, "Default Theme","#1E88E5","#000000","#FFFFFF","#eeeeee","#f2f2f2","#ffffff","#000000","#FFFFFF","#212121","#777777");
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
var user;
var register = myapp._getRegisterLogin();
var username = register._getUsername();
var password = register._getPassword();
var ironPages = overview._getIronPages();
var headerBackgroundColourview = settings._getHeaderBackgroundColourView();
console.log(headerBackgroundColourview);
var headerFontColourview = settings._getHeaderFontColourView();
console.log(headerFontColourview);
var menuBackgroundColourview = settings._getMenuBackgroundColourView();
console.log(menuBackgroundColourview);
var menuFontColourview = settings._getMenuFontColourView();
console.log(menuFontColourview);
var menuNavigationColourview = settings._getMenuNavigationColourView();
console.log(menuNavigationColourview);
var menuNavigationFontColourview = settings._getMenuNavigationFontColourView();
console.log(menuNavigationFontColourview);
var cardAreaBackgroundColourview = settings._getCardAreaBackgroundColourView();
console.log(cardAreaBackgroundColourview);
var cardBackgroundColourview = settings._getCardBackgroundColourView();
console.log(cardBackgroundColourview);
var cardHeadlineColourview = settings._getCardHeadlineColourView();
console.log(cardHeadlineColourview);
var cardFontColourview = settings._getCardFontColourView();
console.log(cardFontColourview);

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
var toast0 = overview._getSettingsToast();
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
defaultswitch.onclick = function(){
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
    if(!defaultswitch.hasAttribute("checked")){
        changeTheme(darkTheme);
        BackEndHandler.changeStartingTheme(user.getId(),0);
        defaultswitch.removeAttribute("checked");      
        darkswitch.setAttribute("checked",true);
        return;
    }
    BackEndHandler.changeStartingTheme(user.getId(),1);
    changeTheme(defaultTheme);
    defaultswitch.setAttribute("checked",true);      
    darkswitch.removeAttribute("checked");
}
darkswitch.onclick = function(){
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
    if(!darkswitch.hasAttribute("checked")){
        changeTheme(defaultTheme);
        BackEndHandler.changeStartingTheme(user.getId(),1);
        defaultswitch.setAttribute("checked",true);      
        darkswitch.removeAttribute("checked");
        return;
    }
    changeTheme(darkTheme);
    defaultswitch.removeAttribute("checked");
    BackEndHandler.changeStartingTheme(user.getId(),0);      
    darkswitch.setAttribute("checked",true);
}
var data;
var boolForIron = false;
/*
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
}*/
ironPages.addEventListener("iron-select", function(){
    console.log(ironPages.selected);
    if(ironPages.selected != "settings-view"){
        boolForIron = false;
    }
    if(ironPages.selected=="settings-view" && !boolForIron){
        boolForIron = true;
        load();
    }
});
( function start(){
    load();
  })();
async function load(){
    user = await BackEndHandler.login(username.value, password.value);
    var theme = await BackEndHandler.startingTheme(user.getId());
    await loadThemes();
    if(theme.getId()==0){//dark
        /*isDefault=false;
        changeTheme(darkTheme);
        defaultswitch.removeAttribute("checked");      
        darkswitch.setAttribute("checked",true);*/
        check("no custom theme selected", 0);
        paperListBox.selectIndex(0);
    }
    else if(theme.getId()==1){//default
        /*changeTheme(defaultTheme);
        defaultswitch.setAttribute("checked",true);      
        darkswitch.removeAttribute("checked");
        isDefault = true;*/
        check("no custom theme selected",1);
        paperListBox.selectIndex(0);
    }
    else{//custom
        //changeTheme(theme);
        defaultswitch.removeAttribute("checked");    
        darkswitch.removeAttribute("checked");
        check(theme.getName(), theme.getId());
    }
}
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
    headerBackgroundColourview.style.backgroundColor = theme.getHeaderBackgroundcolor();
    headerFontColourview.style.backgroundColor = theme.getHeaderFontColor();
    menuBackgroundColourview.style.backgroundColor = theme.getMenuBackgroundColor();
    menuFontColourview.style.backgroundColor = theme.getMenuFontColor();
    menuNavigationColourview.style.backgroundColor = theme.getMenuNavigationColor();
    menuNavigationFontColourview.style.backgroundColor = theme.getMenuNavigationFontColor();
    cardAreaBackgroundColourview.style.backgroundColor = theme.getCardAreaBackgroundColor();
    cardBackgroundColourview.style.backgroundColor = theme.getCardBackgroundColor();
    cardHeadlineColourview.style.backgroundColor = theme.getCardHeadLineColor();
    cardFontColourview.style.backgroundColor = theme.getParagraphFontColor();
    headerBackgroundColourview.removeAttribute("hidden");
    headerFontColourview.removeAttribute("hidden");
    menuBackgroundColourview.removeAttribute("hidden");
    menuFontColourview.removeAttribute("hidden");
    menuNavigationColourview.removeAttribute("hidden");
    menuNavigationFontColourview.removeAttribute("hidden");
    cardAreaBackgroundColourview.removeAttribute("hidden");
    cardBackgroundColourview.removeAttribute("hidden");
    cardHeadlineColourview.removeAttribute("hidden");
    cardFontColourview.removeAttribute("hidden");
    headerBackgroundColour.style.opacity = "0";;
    headerFontColour.style.opacity = "0";
    menuBackgroundColour.style.opacity = "0";
    menuFontColour.style.opacity = "0";
    menuNavigationColour.style.opacity = "0";
    menuNavigationFontColour.style.opacity = "0";
    cardAreaBackgroundColour.style.opacity = "0";
    cardBackgroundColour.style.opacity = "0";
    cardHeadlineColour.style.opacity = "0";
    cardFontColour.style.opacity = "0";
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
function editMode(){
    headerBackgroundColour.style.opacity = "1";;
    headerFontColour.style.opacity = "1";
    menuBackgroundColour.style.opacity = "1";
    menuFontColour.style.opacity = "1";
    menuNavigationColour.style.opacity = "1";
    menuNavigationFontColour.style.opacity = "1";
    cardAreaBackgroundColour.style.opacity = "1";
    cardBackgroundColour.style.opacity = "1";
    cardHeadlineColour.style.opacity = "1";
    cardFontColour.style.opacity = "1";
    headerBackgroundColourview.setAttribute("hidden",true);
    headerFontColourview.setAttribute("hidden",true);
    menuBackgroundColourview.setAttribute("hidden",true);
    menuFontColourview.setAttribute("hidden",true);
    menuNavigationColourview.setAttribute("hidden",true);
    menuNavigationFontColourview.setAttribute("hidden",true);
    cardAreaBackgroundColourview.setAttribute("hidden",true);
    cardBackgroundColourview.setAttribute("hidden",true);
    cardHeadlineColourview.setAttribute("hidden",true);
    cardFontColourview.setAttribute("hidden",true);
}
createButton.onclick = function(){
    editMode();
    clear();
    deleteButton.style.display="none";
    paperListBox.style.display = "none";
    createButton.style.display="none";
    createTheme.style.display="inline";
    saveButton.style.display="inline";
    editButon.style.display="none";
    cancelButton.style.display="inline";
}
cancelButton.onclick = async function(){
    var theme = await BackEndHandler.startingTheme(user.getId());
    await loadThemes();
    if(theme.getId()==1){
        check("no custom theme selected",1);
        defaultswitch.setAttribute("checked",true); 
        paperListBox.selectIndex(0);  
    }
    else if(theme.getId()==0){
        check("no custom theme selected", 0);
        darkswitch.setAttribute("checked",true); 
        paperListBox.selectIndex(0);
    }
    else{
        check(theme.getName(), theme.getId());
    }
    paperListBox.style.display = "inline";/*
    paperListBox.selectIndex(0);
    deleteButton.style.display="none";
    paperListBox.style.display = "inline";
    createButton.style.display="inline";
    createTheme.style.display="none";
    saveButton.style.display="none";
    editButon.style.display="none";
    cancelButton.style.display="none";
    console.log(headerBackgroundColour.color);*/
    clear();
}
saveButton.onclick = function(){
    if(themeName.value == null || headerBackgroundColour.color == undefined 
    || headerFontColour.color == undefined || menuBackgroundColour.color == undefined
|| menuFontColour.color == undefined || menuNavigationColour.color == undefined
|| menuNavigationFontColour.color == undefined || cardAreaBackgroundColour.color == undefined || 
cardBackgroundColour == undefined || cardHeadlineColour ==undefined || cardFontColour == undefined){
        toast0.open();
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
async function save(){
    //DB save data
    paperListBox.style.display = "inline";
    var newTheme = new Theme(5, themeName.value, headerBackgroundColour.color,menuFontColour.color,headerFontColour.color,cardAreaBackgroundColour.color,menuNavigationColour.color,menuBackgroundColour.color, menuNavigationFontColour.color,cardBackgroundColour.color, cardHeadlineColour.color, cardFontColour.color);
    var themesId = await BackEndHandler.insertTheme(user.getId(), newTheme);
    await BackEndHandler.changeStartingTheme(user.getId(), themesId);
    console.log(newTheme);/*
    var newElement = document.createElement("paper-item");
    newElement.innerHTML=newTheme.getName();
    newElement.onclick = function(){check(newTheme.getName())};
    console.dir(newElement);
    paperListBox.appendChild(newElement);
    paperListBox.selectIndex(data.length);*/
    await loadThemes();
    console.dir(paperListBox.children[0].innerHTML);
    for(var i = 0; i<paperListBox.children.length;i++){
        if(paperListBox.children[i].innerHTML == newTheme.getName()){
            paperListBox.selectIndex(i);
            break;
        }
    }
    await changeTheme(newTheme);
    darkswitch.removeAttribute("checked");        
    defaultswitch.removeAttribute("checked");
}
function clearThemes(){
    while(paperListBox.firstChild){
        console.dir(paperListBox.firstChild);
        paperListBox.removeChild(paperListBox.firstChild);
    }
}
async function loadThemes(){
    clearThemes();
    var newElement = document.createElement("paper-item");
    newElement.innerHTML="no custom theme selected";
    paperListBox.appendChild(newElement);
    newElement.onclick = function(){check("no custom theme selected",1)};
    paperListBox.selectIndex(0);
    console.log(user.getId());
    data = await BackEndHandler.userThemes(user.getId());
    console.dir(data);
    for(var i = 0; i<data.length;i++){
        var newElement = document.createElement("paper-item");
        newElement.innerHTML=data[i].getName();
        newElement.onclick = function(){check(this.innerHTML,5)};
        paperListBox.appendChild(newElement);
    }

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
async function check(name, id){
    if(name=="no custom theme selected"){
        createButton.style.display="inline";
        createTheme.style.display="none";
        saveButton.style.display="none";
        editButon.style.display="none";
        cancelButton.style.display="none";
        console.log(headerBackgroundColour.color);
        clear();
        if(id==1){
            changeTheme(defaultTheme);
            darkswitch.removeAttribute("checked");      
            defaultswitch.setAttribute("checked",true);
            BackEndHandler.changeStartingTheme(user.getId(),1);     
            return;
        }
        changeTheme(darkTheme);
        darkswitch.setAttribute("checked",true);      
        defaultswitch.removeAttribute("checked");
        BackEndHandler.changeStartingTheme(user.getId(),0);     
        return;
    }
    darkswitch.removeAttribute("checked");        
    defaultswitch.removeAttribute("checked");
    var currentTheme;
    data = await BackEndHandler.userThemes(user.getId());
    for(var i = 0; i<data.length;i++){
        if(data[i].getName() == name){
            currentTheme = data[i];
            break;
        }
    }
    for(var i = 0; i<paperListBox.children.length;i++){
        if(paperListBox.children[i].innerHTML == currentTheme.getName()){
            paperListBox.selectIndex(i);
            break;
        }
    }
    changeTheme(currentTheme);
    BackEndHandler.changeStartingTheme(user.getId(), currentTheme.getId());     
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
    cardFontColour.color = currentTheme.getParagraphFontColor();
}
var paperElement=settings._getFirstPaperItem();
paperElement.onclick = function(){check("no custom theme selected",1)};
editButon.onclick = async function(){
    editMode();
    deleteButton.style.display="inline";
    createButton.style.display="none";
    paperListBox.style.display = "none";
    createTheme.style.display="inline";
    saveButton.style.display="inline";
    cancelButton.style.display="none";
    editButon.style.display="none";
    data = await BackEndHandler.userThemes(user.getId());
    for(var i = 0; i<data.length;i++){
        if(data[i].getName() == themeName.value){
            BackEndHandler.deleteTheme(data[i].getId());
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
