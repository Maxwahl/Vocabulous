import User from "./user.js";
import Theme from "./theme.js";


export default class BackEndHandler{

    static async fetchFromServer(get){
        return await fetch(get).then(response => response.json());
    }

    static answer(get){
        return new Promise((resolve, reject) => { 
            resolve(BackEndHandler.fetchFromServer(get));
        });
    }

    static async login(username,password){
        const {id,Firstname,Lastname,Email,Birthdate,Username,Password} = await this.answer("http://localhost:8080/dataserver/webresources/users/login?user="+username+"&pw="+password);
        if(id ==-1){
            return null;
        }
        let user = new User(Username,Password);
        user.setId(id);
        user.setFirstname(Firstname);
        user.setLastname(Lastname);
        user.setEmail(Email);
        user.setBirthdate(Birthdate);
        return user;
    }

    static async user(username){
        const {id,Firstname,Lastname,Email,Birthdate,Username,Password} = await this.answer("http://localhost:8080/dataserver/webresources/users/user?user="+username);
        if(id ==-1){
            return null;
        }
        let user = new User(Username,Password);
        user.setId(id);
        user.setFirstname(Firstname);
        user.setLastname(Lastname);
        user.setEmail(Email);
        user.setBirthdate(Birthdate);
        return user;
    }
    static async startingTheme(uId){
        const {name,headerBackgroundColor,headerFontColor,menuBackgroundColor,menuFontColor,menuNavigationFontColor,cardAreaBackgroundColor} = await this.answer("http://localhost:8080/dataserver/webresources/themes/startingTheme/"+uId);
        theme = new Theme(name,headerBackgroundColor,menuFontColor,headerFontColor,cardAreaBackgroundColor,menuNavigationColor,menuBackgroundColor,menuNavigationColor);
        return theme;      
    }
    static async userThemes(uId){
        let jsonText = await this.answer("http://localhost:8080/dataserver/webresources/themes/userThemes/"+uId);
        let themes = [];
        var newArr = JSON.parse(jsonText);
        while(newArr.length>0){
            const {name,headerBackgroundColor,headerFontColor,menuBackgroundColor,menuFontColor,menuNavigationFontColor,cardAreaBackgroundColor} = newArr.pop();
            theme = new Theme(name,headerBackgroundColor,menuFontColor,headerFontColor,cardAreaBackgroundColor,menuNavigationColor,menuBackgroundColor,menuNavigationColor);
            themes.push(theme);
        }
        return themes;
    }
}