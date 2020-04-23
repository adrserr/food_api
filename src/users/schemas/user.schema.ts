import { Schema } from 'mongoose'
import * as mongooseUniqueValidator from 'mongoose-unique-validator'

export const UserSchema: Schema = new Schema(
  {
    name: {
      type: {
        firstName: { type: String, trim: true },
        lastName: { type: String, trim: true }
      },
      index: true,
      required: true
    },
    email: {
      type: String,
      lowercase: true,
      required: [true, "can't be blank"],
      match: [/\S+@\S+\.\S+/, 'is invalid'],
      index: true,
      unique: true
    },
    isAccountVerified: { type: Boolean, required: true },
    accessLevel: { type: Number, required: true },
    phone: { type: Number, required: true, match: [/[0-9]{9}/] },
    recipes: [{ type: Schema.Types.ObjectId, ref: 'Recipe' }],
    password: { type: String, required: [true, "can't be blank"] }
  },
  { timestamps: true }
)

UserSchema.plugin(mongooseUniqueValidator, { message: 'is already taken' })
