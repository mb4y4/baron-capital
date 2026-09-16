export interface ProductInstrument {
  title: string
  description: string
}

export interface Product {
  slug: string
  name: string
  tagline: string
  description: string
  features: string[]
  howItWorks: string[]
  icon?: string
  introParagraphs?: string[]
  instruments?: ProductInstrument[]
  whyChooseUs?: string[]
  closingHeading?: string
  closingParagraph?: string
  disclaimer?: string
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
  author: string
}

// Field names match the Django REST API response exactly (snake_case),
// to avoid silent mismatches between what the backend sends and what the
// frontend expects.
export interface TeamMember {
  id: number
  name: string
  role: string
  bio: string
  photo: string | null
}

export interface BlogPost {
  id: number
  title: string
  slug: string
  excerpt: string
  published_at: string
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