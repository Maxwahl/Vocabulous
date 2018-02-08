export default class Vocabel{
    constructor(vocabelEnglish, vocabelGerman){
        this.vocabelEnglish = vocabelEnglish;
        this.vocabelGerman = vocabelGerman;
    }
    getVocabelEnglish(){
        return this.vocabelEnglish;
    }
    getVocabelGerman(){
        return this.vocabelGerman;
    }
    correctVocabelEnglisch(vocE){
        if(this.getVocabelEnglish()==vocE){
            return true;
        }
        return false;
    }
    correctVocabelGerman(vocG){
        if(this.getVocabelGerman()==vocG){
            return true;
        }
        return false;
    }
}