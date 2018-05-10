/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package lib.Model;

import java.text.SimpleDateFormat;
import java.util.Date;
import javax.json.Json;
import javax.json.JsonObject;

/**
 *
 * @author mexxw
 */
public class Training {
    private int id;
    private int unit;
    private int right;
    private int secondTry;
    private int wrong;
    private int user;
    private Date date;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getUnit() {
        return unit;
    }

    public void setUnit(int unit) {
        this.unit = unit;
    }

    public int getRight() {
        return right;
    }

    public void setRight(int right) {
        this.right = right;
    }

    public int getSecondTry() {
        return secondTry;
    }

    public void setSecondTry(int secondTry) {
        this.secondTry = secondTry;
    }

    public int getWrong() {
        return wrong;
    }

    public void setWrong(int wrong) {
        this.wrong = wrong;
    }

    public int getUser() {
        return user;
    }

    public void setUser(int user) {
        this.user = user;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Training(int id, int unit, int right, int secondTry, int wrong, int user, Date date) {
        this.id = id;
        this.unit = unit;
        this.right = right;
        this.secondTry = secondTry;
        this.wrong = wrong;
        this.user = user;
        this.date = date;
    }
    
     public JsonObject jsonify(){
        SimpleDateFormat f = new SimpleDateFormat("dd.MM.yyyy");
        return Json.createObjectBuilder()
                .add("id", this.getId())
                .add("user", this.getUser())
                .add("unit",this.getUnit())
                .add("date",f.format(this.getDate()))
                .add("correct",this.getRight())
                .add("second",this.getSecondTry())
                .add("wrong",this.getWrong())
                .build();
    }
}
