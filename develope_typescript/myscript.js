var Benutzer = /** @class */ (function () {
    function Benutzer(name, passwort) {
        this.name = name;
        this.passwort = passwort;
    }
    Benutzer.prototype.getName = function () {
        return this.name;
    };
    Benutzer.prototype.getPasswort = function () {
        return this.passwort;
    };
    return Benutzer;
}());
var Vocabel = /** @class */ (function () {
    function Vocabel(vE, vD) {
        this.vocabelEnglish = vE;
        this.vocabelGerman = vD;
    }
    Vocabel.prototype.getVocabelEnglish = function () {
        return this.vocabelEnglish;
    };
    Vocabel.prototype.getVocabelGerman = function () {
        return this.vocabelGerman;
    };
    Vocabel.prototype.correctVocabelEnglish = function (vE) {
        if (this.vocabelEnglish == vE) {
            return true;
        }
        return false;
    };
    Vocabel.prototype.correctVocabelGerman = function (vD) {
        if (this.vocabelGerman == vD) {
            return true;
        }
        return false;
    };
    return Vocabel;
}());
var lastVoc;
function checkBenutzer(name, passwort) {
    var ben = new Benutzer(name, passwort);
    if (ben.getName() == "admin" && ben.getName() == "admin") {
        return true;
    }
    return containsBenutzer(ben);
}
function containsBenutzer(ben) {
    //Gibt es diesen Benutzer in der Datenbank?
    return false;
}
function getNextVocabel(inputE) {
    if (lastVoc != null && inputE != getEnglishVocabel(lastVoc)) {
        //Vokabel falsch
        return false;
    }
    lastVoc++;
    //...Vokabel als output liefern...
    return true;
}
function getEnglishVocabel(id) {
    //Random Vokabel von Datenbank
    return "";
}
function getGermanVocabel(id) {
    //Vokabel zu englisch Vokabel von Datenbank
    return "";
}
//# sourceMappingURL=myscript.js.map