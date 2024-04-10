const admin = require('firebase-admin');
const dotenv = require('dotenv');

dotenv.config({ path: '.env' });

const serviceAccount = require("./jadiplatform-firestore.json");

const connectFirestore = async () => {
  try {
    if (!admin.apps.length) {
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
      });
      console.log(`🚀 --> 3:: Firestore is connected\n`);
    }
    const db = admin.firestore();
    return db;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { connectFirestore };