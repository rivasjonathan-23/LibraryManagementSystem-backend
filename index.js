const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
const cors = require("cors")
const mongoose = require("mongoose")

mongoose.connect("mongodb://ionic-angular-db:ionic-angular-db@cluster0-shard-00-00.pzv9e.mongodb.net:27017,cluster0-shard-00-01.pzv9e.mongodb.net:27017,cluster0-shard-00-02.pzv9e.mongodb.net:27017/library-management-system?ssl=true&replicaSet=atlas-i3x8dw-shard-0&authSource=admin&retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

var db = mongoose.connection;
db.on("connected", () => {
    console.log("connected to database");
});
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use("/", require("./routes/mainRoutes"));


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})