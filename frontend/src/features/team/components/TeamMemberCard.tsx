import { User } from 'lucide-react'
import type { TeamMember } from '@/features/team/types'
import { truncateWords } from '@/lib/utils'

export function TeamMemberCard({ member }: { member: TeamMember }) {
  const { name, role, blurb, photoUrl } = member

  return (
    <article className="cursor-pointer bg-zinc-100 transition-transform hover:scale-105 dark:bg-zinc-800">
      <div className="px-6 pt-6">
        <div className="flex aspect-square items-center justify-center bg-white dark:bg-zinc-900">
          {photoUrl ? (
            // eslint-disable-next-line @next/next/no-img-element -- PRD specifies an <img> tag
            <img src={photoUrl} alt={name} className="size-full object-cover" />
          ) : (
            <User className="size-24 text-zinc-300 dark:text-zinc-700" strokeWidth={1.5} />
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2 p-6">
        <h2 className="truncate text-center text-lg font-bold">{name}</h2>
        <p className="text-center text-sm text-zinc-600 dark:text-zinc-400">{role}</p>
        <hr className="my-1 border-zinc-400 dark:border-zinc-600" />
        <p className="text-sm text-zinc-700 lg:hidden dark:text-zinc-300">
          {truncateWords(blurb, 20)}
        </p>
        <p className="hidden text-sm text-zinc-700 lg:block dark:text-zinc-300">
          {truncateWords(blurb, 30)}
        </p>
      </div>
    </article>
  )
}