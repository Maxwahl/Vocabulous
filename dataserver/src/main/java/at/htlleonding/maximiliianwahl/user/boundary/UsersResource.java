/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package at.htlleonding.maximiliianwahl.user.boundary;

import javax.json.Json;
import javax.json.JsonObject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;

/**
 *
 * @author mexxw
 */
@Path("users/{id}")
public class UsersResource {
    
    @GET
    public JsonObject users(@PathParam("id") int id){
        System.out.println(id);
        //TODO connect with database
        return Json.createObjectBuilder()
                .add("Firstname", "Max")
                .add("Lastname","Mustermann")
                .add("Email", "max.mustermann@gmx.com")
                .add("Birthdate", "1.1.1111")
                .add("Username","admin")
                .add("Password", "admin")
                .build();
    }
}
    