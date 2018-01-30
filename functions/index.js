const functions = require("firebase-functions");
const admin = require("firebase-admin");
const createUser = reuqire("./create_user");

// Set up the service client in order to access data store
const serviceAccount = require("./service_account.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://one-time-pwd-b2b7a.firebaseio.com"
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

exports.createUser = functions.https.onRequest(createUser);
