import BackEndHandler from './classes/backEndHandler.js';
import Unit from './classes/unit.js';
import Word from './classes/word.js';
console.log("Javascript: unitresultpage loaded");
var myapp = document.querySelector("my-app");
var overview = myapp._getOverviewpage();
console.dir(overview);
var unitView = overview._getUnitView();
console.dir(unitView);
var checked = unitView._getChecked();
console.dir(checked);
var ironPages = overview._getIronPages();
console.dir(ironPages);
var unitresultPage = overview._getUnitResultPage();
console.dir(unitresultPage);
var unitName = unitresultPage._getUnitName();
console.dir(unitName);
var piechart = unitresultPage._getPieChart();
console.dir(piechart);
var wrongVocabelsButton = unitresultPage._getwrongVocabelsButton();
console.dir(wrongVocabelsButton);
var practicePage = overview._getPracticeUnitPage();
console.dir(practicePage);
var wordCountPractice;
var wrongPractice;
var secondTryPractice;
var selfcheckPage = overview._getSelfCheckPage();
console.dir(selfcheckPage);
var wordCountSelfCheck;
var wrongSelfcheck;
var returnButton = unitresultPage._getReturnButton();
console.dir(returnButton);
var wrongVocs;


returnButton.onclick = function(){
    if(unitresultPage.value == "parcticeunit-page"){
        wrongVocs  = practicePage._getWrongVocs();
        console.dir(wrongVocs);
        if(wrongVocs != null && wrongVocs != undefined){
            wrongVocs.value = "";
            console.dir("wrongVocs gelöscht");
        }
    }
    overview._routePageChanged("unit-page");
}

var words;
loadResultTable();
ironPages.addEventListener("iron-select",function(){
    if(ironPages.selected=="unitresult-page"){
        loadResultTable();
    }
});
function loadResultTable(){
    unitName.innerHTML = checked.value;
    var rows;
    if(unitresultPage.value == "parcticeunit-page"){
        wrongVocabelsButton.removeAttribute("hidden");
        wordCountPractice = practicePage._getWordCount();
        console.dir(wordCountPractice);
        wrongPractice = practicePage._getWrong();
        console.dir(wrongPractice);
        secondTryPractice = practicePage._getSecondTry();
        console.dir(secondTryPractice);
        piechart.rows = [["Correct",
        parseInt(wordCountPractice.value - secondTryPractice.value - wrongPractice.value)],
        ["Wrong",parseInt(wrongPractice.value)], 
        ["Second Try",parseInt(secondTryPractice.value)]];
        if(wrongPractice.value == "0"){
            wrongVocabelsButton.setAttribute("hidden",true);
        }
    }
    else{
        wrongVocs  = practicePage._getWrongVocs();
        console.dir(wrongVocs);
        if(wrongVocs != null && wrongVocs != undefined){
            wrongVocs.value = "";
            console.dir("wrongVocs gelöscht");
        }
        wrongVocabelsButton.setAttribute("hidden",true);
        wordCountSelfCheck = selfcheckPage._getWordCount();
        console.dir(wordCountSelfCheck);
        wrongSelfcheck = selfcheckPage._getWrong();
        console.dir(wrongSelfcheck);
        piechart.rows = [["Correct",
        parseInt(wordCountSelfCheck.value - wrongSelfcheck.value)],
        ["Wrong",parseInt(wrongSelfcheck.value)]];
    }
}
wrongVocabelsButton.onclick = function(){
    overview._routePageChanged("practiceunit-page");
}