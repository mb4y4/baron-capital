export interface Product {
  slug: string
  name: string
  tagline: string
  description: string
  features: string[]
  howItWorks: string[]
  icon?: string
}

export interface Branch {
  name: string
  address: string
  isHQ?: boolean
  lat?: number
  lng?: number
}

export interface Testimonial {
  quote: string
  author: string // anonymised, e.g. "Small Business Owner, Nairobi"
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  publishedAt: string
}

export interface LoanCalculatorInput {
  amount: number
  monthlyRatePercent: number
  termMonths: number
}

export interface LoanCalculatorResult {
  monthlyInstallment: number
  totalRepayment: number
  totalInterest: number
}

export interface LoanApplication {
  fullName: string
  email: string
  phone: string
  productSlug: string
  amountRequested: number
  message?: string
}
