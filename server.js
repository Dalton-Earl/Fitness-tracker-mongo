const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://user:password1@ds257097.mlab.com:57097/heroku_r75jx4g7", {
  useNewUrlParser: true,
  useFindAndModify: false,
   useUnifiedTopology: true 
});

// routes
app.use(require("./routes/api.js"));
require("./routes/htmlRoutes.js")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});