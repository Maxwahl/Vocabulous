import BackEndHandler from './classes/backEndHandler.js';
import Unit from './classes/unit.js';
import Word from './classes/word.js';
//import languages from '../../node_modules/google-translate-api/languages';
//import translate from '../../node_modules/google-translate-api/index';
//import languages from './../../node_modules/google-translate-api/languages.js';
//import translate from './../../node_modules/google-translate-api/index.js';
//import require from './../../node_modules/require.js';




console.log("Javascript: translatepage loaded");
/*var languages = require("../../node_modules/google-translate-api/languages");
var translate = require("../../node_modules/google-translate-api/index");*/
//google.load("language", "1");
//const translate = require('google-translate-api');
var myapp = document.querySelector("my-app");
var overview = myapp._getOverviewpage();
console.dir(overview);
var ironPages = overview._getIronPages();
console.dir(ironPages);
var translatepage = overview._getTranslatePage();
console.dir(translatepage);
var returnButton = translatepage._getReturnButton();
console.dir(returnButton);
var searchbar = translatepage._getSearchBar();
console.dir(searchbar);
var translateTable = translatepage._getTranslateTable();
console.dir(translateTable);
returnButton.onclick = function(){overview._routePageChanged("unit-overview")}
searchbar.addEventListener("paper-search-clear",e=>clearFilter());
ironPages.addEventListener("iron-select",function(){
    if(ironPages.selected=="translate-page"){
        searchbar.query = "";
        clearFilter();
    }
});
function clearFilter(){
    while(translatepage.rows.length != 0){
        translatepage.deleteRow(0);
    }
}
searchbar.onkeyup = async function(){
    //const translate = require('google-translate-api');

    translate('Ik spreek Engels', {to: 'en'}).then(res => {
        console.log(res.text);
        //=> I speak English
        console.log(res.from.language.iso);
        //=> nl
    }).catch(err => {
        console.error(err);
    });
    /*const res = await translate('translator', {from: 'auto', to: 'nl'});
    searchbar.query = res.text;*/
    /*window.open("https://www.dict.cc/?s="+searchbar.query);
    var dicct = document.implementation.createHTMLDocument("https://www.dict.cc/?s="+searchbar.query);
    var table = dicct.querySelector("table");
    console.log(dicct);*/
    /*var text = "funktioniert";
    google.load("language", "1");
    google.language.detect(text, function(result) {
            var detected = document.getElementById("detected");
            // If there wasn't an error in the request
            if (!result.error) {
                var langCode = result.language;
                var langName;

                // Loop through the languages enum so that we can find the actual name of the language.
                // Learn about the languages enum here:
                // http://code.google.com/apis/ajaxlanguage/documentation/reference.html#LangNameArray
                for ( var i in google.language.Languages) {
                    var thisLangCode = google.language.Languages[i];
                    if (thisLangCode == langCode) {
                        // find the language code, store the language name.
                        langName = i;
                        break;
                    }
                }

                // See the detected language.
                detected.innerHTML = 'Detected: "' + result.language
                        + '" - aka "' + langName + '"';
                google.language.translate(text, result.language, 'en', function(result) {
                    var translated = document.getElementById("transtext");
                    if (result.translation) {
                        text.innerHTML = result.translation;
                    }
                });
            }
            console.log(text);
        });*/
    
}