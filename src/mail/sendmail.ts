import mail from "nodemailer"
import 'dotenv/config'

const transport = mail.createTransport({
    host: process.env.MAIL_HOST,
    port: 587,
    secure: false,
    auth:{
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
})
export async function sendEmailTeste(mailto: string) {
    const info = await transport.sendMail({
        from: "Teste <calieno@hotmail.com>",
        to: mailto,
        subject: "Email de teste nodemailer",
        html: "<h1>Um Teste</h1> <p>este é somente um teste de email</p> <BR>" + Date.now(),
        text: "Teste sem rederizar o HTML",
    })

    console.log("Message sent: %s", info.messageId);

}

