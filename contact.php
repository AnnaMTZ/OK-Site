<?php

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $mailFrom = $_POST['mail'];
    $message = $_POST['message'];

  if (empty($name) || empty($subject) || empty($mailFrom) || empty($message)) {
    echo "Please fill in the form";
   } else {

         if (!filter_var($mailFrom, FILTER_VALIDATE_EMAIL)) {
    echo "Invalid e-mail";
        } else {

    $mailTo = "iryna@oekraiensekeuken.nl";
    $headers = "From: ".$mailFrom;
    $txt = "You have received an e-mail from ".$name.".\n\n".$message;
    
    mail($mailTo, $subject, $txt, $headers);
    header("Location: index.php?mailsent"); 
    }
  }
} 