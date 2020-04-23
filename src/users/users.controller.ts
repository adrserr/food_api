import { UsersService } from './users.service'
import { Controller, Get, Param, Post, Body } from '@nestjs/common'
import { User } from './interfaces/user.interface'
import { CreateUserDto } from './dto/create-user.dto'

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll()
  }

  @Get(':email')
  async findOne(@Param('email') email: string): Promise<User> {
    return this.userService.findOne(email)
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    this.userService.create(createUserDto)
  }
}
