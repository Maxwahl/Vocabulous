/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package lib.Model;

import java.util.List;
import javax.json.Json;
import javax.json.JsonArray;
import javax.json.JsonArrayBuilder;
import javax.json.JsonObject;

/**
 *
 * @author mexxw
 */
public class Chapter {
    private int id;
    private String name;
    private int owner;
    private List<Vocab> vocab;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getOwner() {
        return owner;
    }

    public void setOwner(int owner) {
        this.owner = owner;
    }

    public List<Vocab> getVocab() {
        return vocab;
    }

    public void setVocab(List<Vocab> vocab) {
        this.vocab = vocab;
    }

    public Chapter(int id, String name, int owner) {
        this.id = id;
        this.name = name;
        this.owner = owner;
    }
    
    public JsonObject jsonifyUnit(){
        return Json.createObjectBuilder()
                .add("name",this.getName())              
                .build();
    }
    public JsonArray jsonifyVocab(){
               JsonArrayBuilder ret = Json.createArrayBuilder();
               for (Vocab v : vocab){
                   ret.add(v.jsonify());
               }
               return ret.build();
    }
    
}
