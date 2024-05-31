<?php
    $email = $_POST['email'];
    $password = $_POST['password'];

    //Database connection here
    $db = mysqli_connect("localhost","root","","test");
    if($db->connect_error) {
        die("Failed to connect : .$db->connect_error");
    } else {
        $stmt = $db->prepare("select * from users where email = ?");
        $stmt->bind_param("s",$email);
        $stmt->execute();
        $stmt_result = $stmt->get_result();
        if($stmt_result->num_rows > 0) {
            $data = $stmt_result->fetch_assoc();
            if($data['password'] === $password) {
                echo"<h3>Login Successfully</h3>";
            }
        } else {
            echo "<h3>Invalid Email or password</h3>";
        }
    }

?>