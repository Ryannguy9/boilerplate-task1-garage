import type { Metadata } from 'next'
import { requireAuth } from '@/actions/auth.actions'
import { TeamGrid } from '@/features/team/components/TeamGrid'
import { TEAM_NAME } from '@/features/team/data'

export const metadata: Metadata = { title: 'Team' }

export default async function TeamPage() {
  await requireAuth()

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-center text-3xl font-bold tracking-tight">{TEAM_NAME}</h1>
      <TeamGrid />
    </div>
  )
}