const express = require("express");
const logger = require("morgan");
const compression = require("compression");
const mongoose = require("mongoose");

const PORT = 3001;
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(compression());

// routes
app.use(require("./routes/api.js"));
app.use(logger("dev"));

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/workout",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
