import { omit } from 'ramda'
import { Injectable } from '@nestjs/common'
import { UsersService } from '../users/users.service'
import { JwtService } from '@nestjs/jwt'
import * as Bcrypt from 'bcrypt'
import { User } from 'src/users/interfaces/user.interface'

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(email)
    if (user && user.password) {
      const checkPassword = await Bcrypt.compare(pass, user.password)

      if (checkPassword) {
        const result = omit(
          ['password', '_id', 'isAccountVerified'],
          user
        ) as User

        return result
      }
    }
    return null
  }

  async login(user: any) {
    const payload = { email: user.email, name: user.name }
    return {
      // eslint-disable-next-line @typescript-eslint/camelcase
      access_token: this.jwtService.sign(payload)
    }
  }
}
