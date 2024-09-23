const express = require("express");
const app = express();

const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(5553, server);

const cors = require("cors");
const mongoose = require("mongoose");

const routerForce = require("./routes/force.js");
const routerUser = require("./routes/user.js");
const routerSoldier = require("./routes/soldier.js");
const routerTest = require("./routes/test.js");
const routerResult = require("./routes/result.js");

app.use(express.static("public"));
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/HemiDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

io.on("connection", function (socket) {
    // do nothing
});

app.use("/api/Results", routerResult);
app.use("/api/Users", routerUser);
app.use("/api/Soldiers", routerSoldier);
app.use("/api/Test", routerTest);
app.use("/api/Force", routerForce);

app.listen(5022);


module.exports = {io}