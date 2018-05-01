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
    private int owner;
    private String name;
    private String hBgC;
    private String mFC;
    private String hFC;
    private String cABgC;
    private String mNC;
    private String mBgC;
    private String mNFC;
    private String cHL;
    private String pF;

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

    public int getOwner() {
        return owner;
    }

    public void setOwner(int owner) {
        this.owner = owner;
    }

    public String getcHL() {
        return cHL;
    }

    public void setcHL(String cHL) {
        this.cHL = cHL;
    }

    public String getpF() {
        return pF;
    }

    public void setpF(String pF) {
        this.pF = pF;
    }

    public Theme(int id, String name,int owner, String hBgC, String mFC, String hFC, String cABgC, String mNC, String mBgC, String mNFC,String cHL,String pF) {
        this.id = id;
        this.name = name;
        this.owner = owner;
        this.hBgC = hBgC;
        this.mFC = mFC;
        this.hFC = hFC;
        this.cABgC = cABgC;
        this.mNC = mNC;
        this.mBgC = mBgC;
        this.mNFC = mNFC;
        this.cHL = cHL;
        this.pF = pF;
    }
    
    public JsonObject jsonify(){
        return Json.createObjectBuilder()
                .add("id",1)
                .add("name",this.name)
                .add("headerBackgroundColor",this.gethBgC())
                .add("headerFontColor",this.gethFC())
                .add("menuBackgroundColor",this.mBgC)
                .add("menuFontColor",this.getmFC())
                .add("menuNavigationFontColor",this.getmNFC())
                .add("cardAreaBackgroundColor", this.getcABgC())                
                .add("menuNavigationColor",this.getmNC())
                .add("cardHeadLineColor", this.getcHL())                
                .add("paragraphFontColor",this.getpF())
                .build();
    }
}
