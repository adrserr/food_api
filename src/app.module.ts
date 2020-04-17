import { DatabaseModule } from './database/database.module'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { FoodsModule } from './foods/foods.module'
import configuration from './config/configuration'

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      expandVariables: true,
      isGlobal: true
    }),
    DatabaseModule,
    FoodsModule
  ]
})
export class AppModule {}
