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
@Path("themes/{tID}")
public class ThemesResource {
    
    @GET
    public JsonObject themes(@PathParam("tID") int id){
        System.out.println(id);
        //TODO connect with database
        return Json.createObjectBuilder()
                .add("name", "Dark")
                .add("headerBackgroundColor","#ffffff")
                .add("headerFontColor", "#ffffff")
                .add("menuBackgroundColor","#ffffff")
                .add("menuFontColor", "#ffffff")
                .add("menuNavigationColor","#ffffff")
                .add("cardAreaBackgroundColor", "#ffffff")
                .build();
    }
}
