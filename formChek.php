<?php 

   if (!isset($_POST['msg'])){
       $entete  = 'MIME-Version: 1.0' . "\r\n";
       $entete .= 'Content-type: text/html; charset=utf-8' . "\r\n";
       $entete .= 'From: webmaster@monsite.fr' . "\r\n";
       $entete .= 'Reply-to: ' . $_POST['email'];
       $message = '<h1>Message envoyé depuis ma page Contact de contact</h1>
       <p><b>Email : </b>' . $_POST['msg'] ; 
       mail('salahhamza@gmail.com','Repondre a :',$message,$entete);
   } 

   @include_once('index.html');