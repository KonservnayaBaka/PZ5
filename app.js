const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");
const app = express();

app.use(bodyParser.urlencoded({ estended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) =>
{
    res.send("Быть Добру!");
});

app.post("/api/data", (req, res) =>
{
    const data = req.body;
    console.log(data);
    res.send(data);
});

app.get('/html', (req, res) => 
{
    const filePath = path.join(__dirname, "index.html");
    fs.readFile(filePath, "utf8", (err, data) => 
    {
        if (err) 
        {
            res.status(500).send("Ошибка при чтении файла");
            return;
        }
        res.send(data);
    });
});


/*app.get('/html', (req, res) => { 

const filePath = path.join(__dirname, 'index.html'); // путь к файлу 

fs.readFile(filePath, 'utf8', (err, data) => { // чтение файла 

res.send(data); // отправка содержимого файла 

}); 

}); */
 
app.listen(3000, () =>
{
    console.log("Server listening on http://localhost:3000");
});