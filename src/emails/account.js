const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'jonas.zeut@gmail.com',
        subject: 'Thanks for joining!',
        text: `Welcome to the app ${name}. Let me know how you like the app`,
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'jonas.zeut@gmail.com',
        subject: 'Your account has been canceled',
        text: `Goodbye ${name}. We hope to see you back soon.`,
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail,
}
