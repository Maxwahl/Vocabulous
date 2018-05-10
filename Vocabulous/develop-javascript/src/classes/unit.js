export default class Unit{
    constructor(name)
    {
        this.name = name;
        this.data = [];
    }
    getName(){
        return this.name;
    }
    newWord(word){
        this.data.push(word);
    }
    getWords(){
        return this.data;
    }
}