import express from "express";
import dotenv from "dotenv";
import routes from "./src/routes"
import cors from "cors"
import compression from "compression";

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
}))

app.use(routes())
app.use(express.json())
app.use(compression())
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ error: "Something went wrong!" });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});