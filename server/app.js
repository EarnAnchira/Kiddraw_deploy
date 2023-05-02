import router from "./routes/router.js";

const express = require("express")
const app = express();
// port server
const port = 3001; 
require("./db/conn");

const cors = require("cors")
// const router = require("./routes/router")

app.use(express.json());
app.use(express.static('public'));
app.use(cors());
app.use("/uploads",express.static("./uploads"))
app.use("/api/v1",router);

app.get("/getdata", (req, res) => {
    const query = req.query.q;
    try {
        conn.query(`SELECT * FROM Story WHERE StoryTitleEng LIKE '%${query}'`, (err, result) => {
            if (err) {
                console.log("error")
            } else {
                console.log("data get")
                res.status(201).json({ status: 201, data: result })
            }
        })
    } catch (error) {
        res.status(422).json({ status: 422, error })
    }
});

app.listen(process.env.PORT||port,()=>{
    console.log("server start")
})