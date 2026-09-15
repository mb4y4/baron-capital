import { useEffect, useState } from 'react'
import { branches } from '@/data/branches'
import { fetchTeamMembers } from '@/services/api'
import type { TeamMember } from '@/types'

export default function AboutPage() {
  const [team, setTeam] = useState<TeamMember[]>([])
  const [teamLoaded, setTeamLoaded] = useState(false)

  useEffect(() => {
    fetchTeamMembers()
      .then(setTeam)
      .catch((err) => console.error('Failed to load team members:', err))
      .finally(() => setTeamLoaded(true))
  }, [])

  return (
    <>
      <section className="section max-w-3xl">
        <h1 className="text-4xl">Our Story</h1>
        <p className="mt-4 text-bc-ink/80">
          Baron Capital was founded in 2016 and began operations in 2017 in Ongata Rongai,
          built on a simple idea: financing should be accessible and transparent, not
          intimidating or out of reach.
        </p>
      </section>

      <section className="bg-bc-grey">
        <div className="section grid gap-8 md:grid-cols-2">
          <div className="rounded-lg bg-white p-8 shadow-sm">
            <h2 className="mb-3 text-2xl">Mission</h2>
            <p className="text-bc-ink/70">
              To empower individuals and businesses with fair, accessible, and transparent
              financial solutions.
            </p>
          </div>
          <div className="rounded-lg bg-white p-8 shadow-sm">
            <h2 className="mb-3 text-2xl">Vision</h2>
            <p className="text-bc-ink/70">To be Kenya's most trusted financial partner.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="mb-8 text-center text-3xl">Our Values</h2>
        <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-5">
          {['Transparency', 'Integrity', 'Partnership', 'Innovation', 'Human-Centric Service'].map((v) => (
            <div key={v} className="rounded-lg border border-bc-navy/10 p-4 text-center">
              <p className="font-heading font-bold text-bc-navy">{v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-bc-grey">
        <div className="section">
          <h2 className="mb-8 text-center text-3xl">Leadership Team</h2>

          {teamLoaded && team.length === 0 && (
            <p className="text-center text-bc-ink/60">Team profiles coming soon.</p>
          )}

          {team.length > 0 && (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {team.map((member) => (
                <div key={member.id} className="rounded-lg bg-white p-6 text-center shadow-sm">
                  {member.photo ? (
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="mx-auto h-32 w-32 rounded-full object-cover"
                    />
                  ) : (
                    <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-bc-grey font-heading text-3xl font-bold text-bc-navy/40">
                      {member.name.charAt(0)}
                    </div>
                  )}
                  <h3 className="mt-4 text-lg text-bc-navy">{member.name}</h3>
                  <p className="text-sm font-semibold text-bc-gold-deep">{member.role}</p>
                  {member.bio && <p className="mt-3 text-sm text-bc-ink/70">{member.bio}</p>}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="section">
        <h2 className="mb-8 text-center text-3xl">Our Branches</h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {branches.map((b) => (
            <div key={b.name} className="rounded-lg border border-bc-navy/10 p-5">
              <p className="font-heading font-bold text-bc-navy">
                {b.name}{b.isHQ && <span className="ml-2 text-xs text-bc-gold-deep">HQ</span>}
              </p>
              <p className="mt-1 text-sm text-bc-ink/70">{b.address}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}