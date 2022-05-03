import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Product {
  constructor (name:string, price:number, inventory:number,
    description:string) {
    this.name = name
    this.description = description
    this.inventory = inventory
    this.price = price
  };

    @PrimaryGeneratedColumn()id!:number

    @Column()name:string

    @Column()price:number

    @Column()inventory:number

    @Column()description:string
}
