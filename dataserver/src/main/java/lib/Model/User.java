/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package lib.Model;

import javax.json.Json;
import javax.json.JsonObject;

/**
 *
 * @author mexxw
 */
public class User {
    private int id;
    private String username;
    private String password;
    private String firstName;
    private String lastName;
    private String email;
    private String institution;
    private String birthdate;
    private int startingTheme;

    public int getStartingTheme() {
        return startingTheme;
    }

    public void setStartingTheme(int startingTheme) {
        this.startingTheme = startingTheme;
    }

    public User(int id, String username, String password, String firstName, String lastName, String email, String institution, String birthdate, int startingTheme) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.institution = institution;
        this.birthdate = birthdate;
        this.startingTheme = startingTheme;
    }

    
    
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getInstitution() {
        return institution;
    }

    public void setInstitution(String institution) {
        this.institution = institution;
    }

    public String getBirthdate() {
        return birthdate;
    }

    public void setBirthdate(String birthdate) {
        this.birthdate = birthdate;
    }
    
    public JsonObject jsonify(){
        return Json.createObjectBuilder()
                .add("id", this.getId())
                .add("Firstname", this.getFirstName())
                .add("Lastname",this.getFirstName())
                .add("Email",this.getEmail())
                .add("Birthdate", this.getBirthdate())
                .add("Username",this.getUsername())
                .add("Password",this.getPassword())
                .add("institution", this.getInstitution())
                .build();
    }
}
