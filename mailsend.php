<html>
	<head>
		<meta charset="utf-8" />
	</head>
	<body>
		<?php
			mb_language("Japanese");
			mb_internal_encoding("UTF-8");

			$to = $_POST['to'];
			$title = $_POST['title'];
			$content = $_POST['content'];

			if(mb_send_mail($to, $title, $content)){
				echo "Mail Sent";
			} else {
				echo "Error";
			}
		?>
	</body>
</html>