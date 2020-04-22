import { Schema } from 'mongoose'

export const RecipeSchema: Schema = new Schema(
  {
    title: { type: String, required: true, unique: true },
    picture: { type: String, required: true },
    description: { type: String, required: true },
    dificulty: { type: Number, required: true },
    portions: { type: Number, requiered: true },
    time: { type: Number, required: true },
    ingredients: [
      {
        food: {
          type: Schema.Types.ObjectId,
          ref: 'Food'
        },
        quantity: Number
      }
    ],
    steps: [{ number: Number, description: String }]
  },
  { timestamps: true }
)
