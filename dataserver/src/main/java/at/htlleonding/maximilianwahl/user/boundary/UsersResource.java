/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package at.htlleonding.maximilianwahl.user.boundary;

import javax.json.Json;
import javax.json.JsonArray;
import javax.json.JsonArrayBuilder;
import javax.json.JsonObject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.QueryParam;
import lib.Model.*;

/**
 *
 * @author mexxw
 */
@Path("users")
public class UsersResource {
    
    @Path("login")
    @GET
    public JsonObject login(@QueryParam("user") String user,
		@QueryParam("pw") String pw){
        User u = Repository.getInstance().login(user, pw);
        if(u != null){
            return u.jsonify();
        }
        //TODO connect with database
        else{
          return Json.createObjectBuilder()
                .add("id", -1)
                .add("Firstname", "")
                .add("Lastname","")
                .add("Email", "")
                .add("Birthdate", "")
                .add("Username","")
                .add("Password", "")
                .add("Institution", "")
                .build();  
        }
        
        //TODO - Save Login
    }
    @Path("user")
    
    @GET
    public JsonObject user(@QueryParam("user") String user){
        User u = Repository.getInstance().user(user);
        if(u != null){
            return u.jsonify();
        }
        //TODO connect with database
        else{
          return Json.createObjectBuilder()
                .add("id", -1)
                .add("Firstname", "")
                .add("Lastname","")
                .add("Email", "")
                .add("Birthdate", "")
                .add("Username","")
                .add("Password", "")
                .add("Institution", "")
                .build();  
        }
    }
    
    @Path("setStartingTheme")
    @GET
    public JsonObject setStartingTheme(@QueryParam("user") int uID,@QueryParam("theme") int themeID){
        int val = Repository.getInstance().setStartingTheme(uID, themeID);
        return Json.createObjectBuilder()
                .add("retVal", val)               
                .build();
    }
    
    @Path("changeUser")
    @GET
    public JsonObject changeUser(@QueryParam("id") int id,@QueryParam("user") String user,@QueryParam("pw") String pw,@QueryParam("fN") String fN,@QueryParam("lN") String lN,@QueryParam("Email") String email,@QueryParam("bD") String birthDate,@QueryParam("inst") String inst){
        int val = Repository.getInstance().changeUser(id, user, pw, fN, lN, email, birthDate, inst);
        return Json.createObjectBuilder()
                .add("retVal", val)               
                .build();
    }
    @Path("users")
    
    @GET
    public JsonArray users(){
        JsonArrayBuilder ret = Json.createArrayBuilder();
        Repository.getInstance().getUsers().forEach(it->ret.add(it.jsonify()));
        return ret.build();
    }
    @Path("register")
    @GET
    
    public JsonObject register(@QueryParam("user")String username){
        int val = Repository.getInstance().register(username);
        return Json.createObjectBuilder()
                .add("retVal", val)               
                .build();
    }
}
    
