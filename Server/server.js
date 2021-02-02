const express = require('express');
require('dotenv').config()

const app = express();

app.get("/api/:message", (req, res) => {
    res.json({
        message: `Your message is received ${req.params.message}`
    })
})

const port = process.env.PORT

app.listen(port, () => console.log(`Sever is running is on port${port}`))

