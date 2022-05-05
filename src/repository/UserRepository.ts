import { AppDataSource } from '../config/dbConfig'
import { User } from '../entity/User'
export class UserRepository {
  userRepository = AppDataSource.getRepository(User)

  async findUser (name:string | undefined, userId:number |undefined) {
    return this.userRepository.findOneBy({ username: name, id: userId })
  }

  async createUser (user : User) {
    return this.userRepository.save(user)
  }
}
