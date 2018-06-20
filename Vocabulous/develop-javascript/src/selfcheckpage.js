import BackEndHandler from './classes/backEndHandler.js';
import Unit from './classes/unit.js';
import Word from './classes/word.js';
import LearnProgress from './classes/learnProgress.js';
import Stopwatch from './classes/stopwatch.js';
console.log("Javascript: selfcheckpage loaded");
var myapp = document.querySelector("my-app");
var overview = myapp._getOverviewpage();
var selfcheckPage = overview._getSelfCheckPage();
var unitName = selfcheckPage._getUnitName();
var unitView = overview._getUnitoverviewForSessionsPage();
var checked = unitView._getChecked();
var ironPages = overview._getIronPages();
var cancelButton = selfcheckPage._getCancelButton();
var skipButton = selfcheckPage._getSkipButton();
var timerCounter = selfcheckPage._getTimeCounter();
var toggleButton = selfcheckPage._getToggleButton();
var learnProgressBar = selfcheckPage._getLearnProgressBar();
var unitProgressBar = selfcheckPage._getUnitProgressBar();
var input = selfcheckPage._getInput();
var wordPrint = selfcheckPage._getWordPrint();
var nextButton = selfcheckPage._getNextButton();
var startButton = selfcheckPage._getStartButton();
var returnButton = selfcheckPage._getReturnButton();
var languageInfo = selfcheckPage._getLanguageInfo();
var languagePopup = selfcheckPage._getLanguagePupup();
var unitresultPage = overview._getUnitResultPage();
var wordCount = selfcheckPage._getWordCount();
var wrongCounter = selfcheckPage._getWrong();
var infoLanguageAlert = selfcheckPage._getPaperDialogLanguage();
var words;
var english = true;
var position = 0;
var mistakes = 0;
var register = myapp._getRegisterLogin();
var username = register._getUsername();
var password = register._getPassword();
languageInfo.onmouseover = function(){
    infoLanguageAlert.open();
}
languageInfo.onmouseout = function(){
    infoLanguageAlert.close();
}
var timer = new Stopwatch(timerCounter);
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
  }
ironPages.addEventListener("iron-select",function(){
    if(ironPages.selected=="selfcheck-page"){
        timer.clear();
        changedUnit();
    }
});
ironPages.addEventListener("iron-select",function(){
    input.setAttribute("hidden",true);
    nextButton.setAttribute("hidden",true);
    cancelButton.setAttribute("hidden",true);
    skipButton.setAttribute("hidden",true);
    timerCounter.setAttribute("hidden",true);
    wordPrint.setAttribute("hidden",true);
    startButton.removeAttribute("hidden");
    returnButton.style.display = "inline";
    toggleButton.removeAttribute("disabled");
    languageInfo.removeAttribute("hidden");
    unitProgressBar.value = 0;
});
async function changedUnit(){
    var user = await BackEndHandler.login(username.value, password.value);
    var progress = await LearnProgress.getProgress(user.getId());
    learnProgressBar.max = progress[1];
    learnProgressBar.value = progress[0];
    unitresultPage.value = "selfcheck-page";
    unitName.innerHTML = await BackEndHandler.getUnitName(checked.value);
    words = await BackEndHandler.getVocabByID(checked.value); 
    wordCount.value = words.length;
    shuffle(words);
    mistakes = 0;
    position = 0;
    timer.pause();
    unitProgressBar.max = words.length;
    if(english == false){ 
        toggleButton.setAttribute("checked",true);
        english = true;
    }
    wordPrint.innerHTML = words[0].getWordEnglish();
}
changedUnit();
cancelButton.onclick = function(){overview._routePageChanged("unit-overview-for-sessions")}
toggleButton.onclick = function(){
    input.value = "";
    if(english){
        toggleButton.removeAttribute("checked");
        english = false;
        wordPrint.innerHTML = words[position].getWordGerman();
        return;
    }
    toggleButton.setAttribute("checked",true);
    english = true;
    wordPrint.innerHTML = words[position].getWordEnglish();
}
nextButton.onclick = function(){nextCheck()};
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
async function nextCheck(){
    if(english){
        if(input.value != words[position].getWordGerman()){
            mistakes++;
            
        }
        input.value = "";
        if(position == words.length-1){
            wrongCounter.value = mistakes;
            overview._routePageChanged("unitresult-page");
            changedUnit();
            return;
        }
        position++;
        unitProgressBar.value = position;
        wordPrint.innerHTML = words[position].getWordEnglish();
        return;
    }
    if(input.value != words[position].getWordEnglish()){
        mistakes++;
    }
    input.value = "";
    if(position == words.length-1){
        wrongCounter.value = mistakes;
        overview._routePageChanged("unitresult-page");
        changedUnit();
        return;
    }
    position++;
    unitProgressBar.value = position;
    wordPrint.innerHTML = words[position].getWordGerman();
}
skipButton.onclick = function(){
    var skipWord = words[position];
    words.splice(position,1);
    words.push(skipWord);
    input.value = "";
    if(english){
        wordPrint.innerHTML = words[position].getWordEnglish();
        return;
    }
    wordPrint.innerHTML = words[position].getWordGerman();
}
input.onkeypress = function(e){
    if (e.keyCode == 13 || e.which == 13){
        nextCheck();
    }
}
returnButton.onclick = function(){overview._routePageChanged("unit-overview-for-sessions");}
startButton.onclick = function(){
    input.removeAttribute("hidden");
    nextButton.removeAttribute("hidden");
    cancelButton.removeAttribute("hidden");
    skipButton.removeAttribute("hidden");
    timerCounter.removeAttribute("hidden");
    wordPrint.removeAttribute("hidden");
    startButton.setAttribute("hidden",true);
    returnButton.style.display = "none";
    toggleButton.setAttribute("disabled",true);
    languageInfo.setAttribute("hidden",true);
    timer.start();
}
