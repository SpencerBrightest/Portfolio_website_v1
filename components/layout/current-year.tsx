"use client"

import { useEffect, useState } from "react"

type CurrentYearProps = {
  initialYear: number
}

export function CurrentYear({ initialYear }: CurrentYearProps) {
  const [year, setYear] = useState(initialYear)

  useEffect(() => {
    let timeoutId: number | undefined

    const updateYearAtMidnight = () => {
      const now = new Date()
      setYear(now.getFullYear())

      const nextMidnight = new Date(now)
      nextMidnight.setHours(24, 0, 0, 0)
      timeoutId = window.setTimeout(
        updateYearAtMidnight,
        nextMidnight.getTime() - now.getTime()
      )
    }

    updateYearAtMidnight()
    return () => window.clearTimeout(timeoutId)
  }, [])

  return <time dateTime={String(year)}>{year}</time>
}
