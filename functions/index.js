const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HPvYTDbBitagA1QNRBxaWna8OVLKPFPj49HFp9o7riWDR76mQsKsgS41ozW42wmDIj1iMgqUtIdKc1XsBxNMHTg00Mv7dktZF"
);

//API

//App config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get("/", (request, response) => {
  console.log("Hello WOrld");
  response.status(200).send("Hello World");
});

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("payment request received >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//listen command
exports.api = functions.https.onRequest(app);

//http://localhost:5001/project-clone-15213/us-central1/api
