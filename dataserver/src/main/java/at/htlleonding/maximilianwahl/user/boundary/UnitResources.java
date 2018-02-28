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
                .add("name", "Basic Nouns")              
                .build());
        ret.add(Json.createObjectBuilder()
                .add("name", "Basic Verbs")              
                .build());
        return ret.build();
    }
    @Path("words/{uName}")
    @GET
    public JsonArray getVocab(@PathParam("uName") String unit){
       JsonArrayBuilder ret = Json.createArrayBuilder();
       if(unit.equals("Basic Nouns")){
        ret.add(Json.createObjectBuilder()
                .add("wordGerman", "Haus")
                .add("wordEnglisch", "house")
                .build());
        ret.add(Json.createObjectBuilder()
                .add("wordGerman", "Auto")
                .add("wordEnglisch", "car")        
                .build());
        ret.add(Json.createObjectBuilder()
                .add("wordGerman", "Flugzeug")
                .add("wordEnglisch", "plane")
                .build());
        ret.add(Json.createObjectBuilder()
                .add("wordGerman", "Zug")
                .add("wordEnglisch", "train")        
                .build());
        ret.add(Json.createObjectBuilder()
                .add("wordGerman", "Hund")
                .add("wordEnglisch", "dog")
                .build());
        ret.add(Json.createObjectBuilder()
                .add("wordGerman", "Katze")
                .add("wordEnglisch", "cat")        
                .build());
        ret.add(Json.createObjectBuilder()
                .add("wordGerman", "Straße")
                .add("wordEnglisch", "street")
                .build());
        ret.add(Json.createObjectBuilder()
                .add("wordGerman", "Stadt")
                .add("wordEnglisch", "city")        
                .build());
        ret.add(Json.createObjectBuilder()
                .add("wordGerman", "Kuh")
                .add("wordEnglisch", "cow")
                .build());
        ret.add(Json.createObjectBuilder()
                .add("wordGerman", "Tür")
                .add("wordEnglisch", "door")        
                .build());
        ret.add(Json.createObjectBuilder()
                .add("wordGerman", "Lampe")
                .add("wordEnglisch", "lamp")
                .build());
        ret.add(Json.createObjectBuilder()
                .add("wordGerman", "Fernseher")
                .add("wordEnglisch", "television")        
                .build());
        ret.add(Json.createObjectBuilder()
                .add("wordGerman", "Musik")
                .add("wordEnglisch", "music")
                .build());
        ret.add(Json.createObjectBuilder()
                .add("wordGerman", "Stiege")
                .add("wordEnglisch", "stairway")        
                .build());
        ret.add(Json.createObjectBuilder()
                .add("wordGerman", "Gabel")
                .add("wordEnglisch", "fork")
                .build());
        ret.add(Json.createObjectBuilder()
                .add("wordGerman", "Messer")
                .add("wordEnglisch", "knife")        
                .build());
        ret.add(Json.createObjectBuilder()
                .add("wordGerman", "Löffel")
                .add("wordEnglisch", "spoon")
                .build());
        ret.add(Json.createObjectBuilder()
                .add("wordGerman", "Schlüssel")
                .add("wordEnglisch", "key")        
                .build());
        ret.add(Json.createObjectBuilder()
                .add("wordGerman", "U-Bahn")
                .add("wordEnglisch", "underground")
                .build());
        ret.add(Json.createObjectBuilder()
                .add("wordGerman", "Schild")
                .add("wordEnglisch", "sign")        
                .build());
        ret.add(Json.createObjectBuilder()
                .add("wordGerman", "Eiscreme")
                .add("wordEnglisch", "ice cream")
                .build());
        ret.add(Json.createObjectBuilder()
                .add("wordGerman", "Stadion")
                .add("wordEnglisch", "stadium")        
                .build());
        ret.add(Json.createObjectBuilder()
                .add("wordGerman", "Sessel")
                .add("wordEnglisch", "seat")
                .build());
        ret.add(Json.createObjectBuilder()
                .add("wordGerman", "Telefon")
                .add("wordEnglisch", "telephone")        
                .build());
        ret.add(Json.createObjectBuilder()
                .add("wordGerman", "Spiel")
                .add("wordEnglisch", "game")
                .build());
        ret.add(Json.createObjectBuilder()
                .add("wordGerman", "Apfel")
                .add("wordEnglisch", "apple")        
                .build());
        ret.add(Json.createObjectBuilder()
                .add("wordGerman", "Eisen")
                .add("wordEnglisch", "iron")
                .build());
        ret.add(Json.createObjectBuilder()
                .add("wordGerman", "Hose")
                .add("wordEnglisch", "trousers")        
                .build());
        ret.add(Json.createObjectBuilder()
                .add("wordGerman", "Schuhe")
                .add("wordEnglisch", "shoes")
                .build());
        ret.add(Json.createObjectBuilder()
                .add("wordGerman", "T-Shirt")
                .add("wordEnglisch", "t-shirt")        
                .build());
       }
       else if(unit.equals("Basic Verbs")){
            ret.add(Json.createObjectBuilder()
                .add("wordGerman", "machen")
                .add("wordEnglisch", "make")
                .build());
        ret.add(Json.createObjectBuilder()
                .add("wordGerman", "tun")
                .add("wordEnglisch", "do")        
                .build());
        ret.add(Json.createObjectBuilder()
                .add("wordGerman", "gehen")
                .add("wordEnglisch", "go")
                .build());
        ret.add(Json.createObjectBuilder()
                .add("wordGerman", "essen")
                .add("wordEnglisch", "eat")        
                .build());
        ret.add(Json.createObjectBuilder()
                .add("wordGerman", "schlafen")
                .add("wordEnglisch", "sleep")
                .build());
        ret.add(Json.createObjectBuilder()
                .add("wordGerman", "trinken")
                .add("wordEnglisch", "drink")        
                .build());
        ret.add(Json.createObjectBuilder()
                .add("wordGerman", "fahren")
                .add("wordEnglisch", "drive")
                .build());
        ret.add(Json.createObjectBuilder()
                .add("wordGerman", "sprechen")
                .add("wordEnglisch", "speak")        
                .build());
        ret.add(Json.createObjectBuilder()
                .add("wordGerman", "lesen")
                .add("wordEnglisch", "read")
                .build());
        ret.add(Json.createObjectBuilder()
                .add("wordGerman", "schreiben")
                .add("wordEnglisch", "write")        
                .build());
        ret.add(Json.createObjectBuilder()
                .add("wordGerman", "laufen")
                .add("wordEnglisch", "run")
                .build());
        ret.add(Json.createObjectBuilder()
                .add("wordGerman", "sehen")
                .add("wordEnglisch", "see")        
                .build());
        ret.add(Json.createObjectBuilder()
                .add("wordGerman", "fragen")
                .add("wordEnglisch", "ask")
                .build());
        ret.add(Json.createObjectBuilder()
                .add("wordGerman", "kochen")
                .add("wordEnglisch", "cook")        
                .build());
        ret.add(Json.createObjectBuilder()
                .add("wordGerman", "arbeiten")
                .add("wordEnglisch", "work")
                .build());
        ret.add(Json.createObjectBuilder()
                .add("wordGerman", "putzen")
                .add("wordEnglisch", "clean")        
                .build());
        ret.add(Json.createObjectBuilder()
                .add("wordGerman", "fliegen")
                .add("wordEnglisch", "fly")
                .build());
        ret.add(Json.createObjectBuilder()
                .add("wordGerman", "malen")
                .add("wordEnglisch", "paint")        
                .build());
        ret.add(Json.createObjectBuilder()
                .add("wordGerman", "spielen")
                .add("wordEnglisch", "play")
                .build());
        ret.add(Json.createObjectBuilder()
                .add("wordGerman", "vergessen")
                .add("wordEnglisch", "forget")        
                .build());
        ret.add(Json.createObjectBuilder()
                .add("wordGerman", "berühren")
                .add("wordEnglisch", "touch")
                .build());
        ret.add(Json.createObjectBuilder()
                .add("wordGerman", "hören")
                .add("wordEnglisch", "hear")        
                .build());
        ret.add(Json.createObjectBuilder()
                .add("wordGerman", "schmecken")
                .add("wordEnglisch", "taste")
                .build());
        ret.add(Json.createObjectBuilder()
                .add("wordGerman", "riechen")
                .add("wordEnglisch", "smell")        
                .build());
        ret.add(Json.createObjectBuilder()
                .add("wordGerman", "denken")
                .add("wordEnglisch", "think")
                .build());
        ret.add(Json.createObjectBuilder()
                .add("wordGerman", "schneiden")
                .add("wordEnglisch", "cut")        
                .build());
        ret.add(Json.createObjectBuilder()
                .add("wordGerman", "bügeln")
                .add("wordEnglisch", "iron")
                .build());
        ret.add(Json.createObjectBuilder()
                .add("wordGerman", "falten")
                .add("wordEnglisch", "fold")        
                .build());
        ret.add(Json.createObjectBuilder()
                .add("wordGerman", "kaufen")
                .add("wordEnglisch", "buy")
                .build());
        ret.add(Json.createObjectBuilder()
                .add("wordGerman", "verkaufen")
                .add("wordEnglisch", "sell")        
                .build());
       }
        return ret.build(); 
    }
}
