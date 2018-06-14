import BackEndHandler from './classes/backEndHandler.js';
import Unit from './classes/unit.js';
import Word from './classes/word.js';
import Stopwatch from './classes/stopwatch.js';
console.log("Javascript: practicePageSelectionmode loaded");
var myapp = document.querySelector("my-app");
var overview = myapp._getOverviewpage();
console.dir(overview);
var practicePageSelectionmode = overview._getPracticeUnitPageSelectionmode();
console.dir(practicePageSelectionmode);
var unitName = practicePageSelectionmode._getUnitName();
console.dir(unitName);
var unitView = overview._getUnitView();
console.dir(unitView);
var checked = unitView._getChecked();
console.dir(checked);
var ironPages = overview._getIronPages();
console.dir(ironPages);
var cancelButton = practicePageSelectionmode._getCancelButton();
console.dir(cancelButton);
var pauseButton = practicePageSelectionmode._getPauseButton();
console.dir(pauseButton);
var timerCounter = practicePageSelectionmode._getTimeCounter();
console.dir(timerCounter);
var learnProgressBar = practicePageSelectionmode._getLearnProgressBar();
console.dir(learnProgressBar);
var unitProgressBar = practicePageSelectionmode._getUnitProgressBar();
console.dir(unitProgressBar);
var startButton = practicePageSelectionmode._getStartButton();
console.dir(startButton);
var returnButton = practicePageSelectionmode._getReturnButton();
console.dir(returnButton);
var languagePopup = practicePageSelectionmode._getLanguagePupup();
console.dir(languagePopup);
var unitresultPage = overview._getUnitResultPage();
console.dir(unitresultPage);
var wordCount = practicePageSelectionmode._getWordCount();
console.dir(wordCount);
var wrongCounter = practicePageSelectionmode._getWrong();
console.dir(wrongCounter);
var correctVocs = practicePageSelectionmode._getCorrectVocs();
console.dir(correctVocs);
var words;
var english = true;
var position = 0;
var vocTries = 0;
var mistakeVocs = [];
var rightWords = 0;
var timer = new Stopwatch(timerCounter);

var wordTable = practicePageSelectionmode._getWordTable();
var wordButtonOne = practicePageSelectionmode._getWordButtonOne();
var wordButtonTwo = practicePageSelectionmode._getWordButtonTwo();
var wordButtonThree = practicePageSelectionmode._getWordButtonThree();
var wordButtonFour = practicePageSelectionmode._getWordButtonFour();
var wordButtonFive = practicePageSelectionmode._getWordButtonFive();
var wordButtonSix = practicePageSelectionmode._getWordButtonSix();

var pointCheckerOne = false;
var pointCheckerTwo = false;
var pointCheckerThree = false;
var pointCheckerFour = false;
var pointCheckerFive = false;
var pointCheckerSix = false;

var selectedButton1 = null;
var selectedButton2 = null;

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
    if(ironPages.selected=="practiceunit-page-selectionmode"){
        timer.clear();
        changedUnit();
    }
});
ironPages.addEventListener("iron-select",function(){
    if(ironPages.selected=="practiceunit-page-selectionmode"){
        load();
    }
});
load();
function load(){
    vocTries = 0;
    wordTable.setAttribute("hidden", true);
    cancelButton.setAttribute("hidden",true);
    pauseButton.setAttribute("hidden",true);
    timerCounter.setAttribute("hidden",true);
    startButton.removeAttribute("hidden");
    returnButton.style.display = "inline";
    unitProgressBar.value = 0;
}
async function changedUnit(){
    unitresultPage.value = "parcticeunit-page-selectionmode";
    unitName.innerHTML = checked.value;
    words = await BackEndHandler.getWords(unitName.innerHTML); 
    wordCount.value = words.length;
    rightWords = 0;
    shuffle(words);
    position = 0;
    timer.pause();
    unitProgressBar.max = words.length;
    if(english == false){ 
        toggleButton.setAttribute("checked",true);
        english = true;
    }
}
function loadWrongVocs(){
    console.dir(wrongVocs.value);
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
changedUnit();
cancelButton.onclick = function(){overview._routePageChanged("unit-page")}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
pauseButton.onclick = function(){
    if(pauseButton.textContent == "Pause"){
        pauseButton.updateStyles({"background":"red"});
        pauseButton.updateStyles({"color":"white"});
        
        cancelButton.setAttribute("disabled",true);
        pauseButton.textContent = "Continue";
        timer.pause();
        return;
    }
    
    cancelButton.removeAttribute("disabled");
    pauseButton.textContent = "Pause";
    pauseButton.updateStyles({"background":"initial"});
    pauseButton.updateStyles({"color":"var(--headlineCard)"});
    timer.start();
}
returnButton.onclick = function(){overview._routePageChanged("unit-page");}
startButton.onclick = function(){
    wordTable.removeAttribute("hidden");
    cancelButton.removeAttribute("hidden");
    pauseButton.removeAttribute("hidden");
    timerCounter.removeAttribute("hidden");
    startButton.setAttribute("hidden",true);
    returnButton.style.display = "none";
    timer.start();
    loadNextRound();
}
function loadNextRound(){
    pointCheckerOne = false;
    pointCheckerTwo = false;
    pointCheckerThree = false;
    pointCheckerFour = false;
    pointCheckerFive = false;
    pointCheckerSix = false;
    var round = [];
    var index = 3;
    if(words.length == 0){
        correctVocs.value = rightWords;
        overview._routePageChanged("unitresult-page");
        changedUnit();
    }
    if(words.length < 3){
        index = words.length;
    }
    for(var i = 0; i < index; i++){
        var array = [words[0].getWordEnglish(), words[0].getWordGerman()];
        round.push(array);
        array = [words[0].getWordGerman(), words[0].getWordEnglish()];
        round.push(array);
        words.shift();
    }
    shuffle(round);
    var currWord;
    if(round.length != 0){
        wordButtonOne.removeAttribute("hidden");
        currWord = round.shift();
        wordButtonOne.innerHTML=currWord[0];
        wordButtonOne.value=currWord[1];
    }
    else{
        wordButtonOne.setAttribute("hidden",true);
    }
    if(round.length != 0){
        wordButtonTwo.removeAttribute("hidden");
        currWord = round.shift();
        wordButtonTwo.innerHTML=currWord[0];
        wordButtonTwo.value=currWord[1];
    }
    else{
        wordButtonTwo.setAttribute("hidden",true);
    }
    if(round.length != 0){
        wordButtonThree.removeAttribute("hidden");
        currWord = round.shift();
        wordButtonThree.innerHTML=currWord[0];
        wordButtonThree.value=currWord[1];
    }
    else{
        wordButtonThree.setAttribute("hidden",true);
    }
    if(round.length != 0){
        wordButtonFour.removeAttribute("hidden");
        currWord = round.shift();
        wordButtonFour.innerHTML=currWord[0];
        wordButtonFour.value=currWord[1];
    }
    else{
        wordButtonFour.setAttribute("hidden",true);
    }
    if(round.length != 0){
        wordButtonFive.removeAttribute("hidden");
        currWord = round.shift();
        wordButtonFive.innerHTML=currWord[0];
        wordButtonFive.value=currWord[1];
    }
    else{
        wordButtonFive.setAttribute("hidden",true);
    }
    if(round.length != 0){
        wordButtonSix.removeAttribute("hidden");
        currWord = round.shift();
        wordButtonSix.innerHTML=currWord[0];
        wordButtonSix.value=currWord[1];
    }
    else{
        wordButtonSix.setAttribute("hidden",true);
    }
}
async function handleWordButton(button){
    if(button.active == false){
        if(selectedButton1 == button){
            selectedButton1 = null;
        }
        if(selectedButton2 == button){
            selectedButton2 = null;
        }
        return;
    }
    if(selectedButton1 != null && selectedButton2 != null){
        button.active = false;
        return;
    }
    if(selectedButton1 == null){
        selectedButton1 = button;
    }
    else if(selectedButton2 == null){
        selectedButton2 = button;
    }
    if(selectedButton1 != null && selectedButton2 != null){
        if(selectedButton1.innerHTML == selectedButton2.value && selectedButton1.value == selectedButton2.innerHTML){
            updateButtonStyle(selectedButton1,"green","white",false, getPointChecker(selectedButton1));
            updateButtonStyle(selectedButton2,"green","white",false,true);
            unitProgressBar.value++;
            await sleep(1000);
            updateButtonStyle(selectedButton1,"initial","var(--headlineCard)", true, getPointChecker(selectedButton1));
            updateButtonStyle(selectedButton2,"initial","var(--headlineCard)", true,true);
        }
        else{
            updateButtonStyle(selectedButton1,"red","white", false, getPointChecker(selectedButton1));
            updateButtonStyle(selectedButton2,"red","white", false,true);
            await sleep(1000);
            updateButtonStyle(selectedButton1,"initial","var(--headlineCard)", false, getPointChecker(selectedButton1));
            updateButtonStyle(selectedButton2,"initial","var(--headlineCard)", false,true);
        }
        selectedButton1 = null;
        selectedButton2 = null;
        if(checkWordButtonsForHidden()){
            loadNextRound();
        }
    }
}
function checkWordButtonsForHidden(){
    if(! wordButtonOne.hasAttribute("hidden")){
        return false;
    }
    if(! wordButtonTwo.hasAttribute("hidden")){
        return false;
    }
    if(! wordButtonThree.hasAttribute("hidden")){
        return false;
    }
    if(! wordButtonFour.hasAttribute("hidden")){
        return false;
    }
    if(! wordButtonFive.hasAttribute("hidden")){
        return false;
    }
    if(! wordButtonSix.hasAttribute("hidden")){
        return false;
    }
    return true;
}
function updateButtonStyle(button, background, font, correct, other){
    if(button == wordButtonOne){            
        wordButtonOne.updateStyles({"background":background});
        wordButtonOne.updateStyles({"color":font});
        wordButtonOne.active = false;
        if(correct){
            wordButtonOne.setAttribute("hidden", true);
            if(!pointCheckerOne && !other){
                rightWords++;
            }
        }
        if(background == "red"){
            pointCheckerOne = true;
        }
        return;
    }
    if(button == wordButtonTwo){
        wordButtonTwo.updateStyles({"background":background});
        wordButtonTwo.updateStyles({"color":font});
        wordButtonTwo.active = false;
        if(correct){
            wordButtonTwo.setAttribute("hidden", true);
            if(!pointCheckerTwo && !other){
                rightWords++;
            }
        }
        if(background == "red"){
            pointCheckerTwo = true;
        }
        return;
    }
    if(button == wordButtonThree){
        wordButtonThree.updateStyles({"background":background});
        wordButtonThree.updateStyles({"color":font});
        wordButtonThree.active = false;
        if(correct){
            wordButtonThree.setAttribute("hidden", true);
            if(!pointCheckerThree && !other){
                rightWords++;
            }
        }
        if(background == "red"){
            pointCheckerThree = true;
        }
        return;
    }
    if(button == wordButtonFour){
        wordButtonFour.updateStyles({"background":background});
        wordButtonFour.updateStyles({"color":font});
        wordButtonFour.active = false;
        if(correct){
            wordButtonFour.setAttribute("hidden", true);
            if(!pointCheckerFour && !other){
                rightWords++;
            }
        }
        if(background == "red"){
            pointCheckerFour = true;
        }
        return;
    }
    if(button == wordButtonFive){
        wordButtonFive.updateStyles({"background":background});
        wordButtonFive.updateStyles({"color":font});
        wordButtonFive.active = false;
        if(correct){
            wordButtonFive.setAttribute("hidden", true);
            if(!pointCheckerFive && !other){
                rightWords++;
            }
        }
        if(background == "red"){
            pointCheckerFive = true;
        }
        return;
    }
    if(button == wordButtonSix){
        wordButtonSix.updateStyles({"background":background});
        wordButtonSix.updateStyles({"color":font});
        wordButtonSix.active = false;
        if(correct){
            wordButtonSix.setAttribute("hidden", true);
            if(!pointCheckerSix && !other){
                rightWords++;
            }
        }
        if(background == "red"){
            pointCheckerSix = true;
        }
        return;
    }
}
function getPointChecker(button){
    if(button.value == wordButtonOne.innerHTML){    
        return pointCheckerOne;
    }
    if(button.value == wordButtonTwo.innerHTML){
        return pointCheckerTwo;
    }
    if(button.value == wordButtonThree.innerHTML){
        return pointCheckerThree;
    }
    if(button.value == wordButtonFour.innerHTML){
        return pointCheckerFour;
    }
    if(button.value == wordButtonFive.innerHTML){
        return pointCheckerFive;
    }
    if(button.value == wordButtonSix.innerHTML){
        return pointCheckerSix;
    }
    return false;
}
wordButtonOne.onclick = async function(){await handleWordButton(this);}
wordButtonTwo.onclick = async function(){await handleWordButton(this);}
wordButtonThree.onclick = async function(){await handleWordButton(this);}
wordButtonFour.onclick = async function(){await handleWordButton(this);}
wordButtonFive.onclick = async function(){await handleWordButton(this);}
wordButtonSix.onclick = async function(){await handleWordButton(this);}