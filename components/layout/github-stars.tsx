"use client"

import { useEffect, useState } from "react"

const repositoryApiUrl = "https://api.github.com/repos/SpencerBrightest/Portfolio_website_v1"

type RepositoryResponse = {
  stargazers_count?: unknown
}

export function GitHubStars() {
  const [count, setCount] = useState("—")

  useEffect(() => {
    const controller = new AbortController()

    async function loadStarCount() {
      try {
        const response = await fetch(repositoryApiUrl, {
          signal: controller.signal,
          headers: { Accept: "application/vnd.github+json" },
        })
        if (!response.ok) return

        const repository = (await response.json()) as RepositoryResponse
        if (typeof repository.stargazers_count === "number") {
          setCount(repository.stargazers_count.toLocaleString())
        }
      } catch {
        // Keep the neutral fallback if GitHub is unavailable.
      }
    }

    void loadStarCount()
    return () => controller.abort()
  }, [])

  return (
    <span aria-live="polite" className="text-nav-muted">
      {count}
    </span>
  )
}
