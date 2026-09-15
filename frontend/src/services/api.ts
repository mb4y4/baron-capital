import axios from 'axios'
import type { BlogPost, LoanApplication, TeamMember } from '@/types'

const baseURL = import.meta.env.VITE_API_BASE_URL || '/api'

export const apiClient = axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json' },
})

// --- Team members (Core service) ---
export async function fetchTeamMembers(): Promise<TeamMember[]> {
  const { data } = await apiClient.get<{ results: TeamMember[] }>('/core/team/')
  return data.results
}

// --- Loan applications (Core service) ---
export async function submitLoanApplication(payload: LoanApplication) {
  const { data } = await apiClient.post('/core/applications/', payload)
  return data
}

// --- Blog / Insights (Core service) ---
// Django returns a paginated envelope: { count, next, previous, results }.
// This unwraps it and trims to the 3 most recent posts (the model already
// orders by -published_at, so results[0] is always the newest).
export async function fetchLatestPosts(): Promise<BlogPost[]> {
  const { data } = await apiClient.get<{ results: BlogPost[] }>('/core/posts/')
  return data.results.slice(0, 3)
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