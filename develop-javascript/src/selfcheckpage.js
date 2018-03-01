import BackEndHandler from './classes/backEndHandler.js';
import Unit from './classes/unit.js';
import Word from './classes/word.js';
import Stopwatch from './classes/stopwatch.js';
console.log("Javascript: selfcheckpage loaded");
var myapp = document.querySelector("my-app");
var overview = myapp._getOverviewpage();
console.dir(overview);
var selfcheckPage = overview._getSelfCheckPage();
console.dir(selfcheckPage);
var unitName = selfcheckPage._getUnitName();
console.dir(unitName);
var unitView = overview._getUnitView();
console.dir(unitView);
var checked = unitView._getChecked();
console.dir(checked);
var ironPages = overview._getIronPages();
console.dir(ironPages);
var cancelButton = selfcheckPage._getCancelButton();
console.dir(cancelButton);
var skipButton = selfcheckPage._getSkipButton();
console.dir(skipButton);
var timerCounter = selfcheckPage._getTimeCounter();
console.dir(timerCounter);
var toggleButton = selfcheckPage._getToggleButton();
console.dir(toggleButton);
var learnProgressBar = selfcheckPage._getLearnProgressBar();
console.dir(learnProgressBar);
var unitProgressBar = selfcheckPage._getUnitProgressBar();
console.dir(unitProgressBar);
var input = selfcheckPage._getInput();
console.dir(input);
var wordPrint = selfcheckPage._getWordPrint();
console.dir(wordPrint);
var nextButton = selfcheckPage._getNextButton();
console.dir(nextButton);
var startButton = selfcheckPage._getStartButton();
console.dir(startButton);
var returnButton = selfcheckPage._getReturnButton();
console.dir(returnButton);
var words;
var english = true;
var position = 0;
var mistakes = 0;
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
        changedUnit();
    }
});
async function changedUnit(){
    unitName.innerHTML = checked.value;
    words = await BackEndHandler.getWords(unitName.innerHTML); 
    shuffle(words);
    mistakes = 0;
    input.setAttribute("hidden",true);
    nextButton.setAttribute("hidden",true);
    cancelButton.setAttribute("hidden",true);
    skipButton.setAttribute("hidden",true);
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
        if(input.value != words[position].getWordGerman()){
            mistakes++;
            
        }
        input.value = "";
        if(position == words.length-1){
            alert("Sie haben " + mistakes + " Fehler gemacht! (von " + words.length + " Vokabeln)");
            overview._routePageChanged("unit-page");
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
        alert("Sie haben " + mistakes + " Fehler gemacht! (von " + words.length + " Vokabeln)");
        overview._routePageChanged("unit-page");
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
returnButton.onclick = function(){overview._routePageChanged("unit-page");}
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
    timer.start();
}
