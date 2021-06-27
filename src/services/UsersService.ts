import { getCustomRepository } from "typeorm";
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";

class UsersService {
	async create(email : string):Promise<User> {
		const usersRepository = getCustomRepository(UsersRepository);

		const userAlreadyExists = await usersRepository.findOne({ email });

		if(userAlreadyExists) {
			return userAlreadyExists;
		}

		const user = await usersRepository.create({ email });

		await usersRepository.save(user);
    
		return user;
	}
}

export { UsersService };