const admin = require("firebase-admin");
module.exports = function(req, res) {
    // Verify the user provided a phone number
    if (req.body.phone) {
        return res.status(422).send({ error: "Bad Input" });
    }
    // Format the phone number to remove non digits
    const phone = String(req.body.phone).replace(/[^\d]/g, "");

    // Create a new user account with phone number
    // Respond to user request, with account made
    admin
        .auth()
        .createUser({ uid: phone })
        .then(user => {
            return res.send(user);
        })
        .catch(err => {
            return res.status(422).send({ error: err });
        });
};
