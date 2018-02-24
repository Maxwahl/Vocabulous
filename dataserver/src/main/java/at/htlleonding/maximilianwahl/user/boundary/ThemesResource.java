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
import javax.ws.rs.QueryParam;

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
                .add("id",1)
                .add("name", "Dark")
                .add("headerBackgroundColor","#ffffff")
                .add("headerFontColor", "#ffffff")
                .add("menuBackgroundColor","#ffffff")
                .add("menuFontColor", "#ffffff")
                .add("menuNavigationFontColor","#ffffff")
                .add("cardAreaBackgroundColor", "#ffffff")                
                .add("menuNavigationColor","#ffffff")
                .build();
    }
    
    @Path("userThemes/{uID}")
    @GET
    public JsonArray userThemes(@PathParam("uID") int id){
        System.out.println(id);
        //TODO connect with database
        JsonArrayBuilder ret = Json.createArrayBuilder();
        
        ret.add(Json.createObjectBuilder()
                .add("id",2)
                .add("name", "custom1")
                .add("headerBackgroundColor","#012345")
                .add("headerFontColor", "#6789AB")
                .add("menuBackgroundColor","#CDEF01")
                .add("menuFontColor", "#234567")
                .add("menuNavigationFontColor","#89ABCD")
                .add("cardAreaBackgroundColor", "#EF0123")
                .add("menuNavigationColor","#456789")
                .build());
        ret.add(Json.createObjectBuilder()
                .add("id",3)
                .add("name", "custom2")
                .add("headerBackgroundColor","#f5ffff")
                .add("headerFontColor", "#ffff8f")
                .add("menuBackgroundColor","#f0ffff")
                .add("menuFontColor", "#f21fff")
                .add("menuNavigationFontColor","#fa7fff")
                .add("cardAreaBackgroundColor", "#ab5fff")
                .add("menuNavigationColor","#24fde9")
                .build());
        return ret.build();
    }
    @Path("deleteTheme")
    @GET
    public JsonObject deleteTheme(@QueryParam("theme") int themeID){
         System.out.println(themeID);
        //connect to DB ;0 is Ok 1 is not ok
        return Json.createObjectBuilder()
                .add("retVal", "0")               
                .build();
    }
    @Path("newTheme")
    @GET
    public JsonObject newTheme(@QueryParam("owner") int owner,@QueryParam("name") String name,@QueryParam("hBG") String hBG,@QueryParam("mFC") String mFC,@QueryParam("hFC") String hFC,@QueryParam("cABG") String cABG,@QueryParam("mNC") String mNC,@QueryParam("mBG") String mBG,@QueryParam("mNF") String mNF){
        //connect to DB ;0 is Ok 1 is not ok
        return Json.createObjectBuilder()
                .add("retVal", "0")               
                .build();
    }
    @Path("changeTheme")
    @GET
    public JsonObject changeTheme(@QueryParam("theme") int id,@QueryParam("name") String name,@QueryParam("hBG") String hBG,@QueryParam("mFC") String mFC,@QueryParam("hFC") String hFC,@QueryParam("cABG") String cABG,@QueryParam("mNC") String mNC,@QueryParam("mBG") String mBG,@QueryParam("mNF") String mNF){
        //connect to DB ;0 is Ok 1 is not ok
        return Json.createObjectBuilder()
                .add("retVal", "0")               
                .build();
    }
    
    
}
