const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()

const app = express();

//db接続する処理を書く
mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    })
    .then(() => console.log(`DB Connected`))
    .catch((err) => console.log("DB connection error", err))

app.get("/api/:message", (req, res) => {
    res.json({
        message: `Your message is received ${req.params.message}`
    })
})

const port = process.env.PORT

app.listen(port, () => console.log(`Sever is running is on port${port}`))

