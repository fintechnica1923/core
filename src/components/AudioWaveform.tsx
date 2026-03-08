import { cn } from "@/lib/utils"

interface AudioWaveformProps {
  isPlaying: boolean
  className?: string
}

export default function AudioWaveform({ isPlaying, className }: AudioWaveformProps) {
  return (
    <div className={cn("flex items-center gap-0.5 h-4", className)}>
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className={cn(
            "w-1 bg-foreground/80 rounded-full transition-all duration-300 ease-in-out",
            isPlaying ? "animate-music-bar" : "h-1.5 opacity-30"
          )}
          style={{
            animationDelay: isPlaying ? `${i * 0.1}s` : "0s",
            height: isPlaying ? undefined : "4px",
          }}
        />
      ))}
    </div>
  )
}
