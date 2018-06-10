/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package lib.Model;

import java.io.Serializable;
import javax.json.Json;
import javax.json.JsonObject;

/**
 *
 * @author mexxw
 */
public class Vocab implements Serializable {
    private int id;
    private String wordEnglisch;
    private String wordGerman;
    private int unit;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getWordEnglisch() {
        return wordEnglisch;
    }

    public void setWordEnglisch(String wordEnglisch) {
        this.wordEnglisch = wordEnglisch;
    }

    public String getWordGerman() {
        return wordGerman;
    }

    public void setWordGerman(String wordGerman) {
        this.wordGerman = wordGerman;
    }

    public int getUnit() {
        return unit;
    }

    public void setUnit(int unit) {
        this.unit = unit;
    }
    
    public Vocab(int id, String wordEnglisch, String wordGerman,int unit) {
        this.id = id;
        this.wordEnglisch = wordEnglisch;
        this.wordGerman = wordGerman;
        this.unit = unit;
    }
    
    public JsonObject jsonify(){
        return Json.createObjectBuilder()
                .add("wordGerman",this.getWordGerman())
                .add("wordEnglisch", this.getWordEnglisch())
                .build();
    }
}