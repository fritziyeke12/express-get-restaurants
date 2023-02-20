const express = require("express");
const app = express();
const {Restaurant} = require("./models/index")
const {sequelize} = require("./db");

const port = 3002;

//TODO: Create your GET Request Route Below: 
app.get("/restaurants", async (req, res) => {
    const ret = await Restaurant.findAll();
    res.json(ret);
})


app.listen(port, () => {
    sequelize.sync();
    console.log("Your server is listening on port " + port);
})