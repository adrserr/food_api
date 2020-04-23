import { ConfigService } from '@nestjs/config'
import { Injectable, BadRequestException } from '@nestjs/common'
import { User } from './interfaces/user.interface'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import * as bcrypt from 'bcrypt'
import { CreateUserDto } from './dto/create-user.dto'

@Injectable()
export class UsersService {
  constructor(
    private configService: ConfigService,
    @InjectModel('User') private userModel: Model<User>
  ) {}

  async findOne(email: string): Promise<User | undefined> {
    return this.userModel.findOne({ email }).exec()
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec()
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    createUserDto.isAccountVerified = false
    createUserDto.accessLevel = 2

    // Encrypt user's password usin bcrypt
    const salt = this.configService.get<string>('auth.salt')
    createUserDto.password = await bcrypt.hash(
      createUserDto.password,
      salt ? Number(salt) : 12
    )

    try {
      const createdUser = new this.userModel(createUserDto)
      return await createdUser.save()
    } catch (error) {
      throw new BadRequestException(error)
    }
  }
}
