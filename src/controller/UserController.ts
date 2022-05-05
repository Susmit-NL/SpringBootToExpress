import { Request, Response } from 'express'
import { UserRepository } from '../repository/UserRepository'
import { generateToken } from '../util/jwtToken'
import { User } from '../entity/User'
import * as bcrypt from 'bcryptjs'

export class UserController {
  userRepository = new UserRepository()

  async login (req: Request, res: Response) {
    const { username, password } = req.body
    const user = await this.userRepository.findUser(username, undefined)
    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }
    if (!await bcrypt.compare(password, user.password)) {
      return res.status(401).json({ message: 'password mismatch' })
    } else {
      const jwtToken = generateToken(user)
      return res.status(200)
        .json({ message: 'Login Successfull', token: jwtToken })
    }
  }

  async register (req: Request, res: Response) {
    const { username, password } = req.body
    let user = await this.userRepository.findUser(username, undefined)
    if (!user) {
      user = await this.userRepository.createUser(new User(username, await bcrypt.hash(password, 10), 'USER'))
      res.status(201).json({ message: 'User created successfully', body: user }).send()
    } else {
      return res.status(404).json({ message: 'User already exists' })
    }
  }
}
