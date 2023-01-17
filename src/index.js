const express = require("express");
const app = express();

//create a server object:
app.get("/", function(req, res) {
  res.send({ data: [1,2,3]});
});

app.listen(8080, function() {
  console.log("server running on 8080");
}); //the server object listens on port 8080
