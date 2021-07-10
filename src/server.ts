import { http } from "./http";
import "./websocket/client";

// listen port
const port = 3338;

http.listen(port, () => {
	console.log(`🔥 Back-end started on port: ${port}`);
});