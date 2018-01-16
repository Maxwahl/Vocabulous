package com.test;

import javax.ws.rs.*;

@Path("/sayHelloTo")
public class HelloWorld {

    @GET
    @Path("/{name}")
    public String sayHelloWorld(@PathParam("name") String name) {
        return "Hello " + name;
    }

}
