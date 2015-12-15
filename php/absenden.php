<?php

$vorname = $_POST['vorname'];
$nachname = $_POST['nachname'];
$email = $_POST['email'];
$nachricht = $_POST['nachricht'];

$empfaenger = "albanisch.fuer.anfaenger@gmail.com
";
$absendername = "Kontaktformular";
$absendermail = $email;
$betreff = "Neue Nachricht über Kontaktformular";
$text = "Es ist eine neue Nachricht über das Kontaktformular eingetroffen. Folgende Daten wurden übermittelt:
	
	Name, Vorname: ".$nachname.", ".$vorname.";
	E-Mail: ".$email."
	Nachricht: 
	".$nachricht."
mail($empfaenger, $betreff, $text, "From: $absendername <$absendermail>");

echo('Vielen Dank! 
Faleminderit! Wir melden uns schnellst möglich bei Ihnen.')

?>