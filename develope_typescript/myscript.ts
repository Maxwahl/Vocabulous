class Benutzer{
    name:string;
    passwort:string;
    constructor(name:string, passwort:string){
        this.name=name;
        this.passwort=passwort;
    }
    getName():string{
        return this.name;
    }
    getPasswort():string{
        return this.passwort;
    }
}
class Vocabel{
    vocabelEnglish:string;
    vocabelGerman:string
    constructor(vE:string, vD:string){
        this.vocabelEnglish=vE;
        this.vocabelGerman=vD;
    }
    getVocabelEnglish():string{
        return this.vocabelEnglish;
    }
    getVocabelGerman():string{
        return this.vocabelGerman;
    }
    correctVocabelEnglish(vE:string):boolean{
        if(this.vocabelEnglish == vE){
            return true;
        }
        return false;
    }
    correctVocabelGerman(vD:string):boolean{
        if(this.vocabelGerman == vD){
            return true;
        }
        return false;
    }
}
var lastVoc:number;
function checkBenutzer(name:string, passwort:string):boolean{
    var ben:Benutzer = new Benutzer(name, passwort);
    return containsBenutzer(ben);
}
function containsBenutzer(ben:Benutzer):boolean{

    //Gibt es diesen Benutzer in der Datenbank?
    return true;
}
function getNextVocabel(inputE:string):boolean{
    if(lastVoc != null && inputE !=getEnglishVocabel(lastVoc)){
        //Vokabel falsch
        return false;
    }
    lastVoc++;
    //...Vokabel als output liefern...
    return true;
}
function getEnglishVocabel(id:number):string{
    //Random Vokabel von Datenbank
    return "";
}
function getGermanVocabel(id:number):string{
    //Vokabel zu englisch Vokabel von Datenbank
    return "";
}
function getTest(){
    alert("Er erkennt mich! juhu!");
}