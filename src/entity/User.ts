import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class User {
  constructor (username:string, password:string, role:string) {
    this.username = username
    this.password = password
    this.role = role
  };

    @PrimaryGeneratedColumn()id!:number

    @Column()username:string

    @Column()password:string

    @Column()role:string
}
