import { Request, Response, NextFunction } from 'express'
import { UserRepository } from '../repository/UserRepository'

const checkRoles = (roles :Array<string | undefined>) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const userId = res.locals.payLoad.userId
    const userName = res.locals.payLoad.username
    const user = await new UserRepository().findUser(userName, userId)
    if (roles.indexOf(user?.role) > -1) {
      next()
    } else {
      res.status(403).json({ message: 'Access denied' }).send()
    }
  }
}

export default checkRoles
