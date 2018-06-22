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
    private List<Result> results;

    public List<Result> getResults() {
        return results;
    }

    public void setResults(List<Result> results) {
        this.results = results;
    }
    
    
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
        results = new ArrayList<>();
        users.addAll(Database.getInstance().getUsers());
        themes.addAll(Database.getInstance().getThemes());
        chapters.addAll(Database.getInstance().getChapters());
        allVocab.addAll(Database.getInstance().getVocab());
        for(Chapter c:chapters){
            List<Vocab> curr = new ArrayList<>();
            c.addList(allVocab.stream().filter(it->it.getUnit()==c.getId()).collect(Collectors.toList()));
        }
        results.addAll(Database.getInstance().getResults());
    }
    public static Repository getInstance(){
        if(instance == null){
            instance = new Repository();
        }
        return instance;
    }
    
    public User login(String uName,String password){
        User ret = users.stream().filter((it) -> it.getUsername().equals(uName) && it.getPassword().equals(password)).findFirst().orElse(null);
        return ret;
    }
    public User user(String uName){
        User ret = users.stream().filter((it) -> it.getUsername().equals(uName)).findFirst().orElse(null);
        return ret;
    }
    public int setStartingTheme(int uID,int themeID){
        User u = users.stream().filter((it) -> it.getId() == uID).findFirst().orElse(null);
        if(u != null){
            u.setStartingTheme(themeID);
            Database.getInstance().updateStartingTheme(uID,themeID);
            return 0;
        }  
        return 1;
    }
    public int changeUser(int uID,String user, String pw,String fN,String lN, String email,String birthDate,String inst){
        User u = users.stream().filter((it) -> it.getId() == uID).findFirst().orElse(null); 
        if(u != null){
            u.setUsername(user);
            u.setPassword(pw);
            u.setFirstName(fN);
            u.setLastName(lN);
            u.setEmail(email);
            u.setBirthdate(birthDate);
            u.setInstitution(inst);
            Database.getInstance().changeUser(uID,user,pw,fN,lN,email,birthDate,inst);
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
        return themes.stream().filter((it)-> it.getName().equals("Default")).findFirst().get();
    }

    public List<Theme> getUserThemes(int id) {
        return themes.stream().filter((it)->it.getOwner()==id || it.getName().equals("Red") || it.getName().equals("Turquoise")).collect(Collectors.toList());
    }

    public int deleteTheme(int themeID) {
        int index = -1;
        for(int i = 0;i<themes.size();i++){
            Theme t = themes.get(i);
            if(t.getId() == themeID){
                index = i;
            }
        }
        if(index!=-1){
            User u = users.stream().filter(it->it.getStartingTheme()==themeID).findFirst().orElse(null);
            if(u!= null){
                u.setStartingTheme(getDefaultTheme().getId());
                Database.getInstance().updateStartingTheme(u.getId(), u.getStartingTheme());
            }
            int id = themes.get(index).getId();
            themes.remove(index);
            Database.getInstance().deleteTheme(id);
            return 0;
        }
        return 1;
    }

    public int addTheme(int owner, String name, String hBG, String mFC, String hFC, String cABG, String mNC, String mBG, String mNF,String cBG,String cHL,String pF) {
        int id = Database.getInstance().addTheme(owner,name,hBG,mFC,hFC,cABG,mNC,mBG,mNF,cBG,cHL,pF);
        Theme t = new Theme(id,name,owner,hBG,mFC,hFC,cABG,mNC,mBG,mNF,cBG,cHL,pF);
        themes.add(t);
        return id;
    }

    public int changeTheme(int id, String name, String hBG, String mFC, String hFC, String cABG, String mNC, String mBG, String mNF,String cBG,String cHL,String pF) {
        Theme toChange = themes.stream().filter((it)->it.getId() == id).findFirst().orElse(null);
        if(toChange != null){
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
            Database.getInstance().changeTheme(id,name,hBG,mFC,cABG,mNC,mBG,mNF,cBG,cHL,pF);
            return 0;
        }
        return 1;
    }

    public List<Chapter> getChapter(int uID) {
        return chapters.stream().filter((it)->it.getOwner() ==-1 || it.getOwner() == uID).collect(Collectors.toList());
    }

    public List<Vocab> getAllVocab() {
        return allVocab;
    }

    public Chapter getChapter(String unit) {
        return chapters.stream().filter((it)->it.getName().equals(unit)).findFirst().orElse(null);
    }
    public Chapter getChapterByID(int cID) {
        return chapters.stream().filter((it)->it.getId() ==cID).findFirst().orElse(null);
    }

    public int addChapter(int uID, String cName) {
        int id=Database.getInstance().addChapter(uID,cName);
        chapters.add(new Chapter(id,cName,uID));
        return id;
    }

    public int deleteUnit(int uID) {
        int index = -1;
        for(int i = 0;i<chapters.size();i++){
            Chapter c = chapters.get(i);
            if(c.getId() == uID){
                index = i;
            }
        }
        if(index != -1){
            int id = chapters.get(index).getId();
            chapters.remove(index);
            Database.getInstance().deleteChapterVocab(id);
            Database.getInstance().deleteChapter(id);
            return 0;
        }
        return 1;
    }

    public int deleteWord(int uID, String wE) {
        int index = -1;
        Chapter c =chapters.stream().filter(it->it.getId()==uID).findFirst().orElse(null);
        if(c != null){
            for(int i = 0;i<c.getVocab().size();i++){
                if(c.getVocab().get(i).getWordEnglisch().equals(wE)){
                    index =i;
                }    
            }
            if(index!=-1){
                int id = c.getVocab().get(index).getId();
                c.getVocab().remove(index);
                Database.getInstance().deleteVocab(id);
                return 0;   
            }            
        }
        return 1;
    }

    public Iterable<Chapter> getOtherUnits(int uID) {
        return chapters.stream().filter((it)->it.getOwner()!=uID && it.getOwner()!= -1).collect(Collectors.toList());
    }

    public int changeName(int uID, String nn) {
        Chapter c = chapters.stream().filter((it)->it.getId() == uID).findFirst().orElse(null);
        if(c!=null){
            c.setName(nn);
            Database.getInstance().changeChapterName(uID,nn);
            return 0;
        }
        return 1;
    }

    public Iterable<Chapter> getUnitsByUser(String username) {
        User u = users.stream().filter(it->it.getUsername().equalsIgnoreCase(username)).findFirst().orElse(null);
        if(u!= null){
            return chapters.stream().filter(it->it.getOwner()==u.getId()).collect(Collectors.toList());
        }
        return new ArrayList<>();
    }

    public int copyUnit(int uID, int cID) {
        Chapter toCopy = chapters.stream().filter(it->it.getId()==cID).findFirst().orElse(null);
        if(toCopy != null){
            Chapter copied = (Chapter) org.apache.commons.lang.SerializationUtils.clone(toCopy);
            copied.setOwner(uID);
            Database.getInstance().copyChapter(copied);
            chapters.add(copied);
            return 0;
        }
        return 1;
    }

    public String getUnitName(int uID) {
        Chapter c = chapters.stream().filter(it-> it.getId() == uID).findFirst().orElse(null);
        if(c != null){
            return c.getName();
        }
        return "";
    }

    public Theme getDarkTheme() {
        return themes.stream().filter((it)-> it.getName().equals("Dark")).findFirst().get();
    }

    public User getUnitOwner(int uID) {
        Chapter c = chapters.stream().filter(it->it.getId()==uID).findFirst().orElse(null);
        if(c!= null){
            User u = users.stream().filter(it->it.getId()==c.getOwner()).findFirst().orElse(null);
            return u;
        }
        return null;
    }

    public int addResult(int user, int unit, int correct, int second, int wrong, double time, int mode, String date) {
        Result r = new Result(0,unit,user,mode,correct,second,wrong,time,date);
        int val = Database.getInstance().addResult(r);
        if(val!=-1){
            r.setId(val);
            results.add(r);
            return 0;
        }
        return 1;
    }

    public List<Result> getResults(int user) {
        return results.stream().filter(it->it.getUser()==user).collect(Collectors.toList());
    }

    public User getThemeOwner(int themeID) {
        Theme t = themes.stream().filter(it->it.getId()==themeID).findFirst().orElse(null);
        if(t!= null){
            return users.stream().filter(it->it.getId()==t.getOwner()).findFirst().orElse(null);
        }
        return null;
    }

    public int register(String username, String pw, String fN, String lN, String email, String birthDate, String inst) {
        User u = users.stream().filter(it->it.getUsername().equals(username)).findFirst().orElse(null);
        if(u!=null){
            return -1;
        }
        else{
            int id = Database.getInstance().addUser(username,pw,fN,lN,email,birthDate,inst);
            if(id!=-1){
                users.add(new User(id,username,pw,fN,lN,email,inst,birthDate,1));
                return id;
            }
            return -1;
        }
    }

    public User getUserByID(int id) {
        return users.stream().filter(it->it.getId()==id).findFirst().orElse(null);
    }

    public List<User> getAccountsWithMail(String email) {
        return users.stream().filter(it->it.getEmail().equals(email)).collect(Collectors.toList());
    }
}
