const express = require("express");

const mongoose = require("mongoose");
const routes   = require("./routes");;
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://user1:password1@ds017193.mlab.com:17193/heroku_phft3tb1", { useNewUrlParser: true });

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
