const nodemailer = require('nodemailer');
const asunto='IJONNAWEBSITE'
module.exports = (message, res) => {
	const transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: 'ijonnathanesteban@gmail.com', // Cambialo por tu email
			pass: 'pandajona' // Cambialo por tu password
		}
	});
	const mailOptions = {
		from: message.email,
		to: 'estebanjps@hotmail.com', // Cambia esta parte por el destinatario
		subject: asunto,
		html: '<strong>Nombre: </strong> '+message.name+' <br/><a><strong>E-mail:</strong><\a> '+message.email+' <br/><strong>Mensaje:</strong> '+message.message
	};
	transporter.sendMail(mailOptions, function (err, info) {
		if (err){
			console.log(err)
			res.status(400).send('Error enviando email!');
		}else{
			console.log("Mensaje enviado")
			res.status(200).send('Mensaje enviado!');

		}
	}); 
}
