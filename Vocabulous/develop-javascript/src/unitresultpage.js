import BackEndHandler from './classes/backEndHandler.js';
import Unit from './classes/unit.js';
import Word from './classes/word.js';
import Result from './classes/result.js';
console.log("Javascript: unitresultpage loaded");
import LearnProgress from './classes/learnProgress.js';
var myapp = document.querySelector("my-app");
var overview = myapp._getOverviewpage();
var unitView = overview._getUnitoverviewForSessionsPage();
var checked = unitView._getChecked();
var register = myapp._getRegisterLogin();
var ironPages = overview._getIronPages();
var username = register._getUsername();
var password = register._getPassword();
var user;
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
var unit = unitView._getUnitId();
var time;
var overviewProgressbar = overview._getLearnProgressbar();
var motto = unitresultPage._getMotto();


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
    user = await BackEndHandler.login(username.value, password.value);
    var theme = await BackEndHandler.startingTheme(user.getId());
    piechart.options = {
        "title":"Word-statistic",
        "backgroundColor": getComputedStyle(myapp).getPropertyValue("--cardBackgroundcolor"),
        "colors": ["#019F1F", "#DD0101", "#ff8000"],
        "legend": {
            "textStyle": { "color": theme.getParagraphFontColor(),"fontSize": "15" },
       },
       "titleTextStyle": {
        "fontSize": "18",
        "color": theme.getParagraphFontColor()
        }
    }
    if(unitresultPage.value == "parcticeunit-page"){
        getMottoForSession(0);
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
        var result = new Result(-1,unit.value, parseInt(wordCountPractice.value - secondTryPractice.value - wrongPractice.value),parseInt(secondTryPractice.value),parseInt(wrongPractice.value),timerToDouble(),0);
        saveResultInDb(result);
        if(wrongPractice.value == "0"){
            wrongVocabelsButton.setAttribute("hidden",true);
            timer.style.marginTop = '0px';
            timer.style.marginLeft = '15%';
        }
    }
    else if(unitresultPage.value == "parcticeunit-page-selectionmode"){
        getMottoForSession(1);
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
        var result = new Result(-1,unit.value,parseInt(correct.value),0,parseInt(wordCountPractice.value - correct.value),timerToDouble(),1);
        saveResultInDb(result);
    }
    else{
        /*wrongVocs  = practicePage._getWrongVocs();
        console.dir(wrongVocs);
        if(wrongVocs != null && wrongVocs != undefined){
            wrongVocs.value = "";
            console.dir("wrongVocs gelöscht");
        }*/
        getMottoForSession(2);
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
        var result = new Result(-1,unit.value,parseInt(wordCountSelfCheck.value - wrongSelfcheck.value),0,parseInt(wrongSelfcheck.value),timerToDouble(),2);
        saveResultInDb(result);
    }
    var progress = await LearnProgress.getProgress(user.getId());
    overviewProgressbar.max = progress[1];
    overviewProgressbar.value = progress[0];
}
wrongVocabelsButton.onclick = function(){
    overview._routePageChanged("practiceunit-page");
}

async function saveResultInDb(result){
    console.log(result);
    console.log(user);
    await BackEndHandler.saveResult(user.getId(), result);
}
function timerToDouble(){
    var string = time.innerHTML;
    return ((parseFloat(string.charAt(0))*10+parseFloat(string.charAt(1)))*60)+(parseFloat(string.charAt(3))*10+parseFloat(string.charAt(4)))+((parseFloat(string.charAt(6))*10+parseFloat(string.charAt(7)))/60);
}
async function getMottoForSession(mode){
    var results = await BackEndHandler.getResults(user.getId());
    var lastResult = null;
    //unit.value
    for(var i = 0; i < results.length; i++){
        if(results[i].getUnitId() == unit.value && results[i].getMode() == mode){
            if(lastResult == null || convertStringToDate(results[i].getDateTime()) > convertStringToDate(lastResult.getDateTime())){
                lastResult = results[i];
            }
        }
    }
    console.log("Lastresult:");
    console.log(lastResult);
    var actResult = null;
    if(mode == 0){
        actResult = new Result(-1,unit.value, parseInt(wordCountPractice.value - secondTryPractice.value - wrongPractice.value),parseInt(secondTryPractice.value),parseInt(wrongPractice.value),timerToDouble(),0);
    }
    else if(mode == 1){
        actResult = new Result(-1,unit.value,parseInt(correct.value),0,parseInt(wordCountPractice.value - correct.value),timerToDouble(),1);
    }
    else{
        actResult = new Result(-1,unit.value,parseInt(wordCountSelfCheck.value - wrongSelfcheck.value),0,parseInt(wrongSelfcheck.value),timerToDouble(),2);
    }
    if(actResult == null){
        motto.innerHTML = "";
    }
    var wrong = lastResult.getWrong() - actResult.getWrong();
    var right = actResult.getCorrect() - lastResult.getCorrect();
    /*if(actResult.getCorrect() == 0 && actResult.getWrong() == 0 && actResult.getSecondTry() != 0 && lastResult.getSecondTry() != 0){
        motto.innerHTML = "You should practice a little more so you do not always need a second try!";
    }
    if(actResult.getSecondTry() != lastResult.getSecondTry()){
        if((right < 0 && wrong > 0)  ||(right > 0 && wrong < 0)){
            if(wrong + right > 0){
                motto.innerHTML = "That session was better than the last one! You are on a good way!";
            }
            else if(wrong + right < 0){
                motto.innerHTML = "You knew a few more words, but you knew fewer words on the first try! Practice a little more!";
            }
            else if(wrong + right == 0){
                motto.innerHTML = "You have not deteriorated but also not improved!";
            }
        }
        return;
    }*/
    var correctAct = actResult.getCorrect();
    var correctLast = lastResult.getCorrect(); 
    if(actResult.getSecondTry() != 0 || lastResult.getSecondTry() != 0){
        var correctAct = actResult.getSecondTry()+actResult.getCorrect();
        var correctLast = lastResult.getSecondTry()+lastResult.getCorrect(); 
    }
    else{

    }
    var res = correctAct - correctLast;
    if(actResult.getWrong() == 0){
        motto.innerHTML = "You knew all the words! Keep it up!";
        return;
    }
    if(correctAct == 0){
        motto.innerHTML = "All beginning is difficult!";
        return;
    }
    if(res < 0){
        res = correctLast-correctAct;
        motto.innerHTML = "You knew "+res+" words less than in the last session. You have to practice more!";
    }
    else if(res == 0){
        motto.innerHTML = "You have as many vocabulary correct as in the last session. You have to learn a bit more to improve yourself!";
    }
    else if(res > 0){
        motto.innerHTML = "You knew "+res+" words more! You are on a good way!";
    }
}
function convertStringToDate(string){
    var dateString = string.split(" @ ")[0];
    var timeString = string.split(" @ ")[1].split(";")[0];
    var date = new Date();
    var day = parseInt(dateString.split("/")[0]);
    var month = parseInt(dateString.split("/")[1])-1;
    var year = parseInt(dateString.split("/")[2]);
    var hours = parseInt(timeString.split(":")[0]);
    var minutes = parseInt(timeString.split(":")[1]);
    var seconds = parseInt(timeString.split(":")[2]);
    date.setDate(day);
    date.setMonth(month);
    date.setFullYear(year);
    date.setHours(hours);
    date.setMinutes(minutes);
    date.setSeconds(seconds);
    return date;
}