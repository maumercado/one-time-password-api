const twilio = require("twilio");
const twilioConfig = require("./twilio_account.json");

const accountSid = twilioConfig.accountSid;
const authToken = twilioConfig.authToken;

module.exports = new twilio.Twilio(accountSid, authToken);
