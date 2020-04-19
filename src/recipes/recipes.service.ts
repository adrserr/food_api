import { CreateRecipeDto } from './dto/create-recipe.dto'
import { InjectModel } from '@nestjs/mongoose'
import { Injectable } from '@nestjs/common'
import { Model } from 'mongoose'
import { Recipe } from './interfaces/recipe.interface'

@Injectable()
export class RecipesService {
  constructor(@InjectModel('Recipe') private recipeModel: Model<Recipe>) {}

  async findAll(): Promise<Recipe[]> {
    return this.recipeModel
      .find()
      .populate('ingredients.food', 'name')
      .exec()
  }

  async create(createRecipeDto: CreateRecipeDto): Promise<Recipe> {
    const createdRecipe = new this.recipeModel(createRecipeDto)
    return createdRecipe.save()
  }
}
