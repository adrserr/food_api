import { CreateFoodDto } from './dto/create-food.dto'
import { Injectable } from '@nestjs/common'
import { Food } from './interfaces/food.interface'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

@Injectable()
export class FoodsService {
  private readonly foods: Food[] = []

  constructor(@InjectModel('Food') private foodModel: Model<Food>) {}

  async create(createFoodDto: CreateFoodDto): Promise<Food> {
    const createdFood = new this.foodModel(createFoodDto)
    return createdFood.save()
  }

  async findAll(): Promise<Food[]> {
    return this.foodModel.find().exec()
  }

  async findOne(id: number): Promise<Food | null> {
    return this.foodModel.findOne({ id }).exec()
  }
}
