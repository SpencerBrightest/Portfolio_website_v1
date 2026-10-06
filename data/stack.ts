import {
  siHtml5,
  siCss,
  siJavascript,
  siFirebase,
  siFigma,
  siFlutter,
  siGit,
  siMongodb,
  siNextdotjs,
  siNodedotjs,
  siReact,
  siShadcnui,
  siTailwindcss,
  siTypescript,
} from "simple-icons"

// Central tool list for the marquee and footer; add a named Simple Icons export and colors here.
export const stackIconPaths = {
  siHtml5: siHtml5.path,
  siCss: siCss.path,
  siJavascript: siJavascript.path,
  siNextdotjs: siNextdotjs.path,
  siReact: siReact.path,
  siTypescript: siTypescript.path,
  siTailwindcss: siTailwindcss.path,
  siNodedotjs: siNodedotjs.path,
  siMongodb: siMongodb.path,
  siFlutter: siFlutter.path,
  siFirebase: siFirebase.path,
  siGit: siGit.path,
  siFigma: siFigma.path,
} as const

export type StackIconName = keyof typeof stackIconPaths
export type StackHoverColor = "fg" | `#${string}`

export type StackTool = {
  name: string
  icon: StackIconName
  hoverDark: StackHoverColor
  hoverLight: StackHoverColor
}

// Add a tool here with its official icon key and checked light/dark hover colors.
export const stack = [
  { name: "HTML5", icon: "siHtml5", hoverDark: `#${siHtml5.hex}`, hoverLight: `#${siHtml5.hex}` },
  { name: "CSS", icon: "siCss", hoverDark: `#${siCss.hex}`, hoverLight: `#${siCss.hex}` },
  { name: "JavaScript", icon: "siJavascript", hoverDark: `#${siJavascript.hex}`, hoverLight: `#${siJavascript.hex}` },
  { name: "Next.js", icon: "siNextdotjs", hoverDark: "fg", hoverLight: "fg" },
  { name: "React", icon: "siReact", hoverDark: "#61DAFB", hoverLight: "#0E8FB3" },
  { name: "TypeScript", icon: "siTypescript", hoverDark: "#3178C6", hoverLight: "#3178C6" },
  { name: "Tailwind CSS", icon: "siTailwindcss", hoverDark: "#06B6D4", hoverLight: "#0891B2" },
  { name: "Node.js", icon: "siNodedotjs", hoverDark: "#5FA04E", hoverLight: "#4C8A3E" },
  { name: "MongoDB", icon: "siMongodb", hoverDark: "#47A248", hoverLight: "#3D8B3E" },
  { name: "Flutter", icon: "siFlutter", hoverDark: "#54C5F8", hoverLight: "#02569B" },
  { name: "Firebase", icon: "siFirebase", hoverDark: "#DD2C00", hoverLight: "#DD2C00" },
  { name: "Git", icon: "siGit", hoverDark: "#F05032", hoverLight: "#F05032" },
  { name: "Figma", icon: "siFigma", hoverDark: "#F24E1E", hoverLight: "#F24E1E" },
] as const satisfies readonly StackTool[]

// Keep the footer's compact technology list unchanged as the marquee gets its expanded tool list.
export const footerStack = [
  {
    label: "Next.js",
    iconPath: stackIconPaths.siNextdotjs,
    iconColor: "var(--nav-foreground)",
  },
  { label: "React", iconPath: stackIconPaths.siReact, iconColor: `#${siReact.hex}` },
  {
    label: "TypeScript",
    iconPath: stackIconPaths.siTypescript,
    iconColor: `#${siTypescript.hex}`,
  },
  {
    label: "Tailwind CSS",
    iconPath: stackIconPaths.siTailwindcss,
    iconColor: `#${siTailwindcss.hex}`,
  },
  { label: "shadcn/ui", iconPath: siShadcnui.path, iconColor: "var(--nav-foreground)" },
] as const
