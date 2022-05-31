const express = require("express");
const app = express();

const path = require("path");

const PORT = 3000;

app.listen(PORT,()=> {
    console.log ("este servidor esta corriendo");
});

const mainRoutes = require("./routes/main.js")
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

app.use("/", mainRoutes);



