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

    static void changeChapterName(int uID, String nn) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
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
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    void changeUser(int uID, String user, String pw, String fN, String lN, String email, String birthDate, String inst) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    void deleteTheme(int id) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    int addTheme(int owner, String name, String hBG, String mFC, String hFC, String cABG, String mNC, String mBG, String mNF, String cBG, String cHL, String pF) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    void changeTheme(int id, String name, String hBG, String mFC, String cABG, String mNC, String mBG, String mNF, String cBG, String cHL, String pF) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    int addChapter(int uID, String cName) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    void deleteChapter(int id) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    void deleteVocab(int id) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    void copyChapter(Chapter copied) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
}
