import { describe, it, expect } from 'vitest'
import { cn, truncate, truncateWords } from '@/lib/utils'

describe('cn', () => {
  it('merges class names', () => {
    expect(cn('px-2 py-1', 'text-sm')).toBe('px-2 py-1 text-sm')
  })

  it('resolves tailwind conflicts (last wins)', () => {
    expect(cn('px-2', 'px-4')).toBe('px-4')
  })

  it('handles conditional classes', () => {
    expect(cn('base', false && 'skipped', 'included')).toBe('base included')
  })
})

describe('truncate', () => {
  it('returns string unchanged when shorter than limit', () => {
    expect(truncate('hello', 10)).toBe('hello')
  })

  it('truncates and appends ellipsis when over limit', () => {
    expect(truncate('hello world', 5)).toBe('hello…')
  })

  it('returns full string when exactly at limit', () => {
    expect(truncate('hello', 5)).toBe('hello')
  })
})

describe('truncateWords', () => {
  it('returns string unchanged when under the word limit', () => {
    expect(truncateWords('one two three', 5)).toBe('one two three')
  })

  it('truncates and appends ellipsis when over the word limit', () => {
    expect(truncateWords('one two three four five', 3)).toBe('one two three…')
  })

  it('returns the full string when exactly at the limit', () => {
    expect(truncateWords('one two three', 3)).toBe('one two three')
  })
})