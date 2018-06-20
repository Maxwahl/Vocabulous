
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
    }
export default class Stopwatch{
    constructor(element){
        this.seconds = 0;
        this.minutes = 0;
        this.hours = 0;
        this.element = element;
        this.running = false;
        this.addNewSecond();
    }
    getTime(){
        var time = "";
        time = this.addNull(time, this.hours);
        time += ":";
        time = this.addNull(time, this.minutes);
        time += ":";
        time = this.addNull(time, this.seconds);
        return time;
    }
    addNull(output, number){
            if(number < 10){
                output += ("0" + number);
                return output;
            }
            output += number;
            return output;
    }
    async addNewSecond(){
            if(this.running){
                this.seconds++;
                if(this.seconds == 60){
                    this.minutes++;
                    this.seconds = 0;
                    if(this.minutes == 60){
                        this.minutes = 0;
                        this.hours = 0;
                    }
            }
            this.element.textContent = this.getTime(); 
    }
        await sleep(1000);
        this.addNewSecond();
    }
    start(){
        this.running = true;
    }
    getStopwatch(){
        return this;
    }
    pause(){
        this.running = false;
    }
    clear(){
        this.running = false;
        this.seconds = 0;
        this.minutes = 0;
        this.hours = 0;
        this.element.textContent = "00:00:00";
    }
}