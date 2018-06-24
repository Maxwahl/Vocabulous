var myapp = document.querySelector("my-app");
var overview = myapp._getOverviewpage();
var practiceOverview = overview._getPracticeOverview();
var answerButton = practiceOverview._getAnswerPracticeButton();
var memoryButton = practiceOverview._getMemoryPracticeButton();
var mode = overview._getModeInput();
var ironPages = overview._getIronPages();
answerButton.onclick = function(){
    mode.value = "1";
    overview._routePageChanged("unit-overview-for-sessions");
}
memoryButton.onclick = function(){
    mode.value = "3";
    overview._routePageChanged("unit-overview-for-sessions");
}

ironPages.addEventListener("iron-select",function(){
    if(ironPages.selected=="practice-overview"){
        answerButton.removeAttribute("active");
        memoryButton.removeAttribute("active");
    }
});