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
import lib.Model.Chapter;
import lib.Model.Repository;

/**
 *
 * @author mexxw
 */
@Path("units")
public class UnitResources {
    @Path("units")
    @GET
    public JsonArray getUnits(@QueryParam("uID")int uID){
        List<Chapter> chapters = Repository.getInstance().getChapter(uID);
        JsonArrayBuilder ret = Json.createArrayBuilder();
        for(Chapter c:chapters){
            ret.add(c.jsonifyUnit());
        }
        return ret.build();
    }
    
    @Path("newUnit")
    @GET
    public JsonObject createUnit(@QueryParam("uID") int uID,@QueryParam("cName") String cName){
        int val = Repository.getInstance().addChapter(uID,cName);
        return Json.createObjectBuilder()
                .add("retVal", val)               
                .build();   
    }
    
    @Path("addWord")
    @GET
    public JsonObject addWord(@QueryParam("cID") int cID,@QueryParam("wE") String wE,@QueryParam("wG") String wG){
        Chapter c = Repository.getInstance().getChapter(cID).stream().filter((it)-> it.getId()==cID).findFirst().get();
        c.addWord(wE, wG);
        int val = 0;
         return Json.createObjectBuilder()
                .add("retVal", val)               
                .build();      
    }
    
    @Path("words/{uName}")
    @GET
    public JsonArray getVocab(@PathParam("uName") String unit){
       Chapter c = Repository.getInstance().getChapter(unit);
       return c.jsonifyVocab();

    }
}
