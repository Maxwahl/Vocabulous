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
import javax.ws.rs.QueryParam;
import lib.Model.Repository;
import lib.Model.Result;

/**
 *
 * @author mexxw
 */
@Path("results")
public class ResultResource {
    @Path("addResult")
    @GET
    public JsonObject addResult(@QueryParam("user") int user,@QueryParam("unit") int unit,@QueryParam("correct") int correct,@QueryParam("second") int second,@QueryParam("wrong") int wrong,@QueryParam("time") double time,@QueryParam("mode") int mode,@QueryParam("date") String date){
        int retVal = Repository.getInstance().addResult(user,unit,correct,second,wrong,time,mode,date);
        return Json.createObjectBuilder()
                .add("retVal", retVal)               
                .build();
    }
    @Path("getResults")
    @GET
    public JsonArray getResult(@QueryParam("user") int user){
        List<Result> result = Repository.getInstance().getResults(user);
        JsonArrayBuilder ret = Json.createArrayBuilder();
        for(Result r:result){
            ret.add(r.jsonify());
        }
        return ret.build();
    }
}
