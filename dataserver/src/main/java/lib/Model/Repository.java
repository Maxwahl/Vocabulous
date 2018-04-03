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
    private Repository(){
       users = new ArrayList<>();
       themes = new ArrayList<>();
       chapters = new ArrayList<>();
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
       Theme res = themes.stream().filter((it)->it.getId() == (users.stream().filter((u)->u.getId() == id).findFirst().get()).getStartingTheme()).findFirst().get();
       return res;
    }
    public Theme getDefaultTheme() {
        return themes.stream().filter((it)-> it.getId() == 0).findFirst().get();
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

    public int addTheme(int owner, String name, String hBG, String mFC, String hFC, String cABG, String mNC, String mBG, String mNF) {
        themes.add(new Theme(themes.size()-1,name,owner,hBG,mFC,hFC,cABG,mNC,mBG,mNF));
        return 0;
    }

    public int changeTheme(int id, String name, String hBG, String mFC, String hFC, String cABG, String mNC, String mBG, String mNF) {
        Theme toChange = themes.stream().filter((it)->it.getId() == id).findFirst().get();
        toChange.setName(name);
        toChange.sethBgC(hBG);
        toChange.setmFC(mFC);
        toChange.sethFC(hFC);
        toChange.setcABgC(cABG);
        toChange.setmNC(mNC);
        toChange.setmBgC(mBG);
        toChange.setmNFC(mNF);
        return 0;
    }

    public List<Chapter> getChapters() {
        return chapters;
    }

    public Chapter getChapter(String unit) {
        return chapters.stream().filter((it)->it.getName().equals(unit)).findFirst().get();
    }
}
