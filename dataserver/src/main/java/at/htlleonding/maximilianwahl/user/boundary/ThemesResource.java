/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package at.htlleonding.maximilianwahl.user.boundary;

import java.util.List;
import javax.json.Json;
import javax.json.JsonArray;
import javax.json.JsonArrayBuilder;
import javax.json.JsonObject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.QueryParam;
import lib.Model.Repository;
import lib.Model.Theme;
import lib.Model.User;

/**
 *
 * @author mexxw
 */
@Path("themes")
public class ThemesResource {
    
    @Path("startingTheme/{uID}")
    @GET
    public JsonObject startingTheme(@PathParam("uID") int id){
        Theme theme  = Repository.getInstance().getStartingTheme(id);
        if(theme != null){
            return theme.jsonify();
        }
        return Repository.getInstance().getDefaultTheme().jsonify();
    }
    
    @Path("userThemes/{uID}")
    @GET
    public JsonArray userThemes(@PathParam("uID") int id){
        List<Theme> themes = Repository.getInstance().getUserThemes(id);
        JsonArrayBuilder ret = Json.createArrayBuilder();
        themes.forEach((t) -> {
            ret.add(t.jsonify());
        });
        return ret.build();
    }
    @Path("deleteTheme")
    @GET
    public JsonObject deleteTheme(@QueryParam("theme") int themeID){
        int val =Repository.getInstance().deleteTheme(themeID);
        return Json.createObjectBuilder()
                .add("retVal", val)               
                .build();
    }
    @Path("newTheme")
    @GET
    public JsonObject newTheme(@QueryParam("owner") int owner,@QueryParam("name") String name,@QueryParam("hBG") String hBG,@QueryParam("mFC") String mFC,@QueryParam("hFC") String hFC,@QueryParam("cABG") String cABG,@QueryParam("mNC") String mNC,@QueryParam("mBG") String mBG,@QueryParam("mNF") String mNF,@QueryParam("cBG") String cBG,@QueryParam("cHL") String cHL,@QueryParam("pF") String pF){
        int val = Repository.getInstance().addTheme(owner,name,hBG,mFC,hFC,cABG,mNC,mBG,mNF,cBG,cHL,pF);
        return Json.createObjectBuilder()
                .add("retVal", val)               
                .build();
    }
    @Path("changeTheme")
    @GET
    public JsonObject changeTheme(@QueryParam("theme") int id,@QueryParam("name") String name,@QueryParam("hBG") String hBG,@QueryParam("mFC") String mFC,@QueryParam("hFC") String hFC,@QueryParam("cABG") String cABG,@QueryParam("mNC") String mNC,@QueryParam("mBG") String mBG,@QueryParam("mNF") String mNF,@QueryParam("cBG") String cBG,@QueryParam("cHL") String cHL,@QueryParam("pF") String pF){
        int val = Repository.getInstance().changeTheme(id,name,hBG,mFC,hFC,cABG,mNC,mBG,mNF,cBG,cHL,pF);
        return Json.createObjectBuilder()
                .add("retVal", val)               
                .build();
    }
    @Path("defaultTheme")
    @GET
    public JsonObject getDefaultTheme(){
        return Repository.getInstance().getDefaultTheme().jsonify();
    }
    
    @Path("darkTheme")
    @GET
    public JsonObject getDarkTheme(){
        return Repository.getInstance().getDarkTheme().jsonify();
    }
    @Path("getThemeOwner")
    @GET
    public JsonObject getThemeOwner(@QueryParam("theme")int themeID){
        User u = Repository.getInstance().getThemeOwner(themeID);
        if(u != null){
            return Json.createObjectBuilder()
                .add("owner", u.getId())               
                .build();
        }
        return Json.createObjectBuilder()
                .add("owner", -1)               
                .build();
    }
    
}