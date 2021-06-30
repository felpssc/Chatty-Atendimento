import { Request, Response } from "express";
import { MessagesService } from "../services/MessagesService";

interface IMessagesCreate {
  admin_id?: string;
  user_id: string;
  text: string;
}

class MessagesController {
	async create(request: Request, response: Response):Promise<Response> {
		const { admin_id, user_id, text }:IMessagesCreate = request.body;
    
		const messagesService = new MessagesService();

		try {
			const message = await messagesService.create({ admin_id, user_id, text });

			return response.json(message);
		} catch(err) {
			return response.json({ message: err.message });
		} 
	}

	async showByUser(request: Request, response: Response):Promise<Response> {
		const { user_id } = request.params;

		const messagesService = new MessagesService();

		try {
			const messages_list = await messagesService.listByUser(user_id);

			return response.json(messages_list);
		} catch(err) {
			return response.status(400).json({ message: err.message });
		}
	}
}

export { MessagesController };