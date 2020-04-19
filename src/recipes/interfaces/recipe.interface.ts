import { Food } from '../../foods/interfaces/food.interface'
import { Document } from 'mongoose'

export interface Recipe extends Document {
  readonly title: string
  readonly picture: string
  readonly description: string
  readonly dificulty: number
  readonly portions: number
  readonly time: number
  readonly ingredients: {
    food: string
    quantity: number
  }[]
  readonly steps: {
    number: number
    description: string
  }[]
}
