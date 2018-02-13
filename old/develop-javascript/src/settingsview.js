console.log("Javascript: settingsview loaded");
var myapp = document.querySelector("my-app");
var overview = myapp._getOverviewpage();
var settings = overview._getSettingsviewTag();
var defaultswitch = settings._getDefaultswitch();
var darkswitch = settings._getDarkswitch();
var menuBackgroundColour = settings._getMenuBackgroundColour();
console.log(menuBackgroundColour);
var menuNavigationColour = settings._getMenuNavigationColour();
console.log(menuNavigationColour);
var menuColour = settings._getMenuColour();
console.log(menuColour);
var displayAreaBackground = settings._getDisplayAreaBackgroundColour();
console.log(menuBackgroundColour);
var createTheme = settings._getCreateThemeDiv();
var createButton = settings._getCreateNewThemeButton();
var cancelButton = settings._getCancelButton();
var saveButton = settings._getSaveButton();
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
    if(isDefault){
        defaultswitch.removeAttribute("checked");      
        darkswitch.setAttribute("checked",true);
        isDefault = false;
        return;
    }
    defaultswitch.setAttribute("checked",true);      
    darkswitch.removeAttribute("checked");
    isDefault = true;
}
createButton.onclick = function(){
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
}
saveButton.onclick = function(){
    createButton.style.display="inline";
    createTheme.style.display="none";
    saveButton.style.display="none";
    cancelButton.style.display="none";
    save();
}
function save(){
    //DB save data
}