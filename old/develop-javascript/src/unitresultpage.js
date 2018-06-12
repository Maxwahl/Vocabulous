import BackEndHandler from './classes/backEndHandler.js';
import Unit from './classes/unit.js';
import Word from './classes/word.js';
import Result from './classes/result.js';
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
var practiceSelectionMode = overview._getPracticeUnitPageSelectionmode();
console.dir(practiceSelectionMode);
var wordCountSelfCheck;
var wrongSelfcheck;
var returnButton = unitresultPage._getReturnButton();
console.dir(returnButton);
var wrongVocs;
var timer = unitresultPage._getTimeCounter();
console.dir(timer);
var time;


returnButton.onclick = function(){
    if(unitresultPage.value == "parcticeunit-page"){
        wrongVocs  = practicePage._getWrongVocs();
        console.dir(wrongVocs);
        if(wrongVocs != null && wrongVocs != undefined){
            wrongVocs.value = "";
            console.dir("wrongVocs gelöscht");
        }
    }
    overview._routePageChanged("unit-overview");
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
        console.dir(wordCountPractice);
        wrongPractice = practicePage._getWrong();
        console.dir(wrongPractice);
        secondTryPractice = practicePage._getSecondTry();
        console.dir(secondTryPractice);
        time = practicePage._getTimeCounter();
        console.dir(time);
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
        console.dir(time);
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
        console.dir(wordCountSelfCheck);
        wrongSelfcheck = selfcheckPage._getWrong();
        console.dir(wrongSelfcheck);
        time = selfcheckPage._getTimeCounter();
        console.dir(time);
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