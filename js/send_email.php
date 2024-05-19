<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    $to = "harshtejani100.com"; // Change this to your email address
    $subject = "New Contact Form Submission";
    $body = "Name: $name\nEmail: $email\nMessage: $message";
    $headers = "From: $email";
    
    if (mail($to, $subject, $body, $headers)) {
        http_response_code(200); // OK
    } else {
        http_response_code(500); // Internal Server Error
    }
} else {
    http_response_code(405); // Method Not Allowed
}
?>
