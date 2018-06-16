export default class Result{
    constructor(id, unitid,correct, secondTry, wrong, timeNeeded, mode)
    {
        this.mode = mode; //0 = practice_write 1 = memory 2 = selfchek
        this.correct = correct;
        this.secondTry = secondTry;
        this.wrong = wrong;
        this.timeNeeded = timeNeeded;
        this.id=id;
        this.unitid=unitid;
        var currentdate = new Date(); 
        this.datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
    }
    getId(){
        return this.id;
    }
    getUnitId(){
        return this.unitid;
    }
    getCorrect(){
        return this.correct;
    }
    getSecondTry(){
        return this.secondTry;
    }
    getWrong(){
        return this.wrong;
    }
    getTimeNeeded(){
        return this.timeNeeded;
    }
    getDateTime(){
        return this.datetime;
    }
    getMode(){
        return this.mode;
    }
}