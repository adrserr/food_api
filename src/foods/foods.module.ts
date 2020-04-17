import { FoodSchema } from './schemas/food.schema'
import { Module } from '@nestjs/common'
import { FoodsController } from './foods.controller'
import { FoodsService } from './foods.service'
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Food', schema: FoodSchema }])],
  controllers: [FoodsController],
  providers: [FoodsService]
})
export class FoodsModule {}
