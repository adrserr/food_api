import { DatabaseModule } from './database/database.module'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { FoodsModule } from './foods/foods.module'
import { RecipesModule } from './recipes/recipes/recipes.module';
import configuration from './config/configuration'

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      expandVariables: true,
      isGlobal: true
    }),
    DatabaseModule,
    FoodsModule,
    RecipesModule
  ]
})
export class AppModule {}
