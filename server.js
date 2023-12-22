const express = require("express");
const app = express();

app.use(function (req, res, next) {
  var date = new Date();
  let day = date.getDay();
  let hour = date.getHours();

  if (day > ___ && day < ___ && hour > ___ && hour < ___) {
    next();
  } else {
    res.send("This website works only on weekdays and work time");
  }
});

app.use(express.static("public"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, (err) =>
  err ? console.log(err) : console.log(`Server is running on port ${PORT}`)
);
