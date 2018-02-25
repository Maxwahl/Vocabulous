import BackEndHandler from './classes/backEndHandler.js';
import Unit from './classes/unit.js';
import Word from './classes/word.js';
console.log("Javascript: unitsoverview loaded");
var myapp = document.querySelector("my-app");
var overview = myapp._getOverviewpage();
console.dir(overview);
var unitView = overview._getUnitView();
console.dir(unitView);
var unitTable = unitView._getUnitTable();
console.dir(unitTable);
var units = [];
(async function(){
    units = await BackEndHandler.getUnits();
    var dataCount = 3;
    var rowCount = 0;
    for(var i = 0; i < units.length; i++){
        if(dataCount == 3){
            //unitTable.appendChild(newRow);
            var newRow = unitTable.insertRow(rowCount);
            dataCount = 0;
            rowCount++;
        }
        var newData = newRow.insertCell(dataCount);
        newData.innerHTML = units[i].getName();
        console.dir(newData);
        //newRow.appendChild(newData);
        dataCount++;
    }
    //unitTable.appendChild(newRow);
})();