const express = require("express");
const app = express();
const {Restaurant} = require("./models/index")
const {sequelize} = require("./db");

const port = 3000;

//TODO: Create your GET Request Route Below: 

app.use(express.json());

app.get("/restaurants", async (req, res) => {
    const ret = await Restaurant.findAll();
    res.json(ret);
})

app.get('/restaurants/:id', async (req, res) => {
    const rest = await Restaurant.findByPk(req.params.id);
    res.json(rest);
})

app.post('/restaurants/add', async (req, res) => {
    const rest = await Restaurant.create(req.body);
    const all = await Restaurant.findAll();
    res.send(all);
})

app.put('/restaurants/:id', async (req, res) => {
    const rest = await Restaurant.findByPk(req.params.id);
    await rest.update(req.body);
    res.send(rest);
})

app.delete('/restaurants/:id', async (req, res) => {
    await Restaurant.destroy({
        where: {
            id: req.params.id
        }
    })
    const all = await Restaurant.findAll();
    res.send(all);
})

app.listen(port, () => {
    sequelize.sync();
    console.log(`Server listening on http://localhost:${port}`);
})