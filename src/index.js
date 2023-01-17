const express = require("express");
const app = express();

//create a server object:
app.get("/", function(req, res) {
  res.send({ data: [1,2,3]});
});

app.listen(80, function() {
  console.log("server running on 80");
}); //the server object listens on port 8080
