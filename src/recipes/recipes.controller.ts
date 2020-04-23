import { Controller, Get, Post, Body } from '@nestjs/common'
import { RecipesService } from './recipes.service'
import { Recipe } from './interfaces/recipe.interface'
import { CreateRecipeDto } from './dto/create-recipe.dto'

@Controller('recipes')
export class RecipesController {
  constructor(private recipeService: RecipesService) {}

  @Get()
  async findAll(): Promise<Recipe[]> {
    return this.recipeService.findAll()
  }

  @Post()
  async create(@Body() createRecipeDto: CreateRecipeDto) {
    this.recipeService.create(createRecipeDto)
  }
}
