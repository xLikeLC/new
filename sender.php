
<?php
    $name = $_POST['name'];
	$phone = $_POST['phone'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $text = $_POST['text'];

	$to = "xlikelk@gmail.com"; 
	$date = date ("d.m.Y"); 
	$time = date ("h:i");
	$from = $email;
	$subject = "Cerere de pe sait portfolio";

	
	$msg="
    Name: $name /n
    Subject: $subject /n
    Phone: $phone /n
    Mail: $email /n
    Текст: $text"; 	
	mail($to, $subject, $msg, "From: $from ");

?>

<p>Hello, Form Succeseful send, Thank you! </p>
