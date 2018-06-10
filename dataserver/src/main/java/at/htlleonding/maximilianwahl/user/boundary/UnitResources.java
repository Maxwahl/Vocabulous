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
        Chapter c = Repository.getInstance().getChapterByID(cID);
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
       if(c!=null){
                  return c.jsonifyVocab();
       }
       return Json.createArrayBuilder().build();
    }
    @Path("deleteUnit")
    @GET
    public JsonObject deleteUnit(@QueryParam("uID") int uID){
        int val = Repository.getInstance().deleteUnit(uID);
        return Json.createObjectBuilder()
                .add("retVal", val)               
                .build();   
    }
    @Path("allUnits")
    @GET
    public JsonArray getAllUnits(){
        JsonArrayBuilder ret = Json.createArrayBuilder();
        for(Chapter c:Repository.getInstance().getChapters()){
            ret.add(c.jsonifyUnit());
        }
        return ret.build();
    }
    
    @Path("deleteWord")
    @GET
    public JsonObject deleteWord(@QueryParam("uID") int uID,@QueryParam("wE")String wE){
        int val = Repository.getInstance().deleteWord(uID,wE);
        return Json.createObjectBuilder()
                .add("retVal", val)               
                .build();   
    }
    @Path("otherUnits")
    @GET
    public JsonArray getOtherUnits(@QueryParam("uID")int uID){
        JsonArrayBuilder ret = Json.createArrayBuilder();
        for(Chapter c:Repository.getInstance().getOtherUnits(uID)){
            ret.add(c.jsonifyUnit());
        }
        return ret.build();
    }
    @Path("changeName")
    @GET
    public JsonObject changeName(@QueryParam("uID") int uID,@QueryParam("nn")String nn){
        int val = Repository.getInstance().changeName(uID,nn);
        return Json.createObjectBuilder()
                .add("retVal", val)               
                .build();   
    }
    @Path("byUser")
    @GET
    public JsonArray getAllUnits(@QueryParam("username")String username){
        JsonArrayBuilder ret = Json.createArrayBuilder();
        for(Chapter c:Repository.getInstance().getUnitsByUser(username)){
            ret.add(c.jsonifyUnit());
        }
        return ret.build();
    }
    @Path("addUnit")
    @GET
    public JsonObject addUnit(@QueryParam("uID") int uID,@QueryParam("cID")int cID){
        int val = Repository.getInstance().copyUnit(uID,cID);
        return Json.createObjectBuilder()
                .add("retVal", val)               
                .build();   
    }
    @Path("getUnitByID")
    @GET
    public JsonObject getUnitByID(@QueryParam("uID") int uID){
        Chapter c = Repository.getInstance().getChapterByID(uID);
        if(c!= null){
            return c.jsonifyUnit();
        }
        else{
            return Json.createObjectBuilder()
                .add("id",-1)
                .add("name","")              
                .build();
        }
    }
    @Path("getUnitName")
    @GET
    public JsonObject getUnitName(@QueryParam("uID") int uID){
        String name = Repository.getInstance().getUnitName(uID);
        return Json.createObjectBuilder()        
            .add("name",name)             
            .build();
        
    }
}
