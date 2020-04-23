import { JwtAuthGuard } from './auth/guards/jwt-auth.guard'
import { AuthService } from './auth/auth.service'
import { LocalAuthGuard } from './auth/guards/local-auth.guard'
import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common'

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user)
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user
  }
}
