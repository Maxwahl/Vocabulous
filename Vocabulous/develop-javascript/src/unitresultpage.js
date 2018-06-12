import BackEndHandler from './classes/backEndHandler.js';
import Unit from './classes/unit.js';
import Word from './classes/word.js';
import Result from './classes/result.js';
console.log("Javascript: unitresultpage loaded");
var myapp = document.querySelector("my-app");
var overview = myapp._getOverviewpage();
var unitView = overview._getUnitoverviewForSessionsPage();
var checked = unitView._getChecked();
var ironPages = overview._getIronPages();
var unitresultPage = overview._getUnitResultPage();
var unitName = unitresultPage._getUnitName();
var piechart = unitresultPage._getPieChart();
var wrongVocabelsButton = unitresultPage._getwrongVocabelsButton();
var practicePage = overview._getPracticeUnitPage();
var wordCountPractice;
var wrongPractice;
var secondTryPractice;
var selfcheckPage = overview._getSelfCheckPage();
var practiceSelectionMode = overview._getPracticeUnitPageSelectionmode();
var wordCountSelfCheck;
var wrongSelfcheck;
var returnButton = unitresultPage._getReturnButton();
var wrongVocs;
var timer = unitresultPage._getTimeCounter();
var time;


returnButton.onclick = function(){
    if(unitresultPage.value == "parcticeunit-page"){
        wrongVocs  = practicePage._getWrongVocs();
        if(wrongVocs != null && wrongVocs != undefined){
            wrongVocs.value = "";
        }
    }
    overview._routePageChanged("unit-overview-for-sessions");
}

var words;
loadResultTable();
ironPages.addEventListener("iron-select",function(){
    if(ironPages.selected=="unitresult-page"){
        loadResultTable();
    }
});
async function loadResultTable(){
    unitName.innerHTML = await BackEndHandler.getUnitName(checked.value);
    var rows;
    piechart.options = {
        "title":"Word-statistic",
        "backgroundColor": getComputedStyle(myapp).getPropertyValue("--cardBackgroundcolor"),
        "colors": ["#019F1F", "#DD0101", "#ff8000"]
    }
    if(unitresultPage.value == "parcticeunit-page"){
        wrongVocabelsButton.removeAttribute("hidden");
        wordCountPractice = practicePage._getWordCount();
        wrongPractice = practicePage._getWrong();
        secondTryPractice = practicePage._getSecondTry();
        time = practicePage._getTimeCounter();
        timer.innerHTML = "spent time: "+ time.innerHTML;
        timer.style.marginTop= '-25px';
        timer.style.marginLeft = '25%';
        piechart.rows = [["Correct",
        parseInt(wordCountPractice.value - secondTryPractice.value - wrongPractice.value)],
        ["Wrong",parseInt(wrongPractice.value)], 
        ["Second Try",parseInt(secondTryPractice.value)]];
        var result = new Result(-1, parseInt(wordCountPractice.value - secondTryPractice.value - wrongPractice.value),parseInt(secondTryPractice.value),parseInt(wrongPractice.value),time.innerHTML,0);
        saveResultInDb(result);
        if(wrongPractice.value == "0"){
            wrongVocabelsButton.setAttribute("hidden",true);
            timer.style.marginTop = '0px';
            timer.style.marginLeft = '15%';
        }
    }
    else if(unitresultPage.value == "parcticeunit-page-selectionmode"){
        wrongVocabelsButton.setAttribute("hidden",true);
        var correct = practiceSelectionMode._getCorrectVocs();
        wordCountPractice = practiceSelectionMode._getWordCount();
        time = practiceSelectionMode._getTimeCounter();
        timer.innerHTML = "spent time: "+ time.innerHTML;
        timer.style.marginTop = '0px';
        timer.style.marginLeft = '0%';
        piechart.rows = [["Correct",
        parseInt(correct.value)],
        ["Wrong",parseInt(wordCountPractice.value - correct.value)]];
        var result = new Result(-1,parseInt(correct.value),0,parseInt(wordCountPractice.value - correct.value),time.innerHTML,1);
        saveResultInDb(result);
    }
    else{
        /*wrongVocs  = practicePage._getWrongVocs();
        console.dir(wrongVocs);
        if(wrongVocs != null && wrongVocs != undefined){
            wrongVocs.value = "";
            console.dir("wrongVocs gelöscht");
        }*/
        wrongVocabelsButton.setAttribute("hidden",true);
        wordCountSelfCheck = selfcheckPage._getWordCount();
        wrongSelfcheck = selfcheckPage._getWrong();
        time = selfcheckPage._getTimeCounter();
        timer.innerHTML = "spent time: "+ time.innerHTML;
        timer.style.marginTop = '0px';
        timer.style.marginLeft = '0%';
        piechart.rows = [["Correct",
        parseInt(wordCountSelfCheck.value - wrongSelfcheck.value)],
        ["Wrong",parseInt(wrongSelfcheck.value)]];
        var result = new Result(-1,parseInt(wordCountSelfCheck.value - wrongSelfcheck.value),0,parseInt(wrongSelfcheck.value),time.innerHTML,2);
        saveResultInDb(result);
    }
}
wrongVocabelsButton.onclick = function(){
    overview._routePageChanged("practiceunit-page");
}

function saveResultInDb(result){
    console.log(result);
}