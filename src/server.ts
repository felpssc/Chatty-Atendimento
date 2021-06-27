import express from "express";
import "./database";
import { router } from "./routes";


const app = express();
app.use(express.json());
app.use(router);

// listen port
const port = 3338;

app.listen(port, () => {
	console.log(`🔥 Back-end started on port: ${port}`);
});