 <?php 
              
// enhancement for email feedback/questions
              
if(isset($_POST['submit'])){
    $to = "eylenkim@gmail.com"; 
    $from = $_POST['email']; 
    $name = $_POST['name'];
    $subject = "Art By Eylen: Email Inquiry"
    $message = $_POST['message'];

    $emailBody = $name . " sent the following message: " <br> . $message;

    $headers = "Art By Eylen - From:" . $from;

    mail($to,$subject,$emailBody,$headers);
    echo "* Mail Sent. Thank you " . $name . ", I will get in touch with you shortly.";
    
    }
?>