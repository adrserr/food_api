import { Document } from 'mongoose'

export interface User extends Document {
  readonly name: {
    firstName: string
    lastName: string
  }
  readonly email: string
  readonly isAccountVerified: boolean
  readonly phone: number
  readonly recipes?: string[]
  readonly password: string
}
