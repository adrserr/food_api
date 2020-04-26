import { ApiProperty } from '@nestjs/swagger'

class Step {
  @ApiProperty()
  number: number
  @ApiProperty()
  description: string
}

class Ingredient {
  @ApiProperty()
  food: string
  @ApiProperty()
  quantity: number
}
export class CreateRecipeDto {
  @ApiProperty()
  title: string
  @ApiProperty()
  picture: string
  @ApiProperty()
  description: string
  @ApiProperty()
  dificulty: number
  @ApiProperty()
  portions: number
  @ApiProperty()
  time: number
  @ApiProperty({ type: [Ingredient] })
  ingredients: Ingredient[]
  @ApiProperty({ type: [Step] })
  steps: Step[]
}
