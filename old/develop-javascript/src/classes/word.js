export default class Word{
    constructor(wordGerman, wordEnglish)
    {
        this.wordEnglish = wordEnglish;
        this.wordGerman = wordGerman;
    }
    getWordGerman(){
        return this.wordGerman;
    }
    getWordEnglish(){
        return this.wordEnglish;
    }
}