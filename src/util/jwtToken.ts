import { sign } from 'jsonwebtoken'
import signKey from '../config/signKey'
import { User } from '../entity/User'

// generating tokens for given payLoad

export const generateToken = (user :User) => {
  return sign({ userId: user.id, username: user.username }, signKey.Key,
    { algorithm: 'HS256', expiresIn: '1h' })
}
