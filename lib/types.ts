export type Product = {
  id: string
  name: string
  category: string
  price: number
  image: string
  description: string
  variants: string[]
  featured?: boolean
}

export type QuoteInput = {
  fullName: string
  phone: string
  email: string
  carBrand: string
  carModelYear: string
  request: string
}
