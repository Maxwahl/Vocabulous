import BackEndHandler from './classes/backEndHandler.js';
import Unit from './classes/unit.js';
import Word from './classes/word.js';
import Stopwatch from './classes/stopwatch.js';
console.log("Javascript: practicePage loaded");
var myapp = document.querySelector("my-app");
var overview = myapp._getOverviewpage();
console.dir(overview);
var practicePage = overview._getPracticeUnitPage();
console.dir(practicePage);
var unitName = practicePage._getUnitName();
console.dir(unitName);
var unitView = overview._getUnitView();
console.dir(unitView);
var checked = unitView._getChecked();
console.dir(checked);
var ironPages = overview._getIronPages();
console.dir(ironPages);
var cancelButton = practicePage._getCancelButton();
console.dir(cancelButton);
var pauseButton = practicePage._getPauseButton();
console.dir(pauseButton);
var skipButton = practicePage._getSkipButton();
console.dir(skipButton);
var timerCounter = practicePage._getTimeCounter();
console.dir(timerCounter);
var toggleButton = practicePage._getToggleButton();
console.dir(toggleButton);
var learnProgressBar = practicePage._getLearnProgressBar();
console.dir(learnProgressBar);
var unitProgressBar = practicePage._getUnitProgressBar();
console.dir(unitProgressBar);
var input = practicePage._getInput();
console.dir(input);
var wordPrint = practicePage._getWordPrint();
console.dir(wordPrint);
var nextButton = practicePage._getNextButton();
console.dir(nextButton);
var startButton = practicePage._getStartButton();
console.dir(startButton);
var returnButton = practicePage._getReturnButton();
console.dir(returnButton);
var words;
var english = true;
var position = 0;
var vocTries = 0;
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
    if(ironPages.selected=="practiceunit-page"){
        changedUnit();
    }
});
async function changedUnit(){
    unitName.innerHTML = checked.value;
    words = await BackEndHandler.getWords(unitName.innerHTML); 
    shuffle(words);
    input.setAttribute("hidden",true);
    nextButton.setAttribute("hidden",true);
    cancelButton.setAttribute("hidden",true);
    skipButton.setAttribute("hidden",true);
    pauseButton.setAttribute("hidden",true);
    timerCounter.setAttribute("hidden",true);
    wordPrint.setAttribute("hidden",true);
    startButton.removeAttribute("hidden");
    returnButton.style.display = "inline";
    toggleButton.removeAttribute("disabled");
    position = 0;
    timer.pause();
    timer.clear();
    unitProgressBar.max = words.length;
    unitProgressBar.value = 0;
    if(english == false){ 
        toggleButton.setAttribute("checked",true);
        english = true;
    }
    wordPrint.innerHTML = words[0].getWordEnglish();
}
changedUnit();
cancelButton.onclick = function(){overview._routePageChanged("unit-page")}
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
        if(input.value == words[position].getWordGerman()){
            vocTries = 0;
            changeLineColor("green");
            await sleep(500);
            changeLineColor("initial");
            input.value = "";
            if(position == words.length-1){
                overview._routePageChanged("unit-page");
                changedUnit();
                return;
            }
            position++;
            unitProgressBar.value = position;
            wordPrint.innerHTML = words[position].getWordEnglish();
            return;
        }
        changeLineColor("red");
        vocTries++;
        if(vocTries==2){
            vocTries = 0;
            wrong();
        }
        return;
    }
    if(input.value == words[position].getWordEnglish()){
        vocTries = 0;
        changeLineColor("green");
        await sleep(500);
        changeLineColor("initial");
        input.value = "";
        if(position == words.length-1){
            overview._routePageChanged("unit-page");
            changedUnit();
            return;
        }
        position++;
        unitProgressBar.value = position;
        wordPrint.innerHTML = words[position].getWordGerman();
        return;
    }
    changeLineColor("red");
    vocTries++;
    if(vocTries==2){
        vocTries = 0;
        wrong();
    }
}
function changeLineColor(color){
    input.updateStyles({"--paper-input-container-color":color});
    input.updateStyles({"--paper-input-container-focus-color":color});
    input.updateStyles({"--paper-input-container-invalid-color":color});
}
async function wrong(){
    if(english){
        input.value = words[position].getWordGerman();
    }
    else{
        input.value = words[position].getWordEnglish();
    }
    changeLineColor("orange");
    await sleep(1000);
    changeLineColor("initial");
    input.value = "";
    if(position == words.length-1){
        overview._routePageChanged("unit-page");
        changedUnit();
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
input.onkeypress = function(e){
    if (e.keyCode == 13 || e.which == 13){
        nextCheck();
    }
}
pauseButton.onclick = function(){
    if(pauseButton.textContent == "Pause"){
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
    timer.start();
}
returnButton.onclick = function(){overview._routePageChanged("unit-page");}
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
    timer.start();
}
