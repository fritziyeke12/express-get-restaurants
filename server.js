const express = require("express");
const app = express();
const {Restaurant} = require("./models/index")
const {sequelize} = require("./db");

const port = 3000;

//TODO: Create your GET Request Route Below: 
app.get("/restaurants", async (req, res) => {
    const ret = await Restaurant.findAll();
    res.json(ret);
})

app.get('/restaurants/:id', async (req, res) => {
    const rest = await Restaurant.findByPk(req.params.id);
    res.json(rest);
})

app.listen(port, () => {
    sequelize.sync();
    console.log(`Server listening on http://localhost:${port}`);
})