import { getCustomRepository, Repository } from "typeorm";
import { Message } from "../entities/Message";
import { MessagesRepository } from "../repositories/MessagesRepository";

interface IMessagesCreate {
  admin_id: string;
  user_id: string;
  text: string;
}

interface IMessagesList {
  messages :[Message[], number];
}

class MessagesService {

	private messagesRepository: Repository<Message>;

	constructor() {
		this.messagesRepository = getCustomRepository(MessagesRepository);
	}

	async create({ admin_id, user_id, text }: IMessagesCreate):Promise<IMessagesCreate> {

		const message = await this.messagesRepository.create({
			admin_id,
			user_id,
			text
		});

		await this.messagesRepository.save(message);
		return message;
	}

	async listByUser(user_id: string):Promise<IMessagesList> {

		const messages = await this.messagesRepository.findAndCount({
			where: { user_id },
			relations: ["user"]
		});

		return {messages};
	}
}

export { MessagesService };