export class CreateRecipeDto {
  title: string
  picture: string
  description: string
  dificulty: number
  portions: number
  time: number
  ingredients: {
    food: string
    quantity: number
  }[]
  steps: {
    number: number
    description: string
  }[]
}
