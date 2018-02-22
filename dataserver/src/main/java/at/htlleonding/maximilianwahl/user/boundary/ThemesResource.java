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
import javax.ws.rs.PathParam;

/**
 *
 * @author mexxw
 */
@Path("themes")
public class ThemesResource {
    
    @Path("startingTheme/{uID}")
    @GET
    public JsonObject startingTheme(@PathParam("uID") int id){
        System.out.println(id);
        //TODO connect with database
        return Json.createObjectBuilder()
                .add("name", "Dark")
                .add("headerBackgroundColor","#ffffff")
                .add("headerFontColor", "#ffffff")
                .add("menuBackgroundColor","#ffffff")
                .add("menuFontColor", "#ffffff")
                .add("menuNavigationFontColor","#ffffff")
                .add("cardAreaBackgroundColor", "#ffffff")
                .build();
    }
    
    @Path("userThemes/{uID}")
    @GET
    public JsonArray userThemes(@PathParam("uID") int id){
        System.out.println(id);
        //TODO connect with database
        JsonArrayBuilder ret = Json.createArrayBuilder();
        
        ret.add(Json.createObjectBuilder()
                .add("name", "Dark")
                .add("headerBackgroundColor","#ffffff")
                .add("headerFontColor", "#ffffff")
                .add("menuBackgroundColor","#ffffff")
                .add("menuFontColor", "#ffffff")
                .add("menuNavigationFontColor","#ffffff")
                .add("cardAreaBackgroundColor", "#ffffff")
                .build());
        ret.add(Json.createObjectBuilder()
                .add("name", "custom")
                .add("headerBackgroundColor","#f5ffff")
                .add("headerFontColor", "#ffff8f")
                .add("menuBackgroundColor","#f0ffff")
                .add("menuFontColor", "#f21fff")
                .add("menuNavigationFontColor","#fa7fff")
                .add("cardAreaBackgroundColor", "#ab5fff")
                .build());
        return ret.build();
    }
}
