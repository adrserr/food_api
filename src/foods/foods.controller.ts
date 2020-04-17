import { FoodsService } from './foods.service'
import { CreateFoodDto } from './dto/create-food.dto'
import { Controller, Get, Post, Param, Body } from '@nestjs/common'
import { Food } from './interfaces/food.interface'

@Controller('foods')
export class FoodsController {
  constructor(private foodsService: FoodsService) {}

  @Get()
  async findAll(): Promise<Food[]> {
    return this.foodsService.findAll()
  }

  @Post()
  async create(@Body() createFoodDto: CreateFoodDto) {
    this.foodsService.create(createFoodDto)
  }

  @Get(':id')
  findOne(@Param('id') id): Promise<Food | null> {
    return this.foodsService.findOne(id)
  }
}
