import { cn } from "@/lib/utils"

interface PixelDividerProps {
  className?: string
}

export default function PixelDivider({ className }: PixelDividerProps) {
  return (
    <div className={cn("flex justify-center", className)}>
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-[#5C8D62]"></div>
        <div className="w-4 h-4 bg-[#5C8D62]"></div>
        <div className="w-8 h-8 bg-[#5C8D62]"></div>
        <div className="w-16 h-4 bg-[#5C8D62]"></div>
        <div className="w-8 h-8 bg-[#5C8D62]"></div>
        <div className="w-4 h-4 bg-[#5C8D62]"></div>
        <div className="w-2 h-2 bg-[#5C8D62]"></div>
      </div>
    </div>
  )
}
