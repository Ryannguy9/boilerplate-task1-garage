import type { TeamMember } from '@/features/team/types'

export const TEAM_NAME = 'Team 58'

export const teamMembers: TeamMember[] = [
  {
    id: 'ryan-nguyen',
    name: 'Ryan Nguyen',
    role: 'Project Manager',
    blurb:
      'Keeps the team aligned, manages priorities, and ensures projects stay on track and deliverables meet expectations. ',
  },
  {
    id: 'vincent-dao',
    name: 'Vincent Dao',
    role: 'Business Analyst',
    blurb:
      'Bridges business needs and technical solutions by gathering requirements, analysing processes, and clarifying project goals.',
  },
  {
    id: 'marius-taranto',
    name: 'Marius Taranto',
    role: 'User Experience Designer',
    blurb:
      'Designs intuitive and accessible user experiences by focusing on user needs, research, and thoughtful interface design.',
  },
  {
    id: 'menghok-him',
    name: 'Menghok Him',
    role: 'Developer',
    blurb:
      'Builds and maintains reliable software solutions, transforming requirements and designs into functional, scalable features.',
  },
]