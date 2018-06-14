import BackEndHandler from './classes/backEndHandler.js';
import Unit from './classes/unit.js';
import Word from './classes/word.js';
import Stopwatch from './classes/stopwatch.js';
console.log("Javascript: practicePage loaded");
var myapp = document.querySelector("my-app");
var overview = myapp._getOverviewpage();
var practicePage = overview._getPracticeUnitPage();
var unitName = practicePage._getUnitName();
var unitView = overview._getUnitoverviewForSessionsPage();
var checked = unitView._getChecked();
var ironPages = overview._getIronPages();
var cancelButton = practicePage._getCancelButton();
var pauseButton = practicePage._getPauseButton();
var skipButton = practicePage._getSkipButton();
var timerCounter = practicePage._getTimeCounter();
var toggleButton = practicePage._getToggleButton();
var learnProgressBar = practicePage._getLearnProgressBar();
var unitProgressBar = practicePage._getUnitProgressBar();
var input = practicePage._getInput();
var wordPrint = practicePage._getWordPrint();
var nextButton = practicePage._getNextButton();
var startButton = practicePage._getStartButton();
var returnButton = practicePage._getReturnButton();
var languageInfo = practicePage._getLanguageInfo();
var nextInfo = practicePage._getNextInfo();
var languagePopup = practicePage._getLanguagePupup();
var nextPopup = practicePage._getNextPupup();
var unitresultPage = overview._getUnitResultPage();
var wordCount = practicePage._getWordCount();
var wrongCounter = practicePage._getWrong();
var secondTry = practicePage._getSecondTry();
var wrongVocs = practicePage._getWrongVocs();
var infoLanguageAlert = practicePage._getPaperDialogLanguage();
var infoNextAlert = practicePage._getPaperDialogNext();
var toast1 = overview._getCorrectWordToast();
var toast2 = overview._getSecondTryToast();
var toast3 = overview._getWrongWordToast();
var words;
var english = true;
var position = 0;
var vocTries = 0;
var mistakeVocs = [];
var mistakes = 0;
var secondTryCounter = 0;
var timer = new Stopwatch(timerCounter);
/*languageInfo.onmouseover = function(){languagePopup.style.display = "block";}
languageInfo.onmouseout = function(){languagePopup.style.display = "none";}*/
languageInfo.onmouseover = function(){
    infoLanguageAlert.open();
}
nextInfo.onmouseover = function(){
    infoNextAlert.open();
}
languageInfo.onmouseout = function(){
    infoLanguageAlert.close();
}
nextInfo.onmouseout = function(){
    infoNextAlert.close();
}
/*nextInfo.onmouseover = function(){nextPopup.style.display = "block";}
nextInfo.onmouseout = function(){nextPopup.style.display = "none";}*/
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
    if(ironPages.selected=="practiceunit-page"){
        timer.clear();
        if(wrongVocs.value==""){
            changedUnit(false);
            return;
        }
        changedUnit(true);
    }
});
ironPages.addEventListener("iron-select",function(){
    if(ironPages.selected=="practiceunit-page"){
        load();
    }
});
load();
function load(){
    vocTries = 0;
    input.setAttribute("hidden",true);
    nextButton.setAttribute("hidden",true);
    cancelButton.setAttribute("hidden",true);
    skipButton.setAttribute("hidden",true);
    pauseButton.setAttribute("hidden",true);
    timerCounter.setAttribute("hidden",true);
    wordPrint.setAttribute("hidden",true);
    nextInfo.setAttribute("hidden",true);
    startButton.removeAttribute("hidden");
    returnButton.style.display = "inline";
    toggleButton.removeAttribute("disabled");
    languageInfo.removeAttribute("hidden");
    unitProgressBar.value = 0;
}
async function changedUnit(check){
    unitresultPage.value = "parcticeunit-page";
    unitName.innerHTML = await BackEndHandler.getUnitName(checked.value);
    words = await BackEndHandler.getVocabByID(checked.value); 
    if(check){
        loadWrongVocs();
    }
    wordCount.value = words.length;
    mistakes = 0;
    secondTryCounter = 0;
    shuffle(words);
    position = 0;
    timer.pause();
    unitProgressBar.max = words.length;
    if(english == false){ 
        toggleButton.setAttribute("checked",true);
        english = true;
    }
    wordPrint.innerHTML = words[0].getWordEnglish();
}
function saveWrongVocs(){
    var text = "";
    if(mistakeVocs.length == 0){
        return;
    }
    text += (mistakeVocs[0].getWordEnglish() + ";");
    text +=(mistakeVocs[0].getWordGerman());
    for(var i = 1; i < mistakeVocs.length; i++){
        text += (";" + mistakeVocs[i].getWordEnglish() + ";");
        text +=(mistakeVocs[i].getWordGerman());
    }
    wrongVocs.value = text;
    mistakeVocs = [];
}
function loadWrongVocs(){
    if(wrongVocs.length == 0){
        return;
    }
    words = [];
    var inputWords = wrongVocs.value.split(";")
    for(var i = 0; i < inputWords.length; i++){
        var word = new Word(inputWords[i+1], inputWords[i]);
        words.push(word);
        i++;
    }
}
changedUnit(false);
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
nextButton.onclick = async function(){await nextCheck()};
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
async function nextCheck(){
    if(english){
        if(input.value == words[position].getWordGerman()){
            if(vocTries == 1){
                secondTryCounter++;
            }
            vocTries = 0;
            changeLineColor("green");
            toast1.open();
            await sleep(500);
            changeLineColor("grey");
            input.value = "";
            if(position == words.length-1){
                wrongCounter.value = mistakes;
                saveWrongVocs();
                secondTry.value = secondTryCounter;
                overview._routePageChanged("unitresult-page");
                changedUnit(false);
                return;
            }
            position++;
            unitProgressBar.value = position;
            wordPrint.innerHTML = words[position].getWordEnglish();
            return;
        }
        changeLineColor("orange");
        toast2.open();
        input.value = "";
        vocTries++;
        if(vocTries==2){
            vocTries = 0;
            mistakes++;
            mistakeVocs.push(words[position]);
            await wrong();
        }
        return;
    }
    if(input.value == words[position].getWordEnglish()){
        if(vocTries == 1){
            secondTryCounter++;
        }
        vocTries = 0;
        changeLineColor("green");
        toast1.open();
        await sleep(500);
        changeLineColor("grey");
        input.value = "";
        if(position == words.length-1){
            wrongCounter.value = mistakes;
            saveWrongVocs();
            secondTry.value = secondTryCounter;
            overview._routePageChanged("unitresult-page");
            changedUnit(false);
            return;
        }
        position++;
        unitProgressBar.value = position;
        wordPrint.innerHTML = words[position].getWordGerman();
        return;
    }
    changeLineColor("orange");
    toast2.open();
    input.value = "";
    vocTries++;
    if(vocTries==2){
        vocTries = 0;
        mistakes++;
        mistakeVocs.push(words[position]);
        await wrong();
    }
}
function changeLineColor(color){
    input.updateStyles({"--paper-input-container-color":color});
    input.updateStyles({"--paper-input-container-focus-color":color});
    input.updateStyles({"--paper-input-container-invalid-color":color});
    input.updateStyles({"--paper-input-container-input-color":color})
}
async function wrong(){
    if(english){
        input.value = words[position].getWordGerman();
    }
    else{
        input.value = words[position].getWordEnglish();
    }
    changeLineColor("red");
    toast3.open();
    await sleep(2000);
    changeLineColor("grey");
    input.value = "";
    if(position == words.length-1){
        wrongCounter.value = mistakes;
        saveWrongVocs();
        secondTry.value = secondTryCounter;
        overview._routePageChanged("unitresult-page");
        changedUnit(false);
        return;
    }
    position++;
    unitProgressBar.value = position;
    if(english){
        wordPrint.innerHTML = words[position].getWordEnglish();
        return;
    }
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
input.onkeypress = async function(e){
    if (e.keyCode == 13 || e.which == 13){
        await nextCheck();
    }
}
pauseButton.onclick = function(){
    if(pauseButton.textContent == "Pause"){
        pauseButton.updateStyles({"background":"red"});
        pauseButton.updateStyles({"color":"white"});
        input.setAttribute("disabled",true);
        nextButton.setAttribute("disabled",true);
        cancelButton.setAttribute("disabled",true);
        skipButton.setAttribute("disabled",true);
        pauseButton.textContent = "Continue";
        timer.pause();
        return;
    }
    input.removeAttribute("disabled");
    nextButton.removeAttribute("disabled");
    cancelButton.removeAttribute("disabled");
    skipButton.removeAttribute("disabled");
    pauseButton.textContent = "Pause";
    pauseButton.updateStyles({"background":"initial"});
    pauseButton.updateStyles({"color":"var(--headlineCard)"});
    timer.start();
}
returnButton.onclick = function(){overview._routePageChanged("unit-overview-for-sessions");}
startButton.onclick = function(){
    input.removeAttribute("hidden");
    nextButton.removeAttribute("hidden");
    cancelButton.removeAttribute("hidden");
    skipButton.removeAttribute("hidden");
    pauseButton.removeAttribute("hidden");
    timerCounter.removeAttribute("hidden");
    wordPrint.removeAttribute("hidden");
    nextButton.removeAttribute("hidden");
    startButton.setAttribute("hidden",true);
    returnButton.style.display = "none";
    toggleButton.setAttribute("disabled",true);
    nextInfo.removeAttribute("hidden");
    languageInfo.setAttribute("hidden",true);
    timer.start();
}
