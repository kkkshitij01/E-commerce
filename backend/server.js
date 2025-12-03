import express from "express"
import cors from "cors"
import "dotenv/config"

// APP CONFIG
const app = express();
const port = process.env.PORT || 4000;

//MIDDLEWARE
app.use(express.json());
app.use(cors());

//endPoint
app.get("/", (req, res) => {
    res.send("API WORKING");
})

app.listen(port, () => {
    console.log(`server started on ${port}`)
})