import express from "express";
import mongoose from "mongoose"
import cors from "cors"
import { readdirSync } from "fs";
const morgan = require('morgan')

require('dotenv').config()


//app
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

//middleware
app.use(cors());
app.use(morgan('dev'))

//routes middleware 超えれはfsモジュールを使った読み込み式
readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)))
// routes


const port = process.env.PORT

app.listen(port, () => console.log(`Sever is running is on port${port}`))

