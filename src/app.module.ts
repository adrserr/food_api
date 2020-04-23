import { ConfigModule } from '@nestjs/config'
import { DatabaseModule } from './database/database.module'
import { Module } from '@nestjs/common'
import { FoodsModule } from './foods/foods.module'
import { RecipesModule } from './recipes/recipes.module'
import { AuthModule } from './auth/auth.module'
import { UsersModule } from './users/users.module'
import { AppController } from './app.controller'
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
    RecipesModule,
    AuthModule,
    UsersModule
  ],
  controllers: [AppController]
})
export class AppModule {}
