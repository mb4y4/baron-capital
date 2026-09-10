import axios from 'axios'
import type { LoanApplication, LoanCalculatorInput, LoanCalculatorResult } from '@/types'

// In dev, Vite proxies /api -> http://localhost:8000 (see vite.config.ts)
// In prod, set VITE_API_BASE_URL to the deployed API gateway URL
const baseURL = import.meta.env.VITE_API_BASE_URL || '/api'

export const apiClient = axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json' },
})

// --- Loan Calculator service ---
export async function calculateLoan(
  input: LoanCalculatorInput,
): Promise<LoanCalculatorResult> {
  const { data } = await apiClient.post<LoanCalculatorResult>(
    '/loan-calculator/calculate/',
    input,
  )
  return data
}

// --- Loan applications (Core service) ---
export async function submitLoanApplication(payload: LoanApplication) {
  const { data } = await apiClient.post('/core/applications/', payload)
  return data
}

// --- Blog / Insights (Core service) ---
export async function fetchLatestPosts() {
  const { data } = await apiClient.get('/core/posts/?limit=3')
  return data
}

// --- Contact form (Core service) ---
export async function submitContactForm(payload: {
  name: string
  email: string
  phone?: string
  message: string
}) {
  const { data } = await apiClient.post('/core/contact/', payload)
  return data
}
