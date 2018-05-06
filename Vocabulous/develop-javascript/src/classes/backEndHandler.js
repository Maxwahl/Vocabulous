import User from "./user.js";
import Theme from "./theme.js";
import Unit from "./unit.js";
import Word from "./word.js";

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
}