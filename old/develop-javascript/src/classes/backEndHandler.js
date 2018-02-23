import User from "./user.js";
import Theme from "./theme.js";


export default class BackEndHandler{
    constructor(){}

    async fetchFromServer(get){
        return await fetch(get).then(response => response.json);
    }

    static login(username,password){
        const {id,Firstname,Lastname,Email,Birthdate,Username,Password} = fetchFromServer("http://localhost:8080/dataserver/webresources/users/login?user="+username+"&pw="+password);
        if(id ==-1){
            return null;
        }
        user = new User(Username,Password);
        user.setId(id);
        user.setFirstname(Firstname);
        user.setLastname(Lastname);
        user.setEmail(Email);
        user.setBirthdate(Birthdate);
        return user;
    }

    static user(username){
        const {id,Firstname,Lastname,Email,Birthdate,Username,Password} = fetchFromServer("http://localhost:8080/dataserver/webresources/users/user?user="+username);
        if(id ==-1){
            return null;
        }
        user = new User(Username,Password);
        user.setId(id);
        user.setFirstname(Firstname);
        user.setLastname(Lastname);
        user.setEmail(Email);
        user.setBirthdate(Birthdate);
        return user;
    }
    static startingTheme(uId){
        const {name,headerBackgroundColor,headerFontColor,menuBackgroundColor,menuFontColor,menuNavigationFontColor,cardAreaBackgroundColor} = fetchFromServer("http://localhost:8080/dataserver/webresources/themes/startingTheme/"+uId);
        theme = new Theme(name,headerBackgroundColor,menuFontColor,headerFontColor,cardAreaBackgroundColor,menuNavigationColor,menuBackgroundColor,menuNavigationColor);
        return theme;      
    }
    static userThemes(uId){
        let jsonText = fetchFromServer("http://localhost:8080/dataserver/webresources/themes/userThemes/"+uId);
        let themes = [];
        var newArr = JSON.parse(jsonText);
        while(newArr.length>0){
            const {name,headerBackgroundColor,headerFontColor,menuBackgroundColor,menuFontColor,menuNavigationFontColor,cardAreaBackgroundColor} = newArr.pop();
            theme = new Theme(name,headerBackgroundColor,menuFontColor,headerFontColor,cardAreaBackgroundColor,menuNavigationColor,menuBackgroundColor,menuNavigationColor);
            themes.push(theme);
        }

        return themes;
    }