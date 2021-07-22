<?php
    $name=$_REQUEST['name'];
    $email=$_REQUEST['email'];
    $message=$_REQUEST['message'];

    if (($name == "") || ($email == "") || ($message == "")){
        echo "All fields are required, please fill <a href=\"\">the form</a> again.";
    }else{        
        $email_body = "User Name: $name.\n".
                        "User Email: $email.\n".
                          "User Message: $message.\n";

        $from = "From: $name<$email>\r\nReturn-path: $email";

        $subject = "Message sent using your contact form from FOODY";

        mail("tolulopetimilehin124@gmail.com", $subject, $email_body, $from);

        header("Location: contact-page.html");

        echo "Email sent!";
        } 
?>
