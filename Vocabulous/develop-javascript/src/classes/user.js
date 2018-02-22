export default class User{
    constructor(username, password){
        this.username = username;
        this.password = password;
    }
    setId(id){
        this.id = id;
    }
    setUsername(username){
        this.username = username;
    }
    setPassword(password){
        this.password = password;
    }
    getUsername(){
        return this.username;
    }
    getPassword(){
        return this.password;
    }
    setFirstname(firstname){
        this.firstname = firstname;
    }
    setLastname(lastname){
        this.lastname = lastname;
    }
    setEmail(email){
        this.email = email;
    }
    setBirthdate(birthdate){
        this.birthdate = birthdate;
    }
    setInstitution(institution){
        this.institution = institution;
    }
    getId(){
        return this.id;
    }
    getFirstname(){
        return this.firstname;
    }
    getLastname(){
        return this.lastname;
    }
    getEmail(){
        return this.email;
    }
    getBirthdate(){
        return this.birthdate;
    }
    getInstitution(){
        return this.institution;
    }
}