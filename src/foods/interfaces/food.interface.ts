import { Document } from 'mongoose'

export interface Food extends Document {
  readonly id: number
  readonly name: string
  readonly ediblePortion: number
  readonly energy: number
  readonly water: number
  readonly protein: number
  readonly animalProtein: number
  readonly vegetalProtein: number
  readonly lipids: number
  readonly saturatedFat: number
  readonly monounsaturatedFat: number
  readonly polyunsaturatedFat: number
  readonly cholesterol: number
  readonly glycide: number
  readonly sugar: number
  readonly polysaccharide: number
  readonly fiber: number
  readonly ethanol: number
  readonly sodium: number
  readonly potassium: number
  readonly calcium: number
  readonly magnesium: number
  readonly phosphorus: number
  readonly iron: number
  readonly zinc: number
  readonly vitaminA: number
  readonly retinoids: number
  readonly carotenoids: number
  readonly vitaminD: number
  readonly vitaminE: number
  readonly thiamine: number
  readonly riboflavin: number
  readonly niacin: number
  readonly vitaminB6: number
  readonly folicAcid: number
  readonly vitaminB12: number
  readonly vitaminC: number
  readonly group: string
  readonly subGroup: string
}
