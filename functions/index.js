const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors({origin: true}));

// Firebase config (kept secure on server)
const firebaseConfig = {
  apiKey: "AIzaSyAKpW-4HFy1nFGiOXRmmPz7IR0_IIBPiWI",
  authDomain: "solveoai.firebaseapp.com",
  projectId: "solveoai",
  storageBucket: "solveoai.firebasestorage.app",
  messagingSenderId: "585357991980",
  appId: "1:585357991980:web:20a84632fbc3e003ed7189",
  measurementId: "G-H5XTJRZ35T",
};

// Expose this via GET route
app.get("/get-firebase-config", (req, res) => {
  console.log("Config request from:", req.headers["user-agent"]);
  setTimeout(() => {
    res.status(200).json(firebaseConfig);
  }, 300);
});

// Export the Express app as a Firebase Function
exports.api = functions.https.onRequest(app);
