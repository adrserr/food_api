import { NestFactory } from '@nestjs/core'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import * as fs from 'fs'
import { AppModule } from './app.module'

async function bootstrap() {
  const httpsOptions = {
    key: fs.readFileSync('./secrets/server.key'),
    cert: fs.readFileSync('./secrets/server.crt')
  }
  const app = await NestFactory.create(AppModule, { httpsOptions })
  const port = process.env.API_PORT

  // Swagger options
  const options = new DocumentBuilder()
    .setTitle('Food API')
    .setDescription(
      'API to store foods and recipes with all its nutritional parameters'
    )
    .setVersion('0.1.0')
    .addTag('food')
    .build()
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('api', app, document)

  // Run server
  await app.listen(port)
  console.log(`Application is running on port: ${port}`)
}
bootstrap()
