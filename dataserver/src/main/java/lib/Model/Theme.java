/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package lib.Model;

import javax.json.Json;
import javax.json.JsonObject;

/**
 *
 * @author mexxw
 */
public class Theme {
    private int id;
    private String name;
    private String hBgC;
    private String mFC;
    private String hFC;
    private String cABgC;
    private String mNC;
    private String mBgC;
    private String mNFC;

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

    public String gethBgC() {
        return hBgC;
    }

    public void sethBgC(String hBgC) {
        this.hBgC = hBgC;
    }

    public String getmFC() {
        return mFC;
    }

    public void setmFC(String mFC) {
        this.mFC = mFC;
    }

    public String gethFC() {
        return hFC;
    }

    public void sethFC(String hFC) {
        this.hFC = hFC;
    }

    public String getcABgC() {
        return cABgC;
    }

    public void setcABgC(String cABgC) {
        this.cABgC = cABgC;
    }

    public String getmNC() {
        return mNC;
    }

    public void setmNC(String mNC) {
        this.mNC = mNC;
    }

    public String getmBgC() {
        return mBgC;
    }

    public void setmBgC(String mBgC) {
        this.mBgC = mBgC;
    }

    public String getmNFC() {
        return mNFC;
    }

    public void setmNFC(String mNFC) {
        this.mNFC = mNFC;
    }

    public Theme(int id, String name, String hBgC, String mFC, String hFC, String cABgC, String mNC, String mBgC, String mNFC) {
        this.id = id;
        this.name = name;
        this.hBgC = hBgC;
        this.mFC = mFC;
        this.hFC = hFC;
        this.cABgC = cABgC;
        this.mNC = mNC;
        this.mBgC = mBgC;
        this.mNFC = mNFC;
    }
    
    public JsonObject jsonify(){
        return Json.createObjectBuilder()
                .add("id",1)
                .add("name", "Dark")
                .add("headerBackgroundColor",this.gethBgC())
                .add("headerFontColor",this.gethFC())
                .add("menuBackgroundColor",this.mBgC)
                .add("menuFontColor",this.getmFC())
                .add("menuNavigationFontColor",this.getmNFC())
                .add("cardAreaBackgroundColor", this.getcABgC())                
                .add("menuNavigationColor",this.getmNC())
                .build();
    }
}