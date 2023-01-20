const express = require("express");
const app = express();
const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://admin:admin@cluster0.egal9tt.mongodb.net/final_project';

const client = new MongoClient(url);
const dbName = 'final_project';

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  // Pass to next layer of middleware
  if (req.method === 'OPTIONS') res.sendStatus(200);
  else next();
});

// create a server object:
app.get("/", async function(req, res) {
  const data = await global.db.collection('users').find({}).toArray();
  res.send({ data });
});

client.connect().then(() => {
  global.db = client.db(dbName);

  app.listen(80, async() => {
    console.log('http://localhost');
  })
});
