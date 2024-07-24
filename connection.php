
<?php
error_reporting(0);
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "hospital";

    $conn = mysqli_connect($servername,$username,$password,$dbname);
    
    
    if($conn)
    {
        //echo "Connection successful\n";
    }
    else
    {
        echo "Connection failed".mysqli_connect_error();
    }

?>