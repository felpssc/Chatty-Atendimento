import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";

class UsersService {

	private usersRepository: Repository<User>;
	
	constructor() {
		this.usersRepository = getCustomRepository(UsersRepository);
	}

	async create(email : string):Promise<User> {

		const userAlreadyExists = await this.usersRepository.findOne({ email });

		if(userAlreadyExists) {
			return userAlreadyExists;
		}

		const user = await this.usersRepository.create({ email });

		await this.usersRepository.save(user);
    
		return user;
	}

	async findByEmail(email: string):Promise<User> {
		const user = await this.usersRepository.findOne({
			email,
		});
		return user;
	}

}

export { UsersService };