// contact-form/src/mailer.php

<?php
    // Only process POST requests.
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
      // Get email address from '.credentials' file in the root
     //   $credentialsFile = fopen(".credentials","r");
      $myEmail = 'info@hangartarim.com';

      // Get the form fields and remove any potential whitespace.
      $name = strip_tags(trim($_POST["inputName"]));
      $name = str_replace(array("\r","\n"),array(" "," "),$name);
      $email = filter_var(trim($_POST["inputEmail"]), FILTER_SANITIZE_EMAIL);
      $textArea = trim($_POST["inputMessage"]);
      $tel = trim($_POST["inputTel"]);
      $company = trim($_POST["inputCompany"]);

  
      // Check that data was sent to the mailer.
     if ( empty($name) OR empty($textArea) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Set a 400 (bad request) response code and exit.
        //http_response_code(400);
        echo "Oops! There was a problem with your submission. Please complete the form and try again.";
        exit;
      }

      // Set the recipient email address.
      $to = "$myEmail";

      // Set the email subject.
      $subject = "New Message";
      
      // Build the email headers.
 
      $headers = "From: " . strip_tags('Hangar Tarım') . "\r\n";
      $headers .= "Reply-To: ". strip_tags($email) . "\r\n";
      $headers .= "MIME-Version: 1.0\r\n";
      $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

      // Build the email content.
 


    $message  =  "<body>";
    $message .=    "<div style='margin-bottom:100px;'>";
      $message .=    "<div style='width: 100%;display: flex;justify-content:center'>";
      $message .=       "<img style='margin:auto;max-height:40px; width:auto;margin-bottom:40px;margin-top:40px' src='http://hangartarim.com/static/media/Dark.png' alt='Website Change Request' />";
      $message .=     "</div>";
      $message .=    "<div style='width:100%; max-width:360px; display:flex; flex-direction:column; align-items:center; font-family:Avenir; margin:auto;'>";
      $message .=      "<h1 style='font-size: 24px;margin-bottom: 0;margin-top: 0;font-family: avenir;'>You have a new message</h1>";
      $message .=      "<div style='margin-top: 32px;'>";
      $message .=          "<div style='display:flex; margin:auto'>";
      $message .=              "<h4 style='margin-top: 16px;margin-bottom: 16px;margin-right: 0px;color: #d0021b;min-width: 105px;padding-top:10px;'>Company:</h4>";
      $message .=              "<p style='margin-bottom: 0; align-self:center'>$company</p>";
      $message .=          "</div>";
      $message .=          "<div style='display:flex; margin:auto'>";
      $message .=              "<h4 style='margin-top: 16px;margin-bottom: 16px;margin-right: 0px;color: #d0021b;min-width: 105px;padding-top:10px; '>Name:</h4>";
      $message .=              "<p style='margin-bottom: 0; align-self:center'>$name</p>";
      $message .=          "</div>";
      $message .=          "<div style='display:flex; margin:auto'>";
      $message .=              "<h4 style='margin-top: 16px;margin-bottom: 16px;margin-right: 0px;color: #d0021b;min-width: 105px;padding-top:10px;'>Email:</h4>";
      $message .=              "<p style='margin-bottom: 0; align-self:center'>$email</p>";
      $message .=          "</div>";
      $message .=          "<div style='display:flex; margin:auto'>";
      $message .=              "<h4 style='margin-top: 16px;margin-bottom: 16px;margin-right: 0px;color: #d0021b;min-width: 105px;padding-top:10px;'>Tel:</h4>";
      $message .=              "<p style='margin-bottom: 0; align-self:center'>$tel</p>";
      $message .=          "</div>";
      $message .=          "<div style='margin:auto'>";
      $message .=              "<h4 style='margin-top: 16px;margin-bottom: 16px;margin-right: 0px;color: #d0021b;'>Message:</h4>";
      $message .=              "<p style='margin-bottom: 0; align-self:center'>$textArea</p>";
      $message .=          "</div>";
      $message .=     " </div>";
      $message .=   "</div>";
    $message .=   "</div>";
    $message .=   "</body>";







      // Send the email.
      if (mail($to, $subject, $message, $headers)) {
        // Set a 200 (okay) response code.
        //http_response_code(200);
        echo "Thank You! Your message has been sent.";
      } else {
        // Set a 500 (internal server error) response code.
        //http_response_code(500);
        echo "Oops! Something went wrong and we couldn\"t send your message.";
      }

    } else {
      // Not a POST request, set a 403 (forbidden) response code.
      //http_response_code(403);
      echo "There was a problem with your submission, please try again.";
    }
?>