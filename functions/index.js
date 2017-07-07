const functions = require('firebase-functions')
const admin = require('firebase-admin')
const gmailSend = require('gmail-send')

// This line configures the Firebase Admin SDK automatically when deployed on a
// Cloud Functions environment. This set ups authentication!
admin.initializeApp(functions.config().firebase)

exports.sendNotificationEmail = functions.database
  //Triggers when a write is detected in the database with this structure
  .ref('/questions/{questionId}')
  .onWrite(event => {
    // Grabs the value just added inside questionId, a JS object
    const question = event.data.val()
    // it will appear in your Firebase console
    console.log(question)

    // You may use almost any option available in nodemailer,
    // but if you need fine tuning you should use nodemailer directly.
    return gmailSend({
      user: functions.config().gmail.user, // A Gmail account with 2-step verification
      pass: functions.config().gmail.pass, // Gmail App password, https://security.google.com/settings/security/apppasswords?utm_source=OGB&pli=1
      to: functions.config().gmail.user, // Send it back to yourself
      text: JSON.stringify(question), // Stringify it, toString returns Object object
      subject: "Rose's Daycare, question"
    })()
  })
