import { getCustomRepository, Repository } from "typeorm";
import { Connection } from "../entities/Connection";
import { ConnectionsRepository } from "../repositories/ConnectionsRepository";

interface IConnectionCreate {
  user_id: string;
  admin_id?: string;
  socket_id: string;
  id?: string; 
}

class ConnectionsService {
	private ConnectionsRepository: Repository<Connection>
  
	constructor() {
		this.ConnectionsRepository = getCustomRepository(ConnectionsRepository);
	}

	async create({ id, socket_id, user_id, admin_id }: IConnectionCreate):Promise<IConnectionCreate> {
		const connection = this.ConnectionsRepository.create({
			socket_id,
			user_id,
			admin_id,
			id
		});

		await this.ConnectionsRepository.save(connection);

		return connection;
	}
}

export { ConnectionsService };