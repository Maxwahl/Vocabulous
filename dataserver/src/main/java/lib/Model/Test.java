/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package lib.Model;

import java.util.Date;

/**
 *
 * @author mexxw
 */
public class Test {
    private int id;
    private int unit;
    private int right;
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

    public Test(int id, int unit, int right, int wrong, int user, Date date) {
        this.id = id;
        this.unit = unit;
        this.right = right;
        this.wrong = wrong;
        this.user = user;
        this.date = date;
    }
    
}
