/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package at.htlleonding.maximilianwahl.user.boundary;

import javax.json.Json;
import javax.json.JsonObject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.QueryParam;
import lib.Model.Repository;
import lib.Model.User;
import lib.utils.MailSender;

/**
 *
 * @author mexxw
 */
@Path("mail")
public class MailResources {
    
    @Path("sendMail")
    @GET
    
    public JsonObject sendMail(@QueryParam("id") int id ,
		@QueryParam("type") String type){
        User u = Repository.getInstance().getUserByID(id);
        if(u != null){
            int val = MailSender.sendEmail(u,type);
            return Json.createObjectBuilder()
                .add("retVal", val)               
                .build();
        }
        //TODO connect with database
        else{
          return Json.createObjectBuilder()
                .add("retVal", 1)               
                .build();
        }
        
        //TODO - Save Login
    }
}
