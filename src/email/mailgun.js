const DOMAIN = process.env.MAILGUN_domain;
const mg = require('mailgun-js')({ apiKey: process.env.MAILGUN_apiKey, domain: DOMAIN });

const sendWelcomeEmail = (email, name) => {
    const data = {
        from: "Mailgun Sandbox <postmaster@xxxxxxx.mailgun.org>",
        to: `${email}`,
        subject: "Thanks for joining in!",
        text: `Welcome to the app, ${name}! Let me know how you get along with the app.`
    };
    mg.messages().send(data, function (error, body) {
        console.log(body);
    })
}

const sendCancelationEmail = (email, name) => {
    const data = {
        from: "Mailgun Sandbox <postmaster@xxxxxxx.mailgun.org>",
        to: `${email}`,
        subject: "Sorry to see you go!",
        text: `Goodbye, ${name}. I hope to see you back sometime soon.`
    };
    mg.messages().send(data, function (error, body) {
        console.log(body);
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}