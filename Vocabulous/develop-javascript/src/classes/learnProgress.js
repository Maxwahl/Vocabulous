import Result from "./result.js";
import Unit from "./unit.js";
import BackEndHandler from './backEndHandler.js';
export default class LearnProgress{

    static async getProgress(uId){
        var units = await BackEndHandler.getUnits(uId);
        var results = await BackEndHandler.getResults(uId);
        var answer = false;
        var memory = false;
        var selfcheck = false;
        var val = 0;
        var progress = 0;
        for(var i = 0; i < units.length; i++){
            for(var a = 0; a < results.length; a++){
                if(units[i].getId() == results[a].getUnitId()){
                    if(results[a].getMode() == 0){
                        answer = true;
                    }
                    if(results[a].getMode() == 1){
                        memory = true;
                    }
                    if(results[a].getMode() == 2){
                        selfcheck = true;
                    }
                    if(answer && memory && selfcheck){
                        val = 1;
                        break;
                    }
                }
            }
            progress += val;
            answer = false;
            memory = false;
            selfcheck = false;
            val = 0;
        }
        return [progress, units.length];
    }
}