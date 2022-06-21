const express = require('express');
const app = express();
const Student = require('./models/students');

const port = process.env.PORT || 8080;
const mongoose = require('./db/db');
app.use(express.json())


app.get('/', (req, res) => {
    res.send('root route');
})

app.post('/students', (req, res) => {
    // res.send('Hello Students');
    console.log(req.body)
    const user = new Student(req.body);
    user.save().then(() => {
        res.status(201).send(user);
    }).catch(err => {
        console.log(err)
    })


})




app.listen(port, () => {
    console.log(`Server Running on http://localhost:${port}/ `)
})