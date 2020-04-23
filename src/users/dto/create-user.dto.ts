export class CreateUserDto {
  name: {
    firstName: string
    lastName: string
  }
  email: string
  phone: number
  password: string
  isAccountVerified: boolean
  accessLevel: number
}
