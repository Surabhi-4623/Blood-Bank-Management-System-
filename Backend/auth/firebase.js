const admin = require('firebase-admin');
const serviceAccount = require('../config/firebase-service-account.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await admin.auth().getUserByEmail(email);
    if (user.emailVerified) {
      res.status(200).send({ message: 'Login successful', user });
    } else {
      res.status(403).send('Email not verified');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};
