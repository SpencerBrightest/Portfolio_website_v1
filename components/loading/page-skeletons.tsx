import type { ReactNode } from "react"

import { Container } from "@/components/ui/container"
import { Skeleton } from "@/components/ui/skeleton"

function LoadingMain({
  label,
  className,
  children,
}: {
  label: string
  className?: string
  children: ReactNode
}) {
  return (
    <main aria-busy="true" aria-label={`Loading ${label}`} className={`flex-1 ${className ?? ""}`}>
      <p className="sr-only" role="status">
        Loading {label}…
      </p>
      {children}
    </main>
  )
}

function EyebrowSkeleton({ className = "" }: { className?: string }) {
  return <Skeleton className={`h-3 w-24 ${className}`} />
}

function HeadingSkeleton({ className = "" }: { className?: string }) {
  return <Skeleton className={`h-9 w-64 max-w-full sm:h-11 ${className}`} />
}

function ParagraphSkeleton({
  className = "",
  widths = ["w-full", "w-[92%]", "w-[74%]"],
}: {
  className?: string
  widths?: string[]
}) {
  return (
    <div aria-hidden="true" className={`space-y-2.5 ${className}`}>
      {widths.map((width, index) => (
        <Skeleton key={`${width}-${index}`} className={`h-4 max-w-full ${width}`} />
      ))}
    </div>
  )
}

function HomeProjectCardSkeleton() {
  return (
    <div className="rounded-[14px] border border-nav-border p-4">
      <Skeleton className="aspect-[2.1/1] w-full rounded-[10px]" />
      <Skeleton className="mt-5 h-3 w-20" />
      <Skeleton className="mt-3 h-6 w-3/4" />
      <ParagraphSkeleton className="mt-3" widths={["w-full", "w-[85%]"]} />
      <Skeleton className="mt-5 h-3 w-1/2" />
    </div>
  )
}

function BlogPreviewCardSkeleton() {
  return (
    <div className="flex h-full flex-col rounded-xl border border-nav-border p-3">
      <Skeleton className="mb-4 aspect-[8/3] w-full rounded-[9px]" />
      <Skeleton className="h-3 w-32" />
      <Skeleton className="mt-3 h-6 w-4/5" />
      <Skeleton className="mt-3 h-4 w-full" />
      <Skeleton className="mt-5 h-5 w-5 self-end" />
    </div>
  )
}

function BlogPostCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-[14px] border border-nav-border bg-nav-panel">
      <div className="grid md:grid-cols-[minmax(13rem,0.8fr)_minmax(0,1.2fr)] md:items-stretch">
        <Skeleton className="aspect-[16/9] w-full rounded-none md:aspect-auto md:min-h-44" />
        <div className="flex min-w-0 flex-col justify-center p-4 sm:p-5 md:p-6">
          <Skeleton className="h-3 w-40" />
          <Skeleton className="mt-4 h-6 w-4/5" />
          <ParagraphSkeleton className="mt-3" widths={["w-full", "w-[90%]", "w-[62%]"]} />
          <Skeleton className="mt-5 h-10 w-28" />
        </div>
      </div>
    </div>
  )
}

function ProjectGridCardSkeleton() {
  return (
    <div className="flex h-full flex-col rounded-[14px] border border-nav-border p-4">
      <Skeleton className="mb-5 aspect-[2.1/1] w-full rounded-[10px]" />
      <Skeleton className="h-3 w-20" />
      <Skeleton className="mt-3 h-6 w-4/5" />
      <ParagraphSkeleton className="mt-3" widths={["w-full", "w-[88%]", "w-[62%]"]} />
      <Skeleton className="mt-5 h-3 w-2/3" />
    </div>
  )
}

function ArticleAuthorSkeleton() {
  return (
    <div className="flex items-center gap-3">
      <Skeleton className="size-11 shrink-0 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-28" />
        <Skeleton className="h-3 w-36" />
      </div>
    </div>
  )
}

function ArticleSidebarSkeleton() {
  return (
    <aside className="space-y-7 nav:sticky nav:top-24 nav:self-start" aria-hidden="true">
      <ArticleAuthorSkeleton />
      <div className="border-t border-nav-border pt-5">
        <Skeleton className="h-4 w-12" />
        <div className="mt-3 flex flex-wrap gap-2">
          <Skeleton className="h-7 w-20 rounded-md" />
          <Skeleton className="h-7 w-28 rounded-md" />
          <Skeleton className="h-7 w-24 rounded-md" />
        </div>
      </div>
      <div className="border-t border-nav-border pt-5">
        <Skeleton className="h-4 w-24" />
        <div className="mt-3 flex gap-2">
          {Array.from({ length: 4 }, (_, index) => (
            <Skeleton key={index} className="size-11 rounded-lg" />
          ))}
        </div>
      </div>
      <div className="border-t border-nav-border pt-5">
        <Skeleton className="h-4 w-20" />
        <div className="mt-3 space-y-3">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-[84%]" />
          <Skeleton className="h-4 w-[70%]" />
        </div>
      </div>
    </aside>
  )
}

function SkeletonSectionHeading({
  eyebrowWidth = "w-24",
  titleWidth = "w-56",
}: {
  eyebrowWidth?: string
  titleWidth?: string
}) {
  return (
    <>
      <EyebrowSkeleton className={`mb-7 ${eyebrowWidth}`} />
      <HeadingSkeleton className={titleWidth} />
    </>
  )
}

export function HomePageSkeleton() {
  return (
    <LoadingMain label="home page">
      <section className="relative isolate overflow-hidden py-3 nav:pb-6 nav:pt-8">
        <Container>
          <div className="grid items-start gap-3 sm:gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-8 nav:grid-cols-[minmax(0,1.28fr)_minmax(0,0.72fr)] nav:gap-12">
            <div className="max-w-2xl">
              <Skeleton className="mb-6 h-8 w-44 rounded-full" />
              <EyebrowSkeleton className="mb-3 w-40" />
              <Skeleton className="h-12 w-[min(25rem,100%)] sm:h-16" />
              <ParagraphSkeleton className="mt-5 max-w-xl" widths={["w-full", "w-[88%]", "w-[66%]"]} />
              <div className="mt-7 flex gap-3">
                <Skeleton className="h-11 w-36 rounded-full" />
                <Skeleton className="h-11 w-32 rounded-full" />
              </div>
            </div>
            <div className="mx-auto w-full max-w-[22rem] md:ml-auto md:mx-0 nav:max-w-[25rem]">
              <Skeleton className="aspect-square w-full rounded-3xl border border-nav-border p-3" />
              <div className="mt-4 rounded-3xl border border-nav-border bg-nav-panel p-2.5">
                <Skeleton className="h-16 w-full rounded-2xl" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-nav-border py-12 sm:py-16">
        <Container>
          <SkeletonSectionHeading eyebrowWidth="w-28" titleWidth="w-64" />
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {Array.from({ length: 3 }, (_, index) => (
              <HomeProjectCardSkeleton key={index} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-nav-border py-12 sm:py-16">
        <Container>
          <SkeletonSectionHeading eyebrowWidth="w-28" titleWidth="w-80" />
          <div className="mt-8 grid grid-cols-1 gap-6 nav:grid-cols-2">
            <BlogPreviewCardSkeleton />
            <BlogPreviewCardSkeleton />
          </div>
        </Container>
      </section>

      <section className="border-t border-nav-border py-12 sm:py-16">
        <Container>
          <SkeletonSectionHeading eyebrowWidth="w-16" titleWidth="w-64" />
          <div className="mt-9 flex gap-8 overflow-hidden">
            {Array.from({ length: 6 }, (_, index) => (
              <Skeleton key={index} className="size-12 shrink-0 rounded-xl md:size-14" />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-nav-border py-8 sm:py-10">
        <Container>
          <div className="grid items-center gap-6 nav:grid-cols-[minmax(0,1fr)_auto_auto] nav:gap-10">
            <div>
              <EyebrowSkeleton className="mb-3 w-24" />
              <Skeleton className="h-6 w-72 max-w-full" />
              <ParagraphSkeleton className="mt-3 max-w-lg" widths={["w-full", "w-[75%]"]} />
            </div>
            <Skeleton className="h-11 w-36 rounded-md" />
            <div className="flex gap-3">
              {Array.from({ length: 6 }, (_, index) => (
                <Skeleton key={index} className="size-12 rounded-lg" />
              ))}
            </div>
          </div>
        </Container>
      </section>
    </LoadingMain>
  )
}

export function AboutPageSkeleton() {
  return (
    <LoadingMain label="about page" className="bg-nav-background pb-32 sm:pb-40">
      <Container className="py-14 sm:py-20">
        <article className="mx-auto w-full max-w-[46.875rem]">
          <EyebrowSkeleton className="w-32" />
          <Skeleton className="mt-5 h-12 w-72 max-w-full" />
          <div className="mt-10 space-y-7">
            <ParagraphSkeleton widths={["w-full", "w-[96%]", "w-[88%]", "w-[72%]"]} />
            <ParagraphSkeleton widths={["w-full", "w-[92%]", "w-[80%]"]} />
            <ParagraphSkeleton widths={["w-full", "w-[90%]"]} />
          </div>
        </article>
      </Container>

      <section className="border-t border-nav-border py-12 sm:py-16">
        <Container>
          <SkeletonSectionHeading eyebrowWidth="w-28" titleWidth="w-56" />
          <div className="mt-8 grid grid-cols-1 gap-5 nav:grid-cols-2">
            <BlogPreviewCardSkeleton />
            <BlogPreviewCardSkeleton />
          </div>
        </Container>
      </section>

      <section className="border-t border-nav-border py-12 sm:py-16">
        <Container>
          <SkeletonSectionHeading eyebrowWidth="w-24" titleWidth="w-36" />
          <Skeleton className="mt-3 h-4 w-[min(32rem,100%)]" />
          <div className="mt-8 max-w-2xl space-y-6 rounded-2xl border border-nav-border bg-nav-panel p-6 sm:p-8">
            {Array.from({ length: 4 }, (_, index) => (
              <div key={index}>
                <Skeleton className="h-4 w-48 max-w-full" />
                <Skeleton className="mt-3 h-4 w-[min(28rem,100%)]" />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-nav-border py-14 sm:py-20">
        <Container>
          <HeadingSkeleton className="h-10 w-80 sm:h-12" />
          <Skeleton className="mt-4 h-4 w-[min(36rem,100%)]" />
          <div className="mt-9 grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {Array.from({ length: 3 }, (_, index) => (
              <ProjectGridCardSkeleton key={index} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-nav-border py-12 pb-28 sm:py-16 sm:pb-36">
        <Container>
          <SkeletonSectionHeading eyebrowWidth="w-24" titleWidth="w-32" />
          <div className="mt-8 max-w-3xl border-l-2 border-nav-border pl-5 sm:pl-8">
            <Skeleton className="h-7 w-[min(36rem,100%)]" />
            <Skeleton className="mt-4 h-4 w-32" />
          </div>
        </Container>
      </section>
    </LoadingMain>
  )
}

export function BlogIndexSkeleton() {
  return (
    <LoadingMain label="blog">
      <Container className="py-12 sm:py-16">
        <EyebrowSkeleton className="h-10 w-32" />
        <ParagraphSkeleton className="mt-5 max-w-2xl" widths={["w-full", "w-[68%]"]} />
        <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-5">
          {Array.from({ length: 3 }, (_, index) => (
            <BlogPostCardSkeleton key={index} />
          ))}
        </div>
      </Container>
    </LoadingMain>
  )
}

export function BlogArticleSkeleton() {
  return (
    <LoadingMain label="blog article" className="py-10 sm:py-16">
      <Container>
        <Skeleton className="mb-7 h-11 w-32" />
        <article>
          <div className="grid gap-x-12 gap-y-8 nav:grid-cols-[minmax(0,1fr)_15rem] nav:gap-x-10">
            <header className="min-w-0 nav:col-start-1 nav:row-start-1">
              <Skeleton className="mb-4 h-3 w-48" />
              <Skeleton className="h-10 w-[min(40rem,100%)] sm:h-12" />
              <Skeleton className="mt-3 h-10 w-[min(34rem,100%)]" />
              <ParagraphSkeleton className="mt-5 max-w-3xl" widths={["w-full", "w-[84%]"]} />
            </header>
            <Skeleton className="aspect-[1400/760] w-full rounded-[14px] nav:col-start-1 nav:row-start-2" />
            <div className="border-t border-nav-border pt-6 nav:col-start-2 nav:row-start-1 nav:row-span-3 nav:mt-0 nav:border-t-0 nav:pt-0">
              <ArticleSidebarSkeleton />
            </div>
            <div className="space-y-8 nav:col-start-1 nav:row-start-3">
              <div className="space-y-4">
                <Skeleton className="h-8 w-3/4" />
                <ParagraphSkeleton widths={["w-full", "w-full", "w-[92%]", "w-[78%]"]} />
              </div>
              <div className="space-y-4">
                <Skeleton className="h-8 w-2/3" />
                <ParagraphSkeleton widths={["w-full", "w-[94%]", "w-full", "w-[70%]"]} />
              </div>
              <div className="space-y-4">
                <Skeleton className="h-8 w-3/5" />
                <ParagraphSkeleton widths={["w-full", "w-full", "w-[86%]"]} />
              </div>
              <div className="border-t border-nav-border pt-8">
                <Skeleton className="h-8 w-40" />
                <ParagraphSkeleton className="mt-4 max-w-xl" widths={["w-full", "w-[82%]"]} />
                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {Array.from({ length: 4 }, (_, index) => (
                    <Skeleton key={index} className="h-12 rounded-lg" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </article>
      </Container>
    </LoadingMain>
  )
}

export function WorkIndexSkeleton() {
  return (
    <LoadingMain label="work">
      <Container className="py-16 sm:py-20">
        <EyebrowSkeleton className="mb-5 w-16" />
        <HeadingSkeleton className="w-72" />
        <ParagraphSkeleton className="mt-4 max-w-xl" widths={["w-full", "w-[62%]"]} />
        <div className="mt-10 grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {Array.from({ length: 6 }, (_, index) => (
            <ProjectGridCardSkeleton key={index} />
          ))}
        </div>
      </Container>
    </LoadingMain>
  )
}

export function WorkDetailSkeleton() {
  return (
    <LoadingMain label="project details" className="py-6 sm:py-8">
      <Container>
        <Skeleton className="mb-5 h-11 w-36 rounded-lg" />
        <article className="mx-auto max-w-4xl">
          <Skeleton className="mx-auto aspect-video w-full max-w-lg rounded-[10px] border border-nav-border" />
          <header className="border-b border-nav-border py-6 sm:py-8">
            <EyebrowSkeleton className="mb-4 w-24" />
            <Skeleton className="h-10 w-[min(32rem,100%)] sm:h-12" />
            <ParagraphSkeleton className="mt-5 max-w-2xl" widths={["w-full", "w-[84%]"]} />
          </header>
          <div className="grid gap-8 py-6 sm:grid-cols-[minmax(0,1fr)_minmax(12rem,0.65fr)] sm:gap-12 sm:py-8">
            <section>
              <Skeleton className="h-4 w-24" />
              <div className="mt-4 flex flex-wrap gap-2">
                {Array.from({ length: 4 }, (_, index) => (
                  <Skeleton key={index} className="h-8 w-20 rounded-md" />
                ))}
              </div>
            </section>
            <dl className="grid gap-5 border-t border-nav-border pt-5 sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0">
              <div>
                <Skeleton className="h-4 w-16" />
                <Skeleton className="mt-2 h-4 w-24" />
              </div>
              <div>
                <Skeleton className="h-4 w-16" />
                <Skeleton className="mt-2 h-4 w-32" />
              </div>
            </dl>
          </div>
        </article>
      </Container>
    </LoadingMain>
  )
}
