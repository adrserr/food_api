import { NestFactory } from '@nestjs/core'
import * as fs from 'fs'
import { AppModule } from './app.module'

async function bootstrap() {
  const httpsOptions = {
    key: fs.readFileSync('./secrets/server.key'),
    cert: fs.readFileSync('./secrets/server.crt')
  }
  const app = await NestFactory.create(AppModule, { httpsOptions })
  const port = process.env.API_PORT
  await app.listen(port)
  console.log(`Application is running on port: ${port}`)
}
bootstrap()
