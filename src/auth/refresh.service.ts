import { omit } from 'ramda'
import { ConfigService } from '@nestjs/config'
import { Injectable } from '@nestjs/common'
import * as Jwt from 'jsonwebtoken'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class RefreshService {
  private tokens: string[] = []
  private refreshSecret: string
  private refreshExpiry: string

  constructor(
    private configService: ConfigService,
    private jwtService: JwtService
  ) {
    this.refreshSecret = this.configService.get<string>('auth.refreshSectet')
    this.refreshExpiry = this.configService.get<string>('auth.refreshTokenLife')
  }

  public sign(
    payload: string | object | Buffer,
    options?: Jwt.SignOptions
  ): string {
    const token = Jwt.sign(payload, this.refreshSecret, {
      expiresIn: this.refreshExpiry,
      ...options
    })
    // Store token
    this.tokens.push(token)

    return token
  }

  public validateToken(token: string, options?: Jwt.VerifyOptions): boolean {
    const index = this.tokens.indexOf(token)

    if (index !== -1) {
      try {
        Jwt.verify(token, this.refreshSecret, options)
        return true
      } catch (error) {
        return false
      }
    }
  }

  public refreshToken(
    token: string,
    options?: Jwt.VerifyOptions
  ): object | null {
    const isValid = this.validateToken(token, options)

    if (isValid) {
      const index = this.tokens.indexOf(token)
      // Delete old token
      this.tokens.splice(index, 1)

      const tkn = Jwt.verify(token, this.refreshSecret, {
        ignoreExpiration: false,
        ...options
      })
      if (tkn) {
        const payload = omit(['iat', 'exp'], tkn)
        return {
          // eslint-disable-next-line @typescript-eslint/camelcase
          access_token: this.jwtService.sign(payload),
          // eslint-disable-next-line @typescript-eslint/camelcase
          refresh_token: this.sign(payload)
        }
      }
    }
    return null
  }
}
