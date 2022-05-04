import * as joi from '@hapi/joi'

export const productSchema = joi.object().keys({
  name: joi.string().min(2).max(50).required(),
  price: joi.number().min(1).required(),
  inventory: joi.number().min(1).required(),
  description: joi.string().min(1).max(20).required()

})

export const userSchema = joi.object().keys({
  username: joi.string().min(2).max(50).required(),
  password: joi.string().min(1).max(20).required()
})
