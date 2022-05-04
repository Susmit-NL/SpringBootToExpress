import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'
import signKey from '../config/signKey'

const authorization = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1]

  if (token) {
    verify(token, signKey.Key, (error, decoded) => {
      if (error) {
        return res.status(401).json({ message: error.message, error })
      } else {
        res.locals.payLoad = decoded
        next()
      }
    })
  } else {
    return res.status(401).json({ message: 'Invalid Token' })
  }
}
export default authorization
