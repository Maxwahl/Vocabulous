/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package lib.utils;

import java.util.List;
import java.util.Properties;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import lib.Model.Repository;
import lib.Model.User;

/**
 *
 * @author mexxw
 */
public class MailSender {

    public static int sendEmail(User u, String type) {
        if(type.equals("registration")){
            return sendWelcomeMail(u);
        }
        else if(type.equals("recovery")){
            return sendRecoveryMail(u);
        }
        return 0;
    }

    private static int sendWelcomeMail(User u) {
        String msg = "Hi! Thanks for registering!\n" +
"With this email, we just want to tell you that everything was successful with your registration!\n" +
"Your Vocabulous Team";
        String subject="A warm Welcome";
        return send(u.getEmail(),subject,msg);
    }

    private static int sendRecoveryMail(User u) {
        String msg = "Oh! Seems like you forgot your account details ... No problem! Here are all your accounts listed:\n";
        List<User> accounts = Repository.getInstance().getAccountsWithMail(u.getEmail());
        for(int i = 0;i<accounts.size();i++){
            msg+="Account "+(i+1)+":\n";
            msg+="Username : "+accounts.get(i).getUsername()+"\n";
            msg+="Password : "+accounts.get(i).getPassword()+"\n\n";            
        }
        String subject="Account Recovery";
        return send(u.getEmail(),subject,msg);
    }

    private static int send(String email,String subject, String msg) {
        final String username = "Vocabulous12@gmail.com";
		final String password = "SypVocabulous";

		Properties props = new Properties();
		props.put("mail.smtp.auth", "true");
		props.put("mail.smtp.starttls.enable", "true");
		props.put("mail.smtp.host", "smtp.gmail.com");
		props.put("mail.smtp.port", "587");

		Session session = Session.getInstance(props,
		  new javax.mail.Authenticator() {
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication(username, password);
			}
		  });

		try {

			Message message = new MimeMessage(session);
			message.setFrom(new InternetAddress("Vocabulous12@gmail.com"));
			message.setRecipients(Message.RecipientType.TO,
				InternetAddress.parse(email));
			message.setSubject(subject);
			message.setText(msg);
			Transport.send(message);
		} catch (MessagingException e) {
                    System.err.println("Was not able to send mail");
                    return -1;
		}
                return 0;
    }
    
}
