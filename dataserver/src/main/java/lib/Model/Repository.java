/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package lib.Model;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

/**
 *
 * @author mexxw
 */
public class Repository {
    private static Repository instance = null;
  
    private List<User> users;
    private List<Theme> themes;
    private List<Chapter> chapters;
    private List<Vocab> allVocab;

    public List<User> getUsers() {
        return users;
    }

    public List<Theme> getThemes() {
        return themes;
    }

    public List<Chapter> getChapters() {
        return chapters;
    }
    
    private Repository(){
       users = new ArrayList<>();
       themes = new ArrayList<>();
       chapters = new ArrayList<>();
       allVocab = new ArrayList<>();
       users.add(new User(1,"admin","admin","Max","Mustermann","max.m@gmx.at","htl-leonding","1.1.1980",2));
       chapters.add(new Chapter(1,"Basic Nouns",-1));
       chapters.add(new Chapter(2,"Basic Verbs",-1));
       chapters.add(new Chapter(3,"Basic Adjectives",-1));
       themes.add(new Theme(0,"Dark",-1,"2E2E2E","FFFFFF","FFFFFF","585858","6E6E6E","424242","FFFFFF","424242","FFFFFF","E0ECF8"));
       themes.add(new Theme(1,"Default",-1,"1E88E5","000000","FFFFFF","eeeeee","f2f2f2","ffffff","000000","FFFFFF","212121","A4A4A4"));
       themes.add(new Theme(2,"custom",1,"012345","012345","123456","123456","123456","123456","123456","123456","123456","123456"));
       chapters.get(0).addWord("house", "Haus");
       chapters.get(0).addWord("car", "Auto");
       chapters.get(0).addWord("plane", "Flugzeug");
       chapters.get(0).addWord("train", "Zug");
       chapters.get(0).addWord("dog", "Hund");
       chapters.get(0).addWord("cat", "Katze");
       chapters.get(0).addWord("street", "Straße");
       chapters.get(0).addWord("city", "Stadt");
       chapters.get(0).addWord("cow", "Kuh");
       chapters.get(0).addWord("door", "Tür");
       chapters.get(0).addWord("lamp", "Lampe");
       chapters.get(0).addWord("television", "Fernseher");
       chapters.get(0).addWord("music", "Musik");
       chapters.get(0).addWord("stairway", "Stiege");
       chapters.get(0).addWord("fork", "Gabel");
       chapters.get(0).addWord("knife", "Messer");
       chapters.get(0).addWord("spoon", "Löffel");
       chapters.get(0).addWord("key", "Schlüssel");
       chapters.get(0).addWord("music", "Musik");
       chapters.get(0).addWord("stairway", "Stiege");
       chapters.get(0).addWord("underground", "U-Bahn");
       chapters.get(0).addWord("sign", "Schild");
       chapters.get(0).addWord("ice cream", "Eiscreme");
       chapters.get(0).addWord("Stadion", "stadium");
       chapters.get(0).addWord("seat", "Sessel");
       chapters.get(0).addWord("telephone", "Telefon");
       chapters.get(0).addWord("game", "Spiel");
       chapters.get(0).addWord("apple", "Apfel");
       chapters.get(0).addWord("iron", "Eisen");
       chapters.get(0).addWord("trousers", "Hose");
       chapters.get(0).addWord("shoes", "Schuhe");
       chapters.get(1).addWord("make", "machen");
       chapters.get(1).addWord("do", "tun");
       chapters.get(1).addWord("go", "gehen");
       chapters.get(1).addWord("eat", "essen");
       chapters.get(1).addWord("sleep", "schlafen");
       chapters.get(1).addWord("drink", "trinken");
       chapters.get(1).addWord("drive", "fahren");
       chapters.get(1).addWord("speak", "sprechen");
       chapters.get(1).addWord("read", "lesen");
       chapters.get(1).addWord("write", "schreiben");
       chapters.get(1).addWord("run", "laufen");
       chapters.get(1).addWord("see", "sehen");
       chapters.get(1).addWord("ask", "fragen");
       chapters.get(1).addWord("cook", "kochen");
       chapters.get(1).addWord("work", "arbeiten");
       chapters.get(1).addWord("clean", "putzen");
       chapters.get(1).addWord("fly", "fliegen");
       chapters.get(1).addWord("paint", "malen");
       chapters.get(1).addWord("play", "spielen");
       chapters.get(1).addWord("forget", "vergessen");
       chapters.get(1).addWord("touch", "berühren");
       chapters.get(1).addWord("hear", "hören");
       chapters.get(1).addWord("taste", "schmecken");
       chapters.get(1).addWord("smell", "riechen");
       chapters.get(1).addWord("think", "denken");
       chapters.get(1).addWord("cut", "schneiden");
       chapters.get(1).addWord("iron", "bügeln");
       chapters.get(1).addWord("fold", "falten");
       chapters.get(1).addWord("buy", "kaufen");       
       chapters.get(1).addWord("sell", "verkaufen");       
       chapters.get(2).addWord("big", "groß");
       chapters.get(2).addWord("fast", "schnell");
       chapters.get(2).addWord("sweet", "süß");
       chapters.get(2).addWord("good", "gut");
       chapters.get(2).addWord("beautiful", "schön");      


    }
    public static Repository getInstance(){
        if(instance == null){
            instance = new Repository();
        }
        return instance;
    }
    
    public User login(String uName,String password){
        User ret = users.stream().filter((it) -> it.getUsername().equals(uName) && it.getPassword().equals(password)).findFirst().get();
        return ret;
    }
    public User user(String uName){
        User ret = users.stream().filter((it) -> it.getUsername().equals(uName)).findFirst().get(); 
        return ret;
    }
    public int setStartingTheme(int uID,int themeID){
        User u = users.stream().filter((it) -> it.getId() == uID).findFirst().get(); 
        if(u != null){
            u.setStartingTheme(themeID);
            //change in DB
            return 0;
        }  
        return 1;
    }
    public int changeUser(int uID,String user, String pw,String fN,String lN, String email,String birthDate,String inst){
        User u = users.stream().filter((it) -> it.getId() == uID).findFirst().get(); 
        if(u != null){
            u.setUsername(user);
            u.setPassword(pw);
            u.setFirstName(fN);
            u.setLastName(lN);
            u.setEmail(email);
            u.setBirthdate(birthDate);
            u.setInstitution(inst);
            //change in DB
            return 0;
        }  
        return 1;
    }

    public Theme getStartingTheme(int id) {
       int startingTheme = users.stream().filter((it)->it.getId()==id).map((it)->it.getStartingTheme()).findFirst().get();
       Theme res = themes.stream().filter((it)->it.getId() == startingTheme).findFirst().get();
       return res;
    }
    public Theme getDefaultTheme() {
        return themes.stream().filter((it)-> it.getId() == 1).findFirst().get();
    }

    public List<Theme> getUserThemes(int id) {
        return themes.stream().filter((it)->it.getOwner()==id).collect(Collectors.toList());
    }

    public int deleteTheme(int themeID) {
        int index = 0;
        for(int i = 0;i<themes.size();i++){
            Theme t = themes.get(i);
            if(t.getId() == themeID){
                index = i;
            }
        }
        themes.remove(index);
        
        return 0;
    }

    public int addTheme(int owner, String name, String hBG, String mFC, String hFC, String cABG, String mNC, String mBG, String mNF,String cBG,String cHL,String pF) {
        Theme t = new Theme(themes.size(),name,owner,hBG,mFC,hFC,cABG,mNC,mBG,mNF,cBG,cHL,pF);
        themes.add(t);
        return t.getId();
    }

    public int changeTheme(int id, String name, String hBG, String mFC, String hFC, String cABG, String mNC, String mBG, String mNF,String cBG,String cHL,String pF) {
        Theme toChange = themes.stream().filter((it)->it.getId() == id).findFirst().get();
        toChange.setName(name);
        toChange.sethBgC(hBG);
        toChange.setmFC(mFC);
        toChange.sethFC(hFC);
        toChange.setcABgC(cABG);
        toChange.setmNC(mNC);
        toChange.setmBgC(mBG);
        toChange.setmNFC(mNF);
        toChange.setcBG(cBG);
        toChange.setcHL(cHL);
        toChange.setpF(pF);
        return 0;
    }

    public List<Chapter> getChapter(int uID) {
        return chapters.stream().filter((it)->it.getOwner() ==-1 || it.getOwner() == uID).collect(Collectors.toList());
    }

    public List<Vocab> getAllVocab() {
        return allVocab;
    }

    public Chapter getChapter(String unit) {
        return chapters.stream().filter((it)->it.getName().equals(unit)).findFirst().get();
    }
    public Chapter getChapterByID(int cID) {
        return chapters.stream().filter((it)->it.getId() ==cID).findFirst().get();
    }

    public int addChapter(int uID, String cName) {
        chapters.add(new Chapter(chapters.size()+1,cName,uID));
        return chapters.size();
    }
}
