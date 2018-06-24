/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package lib.Model;

import java.math.BigDecimal;
import javax.json.Json;
import javax.json.JsonObject;

/**
 *
 * @author mexxw
 */
public class Result {
    private int id;
    private int unit;
    private int user;
    private int mode;
    private int right;
    private int secondTry;
    private int wrong;
    private double timeNeeded;
    private String date;

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

    public int getUser() {
        return user;
    }

    public void setUser(int user) {
        this.user = user;
    }

    public int getMode() {
        return mode;
    }

    public void setMode(int mode) {
        this.mode = mode;
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

    public double getTimeNeeded() {
        return timeNeeded;
    }

    public void setTimeNeeded(double timeNeeded) {
        this.timeNeeded = timeNeeded;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public Result(int id, int unit, int user, int mode, int right, int secondTry, int wrong, double timeNeeded, String date) {
        this.id = id;
        this.unit = unit;
        this.user = user;
        this.mode = mode;
        this.right = right;
        this.secondTry = secondTry;
        this.wrong = wrong;
        this.timeNeeded = timeNeeded;
        this.date = date;
    }

    
    public JsonObject jsonify(){
        return Json.createObjectBuilder()
                .add("id", this.getId())
                .add("unit",this.getUnit())
                .add("correct",this.getRight())
                .add("second",this.getSecondTry())
                .add("wrong",this.getWrong())
                .add("time", this.getTimeNeeded())
                .add("mode",this.getMode())
                .add("date",this.getDate())
                .build();
    }
}
