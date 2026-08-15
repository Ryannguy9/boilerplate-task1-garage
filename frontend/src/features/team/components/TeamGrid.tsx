import { teamMembers } from '@/features/team/data'
import { TeamMemberCard } from '@/features/team/components/TeamMemberCard'

export function TeamGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {teamMembers.map((member) => (
        <TeamMemberCard key={member.id} member={member} />
      ))}
    </div>
  )
}