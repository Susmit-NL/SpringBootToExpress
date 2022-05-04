import { Request, Response } from 'express'
import { UserRepository } from '../repository/UserRepository'
import { generateToken } from '../util/jwtToken'

export class UserController {
  userRepository = new UserRepository()

  async login (req: Request, res: Response) {
    const { username, password } = req.body
    const user = await this.userRepository.findUser(username, undefined)
    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    if (password !== user.password) {
      return res.status(401).json({ message: 'password mismatch' })
    } else {
      const jwtToken = generateToken(user)
      return res.status(200).json({ message: 'Login Successfull', token: jwtToken })
    }
  }
}
