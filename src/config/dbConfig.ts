import { DataSource } from 'typeorm'
import { Product } from '../entity/Product'
import { User } from '../entity/User'

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'password',
  database: 'ExpressTest',
  entities: [Product, User],
  synchronize: true,
  logging: false
}
)
