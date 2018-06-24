export default class Unit{
    constructor(id, name)
    {
        this.name = name;
        this.data = [];
        this.id=id;
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
    getId(){
        return this.id;
    }
}