/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package at.htlleonding.maximilianwahl.user.boundary;

import javax.json.Json;
import javax.json.JsonArray;
import javax.json.JsonArrayBuilder;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;

/**
 *
 * @author mexxw
 */
@Path("units")
public class UnitResources {
    @Path("units")
    @GET
    public JsonArray getUnits(){
        JsonArrayBuilder ret = Json.createArrayBuilder();
        ret.add(Json.createObjectBuilder()
                .add("name", "testA")              
                .build());
        ret.add(Json.createObjectBuilder()
                .add("name", "testB")              
                .build());
        return ret.build();
    }
    @Path("words/{uID}")
    @GET
    public JsonArray getVocab(@PathParam("uID") int unit){
       JsonArrayBuilder ret = Json.createArrayBuilder();
        ret.add(Json.createObjectBuilder()
                .add("wordGerman", "Haus")
                .add("wordEnglisch", "house")
                .build());
        ret.add(Json.createObjectBuilder()
                .add("wordGerman", "Maus")
                .add("wordEnglisch", "mouse")        
                .build());
        return ret.build(); 
    }
}
