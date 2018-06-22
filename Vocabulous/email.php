<?php
/*    $empf = "david.hiebl@hotmail.com";
    $betreff = "Neuen Eintrag";
    $from = "From: Vocabulous Project-Team <vocabulous12@gmail.com>\n";
    $from .= "Reply-To: vocabulous12@gmail.com\n";
    $from .= "Content-Type: text/html\n";
    $text = "<h1>Hallo Welt </h1> <p>Du hast eine neue Mail</p>";
    mail($empf, $betreff, $text, $from);*/
    if($_POST){
        $name = $_POST['form_name'];
        $email = $_POST['form_email'];
        $message = $_POST['form_msg'];
    
    //send email
        mail("david.hiebl@hotmail.com", "This is an email from:" .$email, $message);
    }
?>