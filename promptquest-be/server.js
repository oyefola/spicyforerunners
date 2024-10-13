import express from "express";
import router from "./controllers/api.js";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json()); // for parsing application/json
app.use("/api", router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
