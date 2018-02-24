/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package at.htlleonding.maximilianwahl.user.boundary;

import java.math.BigDecimal;
import javax.json.Json;
import javax.json.JsonObject;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.QueryParam;

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
        System.out.println(user+pw);
        if(user.equals("admin") && pw.equals("admin")){
             return Json.createObjectBuilder()
                .add("id", 1)
                .add("Firstname", "Max")
                .add("Lastname","Mustermann")
                .add("Email", "max.mustermann@gmx.com")
                .add("Birthdate", "1.1.1111")
                .add("Username","admin")
                .add("Password", "admin")
                .add("Institution", "bla")
                .build();
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
                .add("institution", "")
                .build();  
        }
    }
    @Path("user")
    @GET
    public JsonObject user(@QueryParam("user") String user){
        System.out.println(user);
        if(user.equals("admin")){
             return Json.createObjectBuilder()
                .add("id", 1)
                .add("Firstname", "Max")
                .add("Lastname","Mustermann")
                .add("Email", "max.mustermann@gmx.com")
                .add("Birthdate", "1.1.1111")
                .add("Username","admin")
                .add("Password", "admin")
                .add("institution", "bla")
                .build();
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
                .add("institution", "")
                .build();  
        }
    }
    
    @Path("startingTheme")
    @GET
    public JsonObject setStartingTheme(@QueryParam("user") int uID,@QueryParam("theme") int themeID){
        System.out.println(uID+" "+themeID);
        //connect to DB ;0 is Ok 1 is not ok
        return Json.createObjectBuilder()
                .add("retVal", "0")               
                .build();
    }
    
    @Path("changeUser")
    @GET
    public JsonObject changeUser(@QueryParam("id") int id,@QueryParam("user") String user,@QueryParam("pw") String pw,@QueryParam("fN") String fN,@QueryParam("lN") String lN,@QueryParam("Email") String email,@QueryParam("bD") String birthDate,@QueryParam("inst") String inst){
        //connect to DB ;0 is Ok 1 is not ok
        return Json.createObjectBuilder()
                .add("retVal", "0")               
                .build();
    }
}
    
