<?php
$N=$_POST['name'];
$P=$_POST['password'];
$con=mysqli_connect("sql213.unaux.com","unaux_33990277","1zlpcl9a","unaux_33990277_V_THILAK");
$sql="INSERT INTO login(Name,Password) values('$N','$P')";
mysqli_query($con,$sql);
?>