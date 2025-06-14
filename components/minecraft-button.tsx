import type { ButtonHTMLAttributes, ReactNode } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { ExternalLink } from "lucide-react"

interface MinecraftButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "href"> {
  children: ReactNode
  href?: string
  variant?: "primary" | "secondary"
  external?: boolean
  className?: string
}

export default function MinecraftButton({
  children,
  href,
  variant = "primary",
  external = false,
  className,
  ...props
}: MinecraftButtonProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center px-6 py-3 font-medium text-sm transition-transform hover:-translate-y-1 active:translate-y-0 shadow-[inset_0_-4px_0_0_rgba(0,0,0,0.3)] border-2 rounded-none"

  const variantStyles = {
    primary: "bg-[#5C8D62] text-white border-[#3A5F45] hover:bg-[#4A7A52]",
    secondary: "bg-[#E9DDC7] text-[#3A5F45] border-[#5C8D62] hover:bg-[#DDD1B4]",
  }

  const buttonStyles = cn(baseStyles, variantStyles[variant], className)

  if (href) {
    return (
      <Link
        href={href}
        className={buttonStyles}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
        {external && <ExternalLink className="ml-2 h-4 w-4" />}
      </Link>
    )
  }

  return (
    <button className={buttonStyles} {...props}>
      {children}
    </button>
  )
}
