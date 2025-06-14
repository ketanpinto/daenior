import Image from "next/image"
import { Play } from "lucide-react"

interface VideoCardProps {
  title: string
  thumbnail: string
  views: string
  duration: string
  client: string
}

export default function VideoCard({ title, thumbnail, views, duration, client }: VideoCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-video overflow-hidden rounded-md mb-3 bg-gray-200">
        <Image
          src={thumbnail || "/placeholder.svg?height=180&width=320"}
          alt={title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="bg-[#5C8D62] p-3 rounded-full">
            <Play className="h-6 w-6 text-white fill-white" />
          </div>
        </div>
        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">{duration}</div>
      </div>
      <h3 className="font-medium text-[#3A5F45] line-clamp-2 mb-1 leading-tight">{title}</h3>
      <div className="flex justify-between text-xs text-[#5C8D62]">
        <span className="truncate mr-2">{client}</span>
        <span className="whitespace-nowrap">{views} views</span>
      </div>
    </div>
  )
}
