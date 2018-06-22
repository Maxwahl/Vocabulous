/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package lib.Model;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author mexxw
 */
public class Database {
   private static Database instance;
    static final String DRIVER_STRING = "org.apache.derby.jdbc.ClientDriver";
    static final String CONNECTION_STRING = "jdbc:derby://localhost:1527/dataserver";
    static final String USER = "dataserver";
    static final String PASSWORD = "passme";

    private Connection connection;
    
    public static Database getInstance(){
        if(instance == null){
            instance = new Database();
        }
        return instance;
    }
    private Database(){
        try{
            connection = java.sql.DriverManager.getConnection(CONNECTION_STRING,USER,PASSWORD);
            connection.setTransactionIsolation(Connection.TRANSACTION_SERIALIZABLE);
            connection.setAutoCommit(true);
        } catch (SQLException ex){
            System.out.println("Verbindung zur Datenbank nicht möglich "+ex+"\n");
            System.exit(1);
        }      
    }

    Collection<User> getUsers() {
        List<User> result = new ArrayList<>();
        try(PreparedStatement stmt = connection
                .prepareStatement("select id,username,password,firstName,lastName,email,institution,birthdate,startingTheme from account order by id")){
        ResultSet res =stmt.executeQuery();
        while (res.next()){
            result.add(new User(res.getInt(1),res.getString(2),res.getString(3),res.getString(4),res.getString(5),res.getString(6),res.getString(7),res.getString(8),res.getInt(9)));
        }
        } catch(SQLException ex){
            Logger.getLogger(Database.class.getName()).log(Level.SEVERE,null,ex);
        }
        return result;   
    }

    Collection<Theme> getThemes() {
        List<Theme> result = new ArrayList<>();
        try(PreparedStatement stmt = connection
                .prepareStatement("select id,owner,name,hBgC,mFC,hFC,cABgC,mNC,mBgC,cBG,mNFC,cHL,pF from theme order by id")){
        ResultSet res =stmt.executeQuery();
        while (res.next()){
            result.add(new Theme(res.getInt(1),res.getString(3),res.getInt(2),res.getString(4),res.getString(5),res.getString(6),res.getString(7),res.getString(8),res.getString(9),res.getString(10),res.getString(11),res.getString(12),res.getString(13)));
        }
        } catch(SQLException ex){
            Logger.getLogger(Database.class.getName()).log(Level.SEVERE,null,ex);
        }
        return result;   
    }

    Collection<Chapter> getChapters() {
        List<Chapter> result = new ArrayList<>();
        try(PreparedStatement stmt = connection
                .prepareStatement("select id,name,owner from chapter order by id")){
        ResultSet res =stmt.executeQuery();
        while (res.next()){
            result.add(new Chapter(res.getInt(1),res.getString(2),res.getInt(3)));
        }
        } catch(SQLException ex){
            Logger.getLogger(Database.class.getName()).log(Level.SEVERE,null,ex);
        }
        return result;  
    }

    Collection<Vocab> getVocab() {
        List<Vocab> result = new ArrayList<>();
        try(PreparedStatement stmt = connection
                .prepareStatement("select id,wE,wG,chapter from Vocab order by id")){
        ResultSet res =stmt.executeQuery();
        while (res.next()){
            result.add(new Vocab(res.getInt(1),res.getString(2),res.getString(3),res.getInt(4)));
        }
        } catch(SQLException ex){
            Logger.getLogger(Database.class.getName()).log(Level.SEVERE,null,ex);
        }
        return result;  
    }

    void updateStartingTheme(int uID, int themeID) {
        try(PreparedStatement stmt = connection
                .prepareStatement("update account set startingtheme = ? where id = ?")){
        stmt.setInt(1,themeID);
        stmt.setInt(2,uID);
        stmt.executeUpdate();
        } catch(SQLException ex){
            Logger.getLogger(Database.class.getName()).log(Level.SEVERE,null,ex);
        }
    }

    void changeUser(int uID, String user, String pw, String fN, String lN, String email, String birthDate, String inst) {
        try(PreparedStatement stmt = connection
                .prepareStatement("update account set username = ?,password = ?,firstName = ?,lastName = ?,email = ?,birthdate = ?,institution = ? where id = ?")){
        stmt.setString(1,user);
        stmt.setString(2,pw);
        stmt.setString(3,fN);
        stmt.setString(4,lN);
        stmt.setString(5,email);
        stmt.setString(6,birthDate);
        stmt.setString(7,inst);
        stmt.setInt(4,uID);
        stmt.executeUpdate();
        } catch(SQLException ex){
            Logger.getLogger(Database.class.getName()).log(Level.SEVERE,null,ex);
        }
    }

    void deleteTheme(int id) {
        try(PreparedStatement stmt = connection
                .prepareStatement("delete from Theme where id = ?")){
        stmt.setInt(1, id);
        stmt.executeUpdate();
        } catch(SQLException ex){
            Logger.getLogger(Database.class.getName()).log(Level.SEVERE,null,ex);
        }    
    }

    int addTheme(int owner, String name, String hBG, String mFC, String hFC, String cABG, String mNC, String mBG, String mNF, String cBG, String cHL, String pF) {
        try(PreparedStatement stmt = connection
                .prepareStatement("insert into theme (owner,name,hBgC,mFC,hFC,cABgC,mNC,mBgC,cBG,mNFC,cHL,pF) values (?,?,?,?,?,?,?,?,?,?,?,?)",Statement.RETURN_GENERATED_KEYS)){
        stmt.setInt(1,owner);
        stmt.setString(2,name);
        stmt.setString(3,hBG);
        stmt.setString(4,mFC);
        stmt.setString(5,hFC);
        stmt.setString(6,cABG);
        stmt.setString(7,mNC);
        stmt.setString(8,mBG);
        stmt.setString(9,mNF);
        stmt.setString(10,cBG);
        stmt.setString(11,cHL);
        stmt.setString(12,pF);
        int ok = stmt.executeUpdate();
        if(ok>0){
            ResultSet res = stmt.getGeneratedKeys();
            if(res.next()){
                return res.getInt(1);
            }
        }
        } catch(SQLException ex){
            Logger.getLogger(Database.class.getName()).log(Level.SEVERE,null,ex);
        }
        return -1;
    }

    void changeTheme(int id, String name, String hBG, String mFC, String cABG, String mNC, String mBG, String mNF, String cBG, String cHL, String pF) {
        try(PreparedStatement stmt = connection
                .prepareStatement("update theme set name = ?,hbgc = ?,mFC = ?,cabgc = ?,mnc = ?,mbgc = ?,cbg = ?,mnfc = ?,chl = ?,pf = ? where id = ?")){
        stmt.setString(1,name);
        stmt.setString(2,hBG);
        stmt.setString(3,mFC);
        stmt.setString(4,cABG);
        stmt.setString(5,mNC);
        stmt.setString(6,mBG);
        stmt.setString(7,mNF);
        stmt.setString(8,cBG);
        stmt.setString(9,cHL);
        stmt.setString(10,pF);
        stmt.setInt(11,id);
        stmt.executeUpdate();
        } catch(SQLException ex){
            Logger.getLogger(Database.class.getName()).log(Level.SEVERE,null,ex);
        }
    }

    int addChapter(int uID, String cName) {
        try(PreparedStatement stmt = connection
                .prepareStatement("insert into chapter (name,owner) values (?,?)",Statement.RETURN_GENERATED_KEYS)){
        stmt.setString(1,cName);
        stmt.setInt(2,uID);
        int ok = stmt.executeUpdate();
        if(ok>0){
            ResultSet res = stmt.getGeneratedKeys();
            if(res.next()){
                return res.getInt(1);
            }
        }
        } catch(SQLException ex){
            Logger.getLogger(Database.class.getName()).log(Level.SEVERE,null,ex);
        }
        return -1;
    }

    void deleteChapter(int id) {
        try(PreparedStatement stmt = connection
                .prepareStatement("delete from Chapter where id = ?")){
        stmt.setInt(1, id);
        stmt.executeUpdate();
        } catch(SQLException ex){
            Logger.getLogger(Database.class.getName()).log(Level.SEVERE,null,ex);
        }    
    }

    void deleteVocab(int id) {
        try(PreparedStatement stmt = connection
                .prepareStatement("delete from Vocab where id = ?")){
        stmt.setInt(1, id);
        stmt.executeUpdate();
        } catch(SQLException ex){
            Logger.getLogger(Database.class.getName()).log(Level.SEVERE,null,ex);
        }    
    }

    void copyChapter(Chapter copied) {
        try(PreparedStatement stmt = connection
                .prepareStatement("insert into chapter (name,owner) values (?,?)",Statement.RETURN_GENERATED_KEYS)){
        stmt.setString(1,copied.getName());
        stmt.setInt(2,copied.getOwner());
        int ok = stmt.executeUpdate();
        if(ok>0){
            ResultSet res = stmt.getGeneratedKeys();
            if(res.next()){
                copied.setId(res.getInt(1));
            }
        }
        } catch(SQLException ex){
            Logger.getLogger(Database.class.getName()).log(Level.SEVERE,null,ex);
        }
        for(Vocab v:copied.getVocab()){
            try(PreparedStatement stmt = connection
                .prepareStatement("insert into vocab (wE,wG,chapter) values(?,?,?)",Statement.RETURN_GENERATED_KEYS)){
                stmt.setString(1,v.getWordEnglisch());
                stmt.setString(2,v.getWordGerman());
                stmt.setInt(3,copied.getId());
                int ok = stmt.executeUpdate();
                if(ok>0){
                ResultSet res = stmt.getGeneratedKeys();
                if(res.next()){
                    v.setId(res.getInt(1));
                }
            }
            } catch(SQLException ex){
                Logger.getLogger(Database.class.getName()).log(Level.SEVERE,null,ex);
            }
        }
    }
    
    void changeChapterName(int uID, String nn) {
        try(PreparedStatement stmt = connection
                .prepareStatement("update chapter set name = ? where id = ?")){
        stmt.setString(1,nn);
        stmt.setInt(2,uID);
        stmt.executeUpdate();
        } catch(SQLException ex){
            Logger.getLogger(Database.class.getName()).log(Level.SEVERE,null,ex);
        }
    }

    int addWord(String wE, String wG,int id) {
        try(PreparedStatement stmt = connection
                .prepareStatement("insert into vocab (wE,wG,chapter) values (?,?,?)",Statement.RETURN_GENERATED_KEYS)){
        stmt.setString(1,wE);
        stmt.setString(2,wG);
        stmt.setInt(3, id);
        int ok = stmt.executeUpdate();
        if(ok>0){
            ResultSet res = stmt.getGeneratedKeys();
            if(res.next()){
                return res.getInt(1);
            }
        }
        } catch(SQLException ex){
            Logger.getLogger(Database.class.getName()).log(Level.SEVERE,null,ex);
        }
        return -1;
    }

    Collection<Result> getResults() {
        List<Result> results = new ArrayList<>();
        try(PreparedStatement stmt = connection
                .prepareStatement("select id,unitID,account,correct,secondTry,wrong,time,date,mode from Result order by id")){
        ResultSet res =stmt.executeQuery();
        while (res.next()){
            results.add(new Result(res.getInt(1),res.getInt(2),res.getInt(3),res.getInt(9),res.getInt(4),res.getInt(5),res.getInt(6),res.getDouble(7),res.getString(8)));
        }
        } catch(SQLException ex){
            Logger.getLogger(Database.class.getName()).log(Level.SEVERE,null,ex);
        }
        return results;  
    }

    int addResult(Result r) {
        try(PreparedStatement stmt = connection
                .prepareStatement("insert into result (unitID,account,correct,secondTry,wrong,time,date,mode) values (?,?,?,?,?,?,?,?)",Statement.RETURN_GENERATED_KEYS)){
        stmt.setInt(1,r.getUnit());
        stmt.setInt(2,r.getUser());
        stmt.setInt(3,r.getRight());
        stmt.setInt(4,r.getSecondTry());
        stmt.setInt(5, r.getWrong());
        stmt.setDouble(6, r.getTimeNeeded());
        stmt.setString(7,r.getDate());
        stmt.setInt(8,r.getMode());
        int ok = stmt.executeUpdate();
        if(ok>0){
            ResultSet res = stmt.getGeneratedKeys();
            if(res.next()){
                return res.getInt(1);
            }
        }
        } catch(SQLException ex){
            Logger.getLogger(Database.class.getName()).log(Level.SEVERE,null,ex);
        }
        return -1;
    }

    void deleteChapterVocab(int id) {
        try(PreparedStatement stmt = connection
                .prepareStatement("delete from Vocab where chapter = ?")){
        stmt.setInt(1, id);
        stmt.executeUpdate();
        } catch(SQLException ex){
            Logger.getLogger(Database.class.getName()).log(Level.SEVERE,null,ex);
        }    
    }

    int addUser(String username, String pw, String fN, String lN, String email, String birthDate, String inst) {
        try(PreparedStatement stmt = connection
                .prepareStatement("insert into account (username,password,firstName,lastName,email,institution,birthdate,startingTheme) values (?,?,?,?,?,?,?,?)",Statement.RETURN_GENERATED_KEYS)){
        stmt.setString(1,username);
        stmt.setString(2,pw);
        stmt.setString(3, fN);
        stmt.setString(4, lN);
        stmt.setString(5, email);
        stmt.setString(6, inst);
        stmt.setString(7, birthDate);
        stmt.setInt(8, 1);
        int ok = stmt.executeUpdate();
        if(ok>0){
            ResultSet res = stmt.getGeneratedKeys();
            if(res.next()){
                return res.getInt(1);
            }
        }
        } catch(SQLException ex){
            Logger.getLogger(Database.class.getName()).log(Level.SEVERE,null,ex);
        }
        return -1;
    }
}
