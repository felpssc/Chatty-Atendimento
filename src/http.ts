import express from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import path from "path";

import "./database";
import { router } from "./routes";


const app = express();

app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "..", "public"));
// eslint-disable-next-line @typescript-eslint/no-var-requires
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.get("/pages/client", (request, response) => {
	return response.render("html/client.html");
});


const http = createServer(app); // Criando protocolo HTTP.
const io = new Server(http);	// Criando protocolo WebSocket.

io.on("connection", (socket: Socket) => {
	console.log(`connection: ${socket.id}`);
});

app.use(express.json());
app.use(router);

export { http, io };