import BackEndHandler from './classes/backEndHandler.js';
import Unit from "./classes/unit.js";
import User from "./classes/user.js";
import Result from './classes/result.js';
var myapp = document.querySelector("my-app");
var overview = myapp._getOverviewpage();
var register = myapp._getRegisterLogin();
var username = register._getUsername();
var password = register._getPassword();
var statisticView = overview._getStatisticviewPage();
var dropdown = statisticView._getDropDownMenu();
var piechart = statisticView._getPieChart();
var linechart = statisticView._getLineChart();
var columnchart = statisticView._getColumnChart();
var selector = statisticView._getSelector();
console.dir(dropdown);
var ironPages = overview._getIronPages();
var user;
var units = [];
var intoit = false;
var results = [];
var piediv = statisticView._getPieChartDiv();
var linediv = statisticView._getLineChartDiv();
var columndiv = statisticView._getColumnChartDiv();
var current;
var now = true;
var paperslide = statisticView._getPaperSlide();
var slidediv = statisticView._getSlideDiv();
ironPages.addEventListener("iron-select",function(){
    if(ironPages.selected=="statistics-view" && !intoit){
        intoit = true;
        load();
    }
    else if(ironPages.selected != "statistics-view"){
        intoit = false;
    }
});
load();
selector.addEventListener("selected-changed",function(){
    changeForThisUnit(current);
});
async function load(){
    paperslide.value = 1;
    slidediv.setAttribute("hidden",true);;
    selector.selected = 0;
    selector.style.display = "none";
    piediv.setAttribute("hidden",true);
    linediv.setAttribute("hidden",true);
    columndiv.setAttribute("hidden",true);
    user = await BackEndHandler.login(username.value, password.value);
    units = await BackEndHandler.getUnits(user.getId());
    results = await BackEndHandler.getResults(user.getId());
    while(dropdown.firstChild){
        dropdown.removeChild(dropdown.firstChild);
    }
    var newElement = document.createElement("paper-item");
    newElement.innerHTML="no unit selected";
    newElement.onclick = function(){
        selector.style.display = "none";
        piediv.setAttribute("hidden",true);
        linediv.setAttribute("hidden",true);
        columndiv.setAttribute("hidden",true);
        slidediv.setAttribute("hidden",true);
        now = true;
    };
    dropdown.appendChild(newElement);
    for(var i = 0; i<units.length;i++){
        console.log(units[i]);
        var newElement = document.createElement("paper-item");
        newElement.innerHTML=units[i].getName();
        newElement.value = units[i].getId();
        newElement.onclick = function(){
            slidediv.removeAttribute("hidden");
            changeForThisUnit(this.value);
            current = this.value;
            now = false;
        };
        dropdown.appendChild(newElement);
    }
    dropdown.selected = 0;
    loadCharts("this week", "day");
}
async function loadCharts(measurement, unity){
    var theme = await BackEndHandler.startingTheme(user.getId());
    piechart.options = {
        "title":"Unitresults "+measurement,
        "backgroundColor": getComputedStyle(myapp).getPropertyValue("--cardBackgroundcolor"),
        "colors": ["#019F1F", "#DD0101", "#ff8000"],
        "legend": {
            "textStyle": { "color": theme.getParagraphFontColor(),"fontSize": "15" },
       },
       "titleTextStyle": {
        "fontSize": "18",
        "color": theme.getParagraphFontColor()
        },
        /*"animation": {
         "duration": 1000,
         "easing": 'out'},
        "titleTextStyle": {
         "fontSize": "18",
         "color": theme.getParagraphFontColor()
         }*/
    }
    linechart.cols= [{"label":"Day", "type":"string"},{"label":"average\n min/"+unity, "type":"number"}]
    linechart.options = {
        "title":"Average time needed "+measurement,
        "backgroundColor": getComputedStyle(myapp).getPropertyValue("--cardBackgroundcolor"),
        "colors": ["#019F1F", "#DD0101", "#ff8000"],
        "legend": {
            "textStyle": { "color": theme.getParagraphFontColor(),"fontSize": "15" },
        },
        "hAxis": {
            "textStyle":{"color": theme.getParagraphFontColor()}
        },
        "vAxis": {
            "textStyle":{"color": theme.getParagraphFontColor()}
        },
       "titleTextStyle": {
        "fontSize": "18",
        "color": theme.getParagraphFontColor()
        },
        /*"animation": {
         "duration": 1000,
         "easing": 'out'},
        "titleTextStyle": {
         "fontSize": "18",
         "color": theme.getParagraphFontColor()
         }*/
    }
    columnchart.options = {
        "title":"Sessions "+measurement,
        "backgroundColor": getComputedStyle(myapp).getPropertyValue("--cardBackgroundcolor"),
        "colors": ["#019F1F", "#DD0101", "#ff8000"],
        "legend": {
            "textStyle": { "color": theme.getParagraphFontColor(),"fontSize": "15" },
       },
       "hAxis": {
           "textStyle":{"color": theme.getParagraphFontColor()}
       },
       "vAxis": {
           "textStyle":{"color": theme.getParagraphFontColor()}
       },
       /*"animation": {
        "duration": 1000,
        "easing": 'out'},*/
       "titleTextStyle": {
        "fontSize": "18",
        "color": theme.getParagraphFontColor()
        }
    }
}
paperslide.addEventListener("value-changed", function(){
    changeForThisUnit(current);
})
function changeForThisUnit(id){
    piediv.removeAttribute("hidden");
    linediv.removeAttribute("hidden");
    columndiv.removeAttribute("hidden");
    if(now){
        selector.selected = 0;
        now = false;
    }
    if(paperslide.value == 1){
        loadCharts("this week", "day");
        selector.style.display = "inherit";
        var wrongSum = 0;
        var secondTrySum = 0;
        var correctSum = 0;
        var days = [0,0,0,0,0,0,0];
        var time = [0,0,0,0,0,0,0];
        var date = new Date();
        var day = date.getDay();
        if(day == 0){
            var monday = date.getDate()-(6);
            var sunday = date.getDate();
        }
        else{
            var monday = date.getDate()-(day-1);
            var sunday = date.getDate()+(7-day);
        }
        console.log(monday);
        var actMonth = date.getMonth()+1;
        console.log(sunday);
        console.log(actMonth);
        for(var i = 0; i < results.length; i++){
            var dateDay = parseInt(results[i].getDateTime().split("/")[0]);
            var month = parseInt(results[i].getDateTime().split("/")[1]);
            if(results[i].getMode() == selector.selected && results[i].getUnitId()==id && actMonth==month
                && (dateDay>=monday && dateDay <= sunday)){
                wrongSum += results[i].getWrong();
                secondTrySum += results[i].getSecondTry();
                correctSum += results[i].getCorrect();
                var day = results[i].getDateTime().split(";")[1];
                if(day == 0){
                    day = 7;
                }
                days[day-1]++;
                time[day-1]+=results[i].getTimeNeeded();
            }
        }
        loadPieChart(wrongSum,secondTrySum,correctSum);
        var weekDays = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
        loadColumnChart(days, weekDays);
        loadLineChart(time, days, weekDays);
    }
    if(paperslide.value == 0){
        loadCharts("today", "hour");
        selector.style.display = "inherit";
        var wrongSum = 0;
        var secondTrySum = 0;
        var correctSum = 0;
        var hours = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        var time = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        var date = new Date();
        var day = date.getDate();
        var actMonth = date.getMonth()+1;
        for(var i = 0; i < results.length; i++){
            var dateDay = parseInt(results[i].getDateTime().split("/")[0]);
            var month = parseInt(results[i].getDateTime().split("/")[1]);
            if(results[i].getMode() == selector.selected && results[i].getUnitId()==id && actMonth==month
                && (dateDay == day)){
                wrongSum += results[i].getWrong();
                secondTrySum += results[i].getSecondTry();
                correctSum += results[i].getCorrect();
                var timeResult = results[i].getDateTime().split(";")[0];
                timeResult = timeResult.split("@")[1];
                timeResult = timeResult.substr(1);
                var hour = parseInt(timeResult.split(":")[0]);
                hour--;
                if(hour == -1){
                    hour = 23;
                }
                hours[hour]++;
                time[hour]+=results[i].getTimeNeeded();
            }
        }
        loadPieChart(wrongSum,secondTrySum,correctSum);
        var hoursPerDay = ["1am", "2am", "3am", "4am", "5am", "6am", "7am", "8am", "9am", "10am", "11am", "noon", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm", "midnight"];
        loadColumnChart(hours, hoursPerDay);
        loadLineChart(time, hours, hoursPerDay);
    }
    if(paperslide.value == 2){
        loadCharts("this month", "week");
        selector.style.display = "inherit";
        var wrongSum = 0;
        var secondTrySum = 0;
        var correctSum = 0;
        var weeks = [0,0,0,0];
        var time = [0,0,0,0];
        var date = new Date();
        var dateToday = new Date();
        date.setDate(1);
        var allDaysInMonth = 0;
        while(date.getMonth() == dateToday.getMonth()){
            allDaysInMonth++;
            date.setDate(date.getDate() + 1);
        }
        var rest = 0;
        while(allDaysInMonth % 4 != 0){
            rest++;
            allDaysInMonth--;
        }
        var interval = allDaysInMonth / 4;
        var actMonth = dateToday.getMonth()+1;
        for(var i = 0; i < results.length; i++){
            var dateDay = parseInt(results[i].getDateTime().split("/")[0]);
            var month = parseInt(results[i].getDateTime().split("/")[1]);
            if(results[i].getMode() == selector.selected && results[i].getUnitId()==id && actMonth==month){
                wrongSum += results[i].getWrong();
                secondTrySum += results[i].getSecondTry();
                correctSum += results[i].getCorrect();
                var timeResult = results[i].getDateTime().split(";")[0];
                timeResult = timeResult.split("@")[1];
                timeResult = timeResult.substr(1);
                var index = 0;
                var checkWeek = interval;
                while(checkWeek < dateDay){
                    checkWeek += interval;
                    index++;
                }
                if(index > 3){
                    index = 3;
                }
                weeks[index]++;
                time[index]+=results[i].getTimeNeeded();
            }
        }
        loadPieChart(wrongSum,secondTrySum,correctSum);
        var weeksForShow = ["1. week", "2. week", "3. week", "4. week"];
        loadColumnChart(weeks, weeksForShow);
        loadLineChart(time, weeks, weeksForShow);
    }
}
function loadPieChart(wrongSum, secondTrySum, correctSum){
    if(wrongSum == 0 && secondTrySum == 0 && correctSum == 0){
        piediv.setAttribute("hidden",true);
        return;
    }
    piediv.removeAttribute("hidden");
    if(selector.selected == 0){
        piechart.rows = [["Correct",
        correctSum],
        ["Wrong",wrongSum], 
        ["Second Try",secondTrySum]];
    }
    else if(selector.selected == 1){
        piechart.rows = [["Correct",
        correctSum],
        ["Wrong",wrongSum]];
    }
    else{
        piechart.rows = [["Correct",
        correctSum],
        ["Wrong",wrongSum]];
    }
}
function loadColumnChart(days, rows){
    var rowarray = [];
    for(var i = 0; i < days.length; i++){
        rowarray.push([rows[i],days[i]]);
    }
    columnchart.rows = rowarray;
}
function loadLineChart(time, days, weekdays){
    var hideornot = false;
    var rowarray = [];
    for(var i = 0; i < days.length; i++){
        if(days[i] != 0){
            hideornot = true;
            rowarray.push([weekdays[i],time[i]/days[i]]);
        }
    }
    linechart.rows = rowarray;
    if(hideornot){
        linediv.removeAttribute("hidden");
        return;
    }
    linediv.setAttribute("hidden",true);
}