import { MongooseModule } from '@nestjs/mongoose'
import { Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('database.url')
      }),
      inject: [ConfigService]
    })
  ],
  exports: [MongooseModule]
})
export class DatabaseModule {}
