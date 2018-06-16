import User from "./user.js";
import Theme from "./theme.js";
import Unit from "./unit.js";
import Word from "./word.js";
import Result from "./result.js";

export default class BackEndHandler{

    static async fetchFromServer(get){
        return await fetch(get, {mode: 'cors'}).then(response => response.json());
    }

    static answer(get){
        return new Promise((resolve, reject) => { 
            resolve(BackEndHandler.fetchFromServer(get));
        });
    }

    static async login(username,password){
        const {id,Firstname,Lastname,Email,Birthdate,Username,Password,Institution} = await this.answer("http://localhost:8080/dataserver/webresources/users/login?user="+username+"&pw="+password);
        if(id ==-1){
            return null;
        }
        let user = new User(Username,Password);
        user.setId(id);
        user.setFirstname(Firstname);
        user.setLastname(Lastname);
        user.setEmail(Email);
        user.setBirthdate(Birthdate);
        user.setInstitution(Institution);
        return user;
    }

    static async user(username){
        const {id,Firstname,Lastname,Email,Birthdate,Username,Password,Institution} = await this.answer("http://localhost:8080/dataserver/webresources/users/user?user="+username);
        if(id ==-1){
            return null;
        }
        let user = new User(Username,Password);
        user.setId(id);
        user.setFirstname(Firstname);
        user.setLastname(Lastname);
        user.setEmail(Email);
        user.setBirthdate(Birthdate);
        user.setInstitution(Institution);
        return user;
    }
    static async startingTheme(uId){
        const {id,name,headerBackgroundColor,headerFontColor,menuBackgroundColor,menuFontColor,menuNavigationFontColor,cardAreaBackgroundColor,menuNavigationColor,cardBackgroundColor,cardHeadLineColor,paragraphFontColor} = await this.answer("http://localhost:8080/dataserver/webresources/themes/startingTheme/"+uId);
        let theme = new Theme(id,name,'#'+headerBackgroundColor,'#'+menuFontColor,'#'+headerFontColor,'#'+cardAreaBackgroundColor,'#'+menuNavigationColor,'#'+menuBackgroundColor,'#'+menuNavigationFontColor,'#'+cardBackgroundColor,'#'+cardHeadLineColor,'#'+paragraphFontColor);
        return theme;      
    }
    static async userThemes(uId){
        let jsonText = await this.answer("http://localhost:8080/dataserver/webresources/themes/userThemes/"+uId);
        let themes = [];
        while(jsonText.length>0){
            const {id,name,headerBackgroundColor,headerFontColor,menuBackgroundColor,menuFontColor,menuNavigationFontColor,cardAreaBackgroundColor,menuNavigationColor,cardBackgroundColor,cardHeadLineColor,paragraphFontColor} = jsonText.pop();
            let theme = new Theme(id,name,'#'+headerBackgroundColor,'#'+menuFontColor,'#'+headerFontColor,'#'+cardAreaBackgroundColor,'#'+menuNavigationColor,'#'+menuBackgroundColor,'#'+menuNavigationFontColor,'#'+cardBackgroundColor,'#'+cardHeadLineColor,'#'+paragraphFontColor);
            themes.push(theme);
        }
        return themes;
    }
    static async insertTheme(uID,theme){
        const {retVal} = await this.answer("http://localhost:8080/dataserver/webresources/themes/newTheme?owner="+uID+"&name="+theme.getName()+"&hBG="+theme.getHeaderBackgroundcolorDB()+"&mFC="+theme.getMenuFontColorDB()+"&hFC="+theme.getHeaderFontColorDB()+"&cABG="+theme.getCardAreaBackgroundColorDB()+"&mNC="+theme.getMenuNavigationColorDB()+"&mBG="+theme.getMenuBackgroundColorDB()+"&mNF="+theme.getMenuNavigationFontColorDB()+"&cBG="+theme.getCardBackgroundColorDB()+"&cHL="+theme.getCardHeadLineColorDB()+"&pF="+theme.getParagraphFontColorDB());
        return retVal;
    }
    static async changeTheme(theme){
        const {retVal} = await this.answer("http://localhost:8080/dataserver/webresources/themes/changeTheme?theme="+theme.getId()+"&name="+theme.getName()+"&hBG="+theme.getHeaderBackgroundcolorDB()+"&mFC="+theme.getMenuFontColorDB()+"&hFC="+theme.getHeaderFontColorDB()+"&cABG="+theme.getCardAreaBackgroundColorDB()+"&mNC="+theme.getMenuNavigationColorDB()+"&mBG="+theme.getMenuBackgroundColorDB()+"&mNF="+theme.getMenuNavigationFontColorDB()+"&cBG="+theme.getCardBackgroundColorDB()+"&cHL="+theme.getCardHeadLineColorDB()+"&pF="+theme.getParagraphFontColorDB());
        return retVal;
    }
    static async changeStartingTheme(uId,tId){
        const {retVal} = await this.answer("http://localhost:8080/dataserver/webresources/users/setStartingTheme?user="+uId+"&theme="+tId);
        return retVal;
    }
    static async changeUser(user){
        const {retVal} = await this.answer("http://localhost:8080/dataserver/webresources/users/changeUser?id="+user.getId()+"&user="+user.getUsername()+"&pw="+user.getPassword()+"&fN="+user.getFirstname()+"&lN="+user.getLastname()+"&Email="+user.getEmail()+"&bD="+user.getBirthdate()+"&inst="+user.getInstitution());
        return retVal;
    }
    static async deleteTheme(tId){
        const {retVal} = await this.answer("http://localhost:8080/dataserver/webresources/themes/deleteTheme?theme="+tId);
        return retVal;
    }
    static async getUnits(uID){
        let jsonText = await this.answer("http://localhost:8080/dataserver/webresources/units/units?uID="+uID);
        let units = [];
        while(jsonText.length>0){
            const {id,name} = jsonText.pop();
            let unit = new Unit(id,name);
            units.push(unit);
        }
        return units;
    }
    static async getWords(unitName){
        let jsonText = await this.answer("http://localhost:8080/dataserver/webresources/units/words/"+unitName);
        let words = [];
        while(jsonText.length>0){
            const {wordGerman,wordEnglisch} = jsonText.pop();
            let word = new Word(wordGerman,wordEnglisch);
            words.push(word);
        }
        return words;
    }
    static async createUnit(user,unitName){
        const {retVal}= await this.answer("http://localhost:8080/dataserver/webresources/units/newUnit?uID="+user.getId()+"&cName="+unitName);
        return retVal;//retVal is unitID
    }
    static async addWordToUnit(cID,word){
        const {retVal}= await this.answer("http://localhost:8080/dataserver/webresources/units/addWord?cID="+cID+"&wE="+word.getWordEnglish()+"&wG="+word.getWordGerman());
        return retVal;
    }
    static async deleteUnit(uID){
        const {retVal} = await this.answer("http://localhost:8080/dataserver/webresources/units/deleteUnit?uID="+uID);
        return retVal;
    }
    static async getAlllUnits(){
        let jsonText = await this.answer("http://localhost:8080/dataserver/webresources/units/allUnits");
        let units = [];
        while(jsonText.length>0){
            const {id,name} = jsonText.pop();
            let unit = new Unit(id,name);
            units.push(unit);
        }
        return units;
    }
    static async deleteWordFromUnit(cID,word){
        const {retVal}= await this.answer("http://localhost:8080/dataserver/webresources/units/deleteWord?uID="+cID+"&wE="+word.getWordEnglish());
        return retVal;
    }

    static async getOtherUnits(uID){
        let jsonText = await this.answer("http://localhost:8080/dataserver/webresources/units/otherUnits?uID="+uID);
        let units = [];
        while(jsonText.length>0){
            const {id,name} = jsonText.pop();
            let unit = new Unit(id,name);
            units.push(unit);
        }
        return units;
    }
    static async changeUnitName(uID,newName){
        const {retVal}= await this.answer("http://localhost:8080/dataserver/webresources/units/changeName?uID="+uID+"&nn="+newName);
        return retVal;
    }
    static async getUnitsByName(username){
        let jsonText = await this.answer("http://localhost:8080/dataserver/webresources/units/byUser?username="+username);
        let units = [];
        while(jsonText.length>0){
            const {id,name} = jsonText.pop();
            let unit = new Unit(id,name);
            units.push(unit);
        }
        return units;  
    }
    static async addUnit(uID,cID){
        const {retVal}= await this.answer("http://localhost:8080/dataserver/webresources/units/addUnit?uID="+uID+"&cID="+cID);
        return retVal; 
    }
    static async getVocabByID(uID){
        let jsonText = await this.answer("http://localhost:8080/dataserver/webresources/units/getVocabByID?uID="+uID);
        let words = [];
        while(jsonText.length>0){
            const {wordGerman,wordEnglisch} = jsonText.pop();
            let word = new Word(wordGerman,wordEnglisch);
            words.push(word);
        }
        return words;
    }
    static async getUnitName(uID){
        const {name} = await this.answer("http://localhost:8080/dataserver/webresources/units/getUnitName?uID="+uID);
        return name;
    }
    static async getUsers(){
        const jsonText = await this.answer("http://localhost:8080/dataserver/webresources/users/users");
        let users = [];
        while(jsonText.length>0){
            const {id,Firstname,Lastname,Email,Birthdate,Username,Password,Institution} = jsonText.pop();
            let user = new User(Username,Password);
            user.setId(id);
            user.setFirstname(Firstname);
            user.setLastname(Lastname);
            user.setEmail(Email);
            user.setBirthdate(Birthdate);
            user.setInstitution(Institution);
            users.push(user);
        }
        return users;
    }
    static async getDefaultTheme(){
        const {id,name,headerBackgroundColor,headerFontColor,menuBackgroundColor,menuFontColor,menuNavigationFontColor,cardAreaBackgroundColor,menuNavigationColor,cardBackgroundColor,cardHeadLineColor,paragraphFontColor} = await this.answer("http://localhost:8080/dataserver/webresources/themes/defaultTheme");
        let theme = new Theme(id,name,'#'+headerBackgroundColor,'#'+menuFontColor,'#'+headerFontColor,'#'+cardAreaBackgroundColor,'#'+menuNavigationColor,'#'+menuBackgroundColor,'#'+menuNavigationFontColor,'#'+cardBackgroundColor,'#'+cardHeadLineColor,'#'+paragraphFontColor);
        return theme;      
    }
    static async getDarkTheme(){
        const {id,name,headerBackgroundColor,headerFontColor,menuBackgroundColor,menuFontColor,menuNavigationFontColor,cardAreaBackgroundColor,menuNavigationColor,cardBackgroundColor,cardHeadLineColor,paragraphFontColor} = await this.answer("http://localhost:8080/dataserver/webresources/themes/darkTheme");
        let theme = new Theme(id,name,'#'+headerBackgroundColor,'#'+menuFontColor,'#'+headerFontColor,'#'+cardAreaBackgroundColor,'#'+menuNavigationColor,'#'+menuBackgroundColor,'#'+menuNavigationFontColor,'#'+cardBackgroundColor,'#'+cardHeadLineColor,'#'+paragraphFontColor);
        return theme;      
    }
    static async getUnitOwner(uID){
        const {id,Firstname,Lastname,Email,Birthdate,Username,Password,Institution} = await this.answer("http://localhost:8080/dataserver/webresources/units/unitOwner?uID="+uID);
        if(id ==-1){
            return null;
        }
        let user = new User(Username,Password);
        user.setId(id);
        user.setFirstname(Firstname);
        user.setLastname(Lastname);
        user.setEmail(Email);
        user.setBirthdate(Birthdate);
        user.setInstitution(Institution);
        return user;
    }
    static async saveResult(userID,result){
        const {retVal} = await this.answer("http://localhost:8080/dataserver/webresources/results/addResult?user="+userID+"&unit="+result.getUnitId()+"&correct="+result.getCorrect()+"&second="+result.getSecondTry()+"&wrong="+result.getWrong()+"&time="+result.getTimeNeeded()+"&mode="+result.getMode()+"&date="+result.getDateTime());
        return retVal;
    }
    static async getResults(userID){
        let jsonText = await this.answer("http://localhost:8080/dataserver/webresources/results/getResults&user="+userID);
        let results = [];
        while(jsonText.length>0){
            const {id,unit,correct,second,wrong,time,mode,date} = jsonText.pop();
            let result = new Result(id,unit,correct,second,wrong,time,mode);
            result.setDateTime(date);
            results.push(result);
        }
        return results;
    }
}