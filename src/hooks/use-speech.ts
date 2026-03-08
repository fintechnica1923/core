import { useCallback, useEffect, useRef, useState } from "react"

function stripMarkdown(md: string): string {
  return md
    .replace(/!\[.*?\]\(.*?\)/g, "")
    .replace(/\[([^\]]*)\]\(.*?\)/g, "$1")
    .replace(/https?:\/\/\S+/g, "")
    .replace(/[#*_`~>|]/g, "")
    .replace(/\n{2,}/g, "\n")
    .trim()
}

function getRussianVoice(): SpeechSynthesisVoice | null {
  const voices = speechSynthesis.getVoices()
  return (
    // 1. Пробуем найти Google-голос (обычно самый качественный в Chrome)
    voices.find((v) => v.lang === "ru-RU" && v.name.includes("Google")) ??
    // 2. Пробуем найти Premium/Enhanced голоса (macOS/iOS)
    voices.find(
      (v) =>
        v.lang === "ru-RU" &&
        (v.name.includes("Premium") || v.name.includes("Enhanced")),
    ) ??
    // 3. Любой другой русский голос (предпочитаем не локальный, т.к. онлайн часто лучше)
    voices.find((v) => v.lang === "ru-RU" && !v.localService) ??
    voices.find((v) => v.lang === "ru-RU") ??
    voices.find((v) => v.lang.startsWith("ru")) ??
    null
  )
}

export function useSpeech() {
  const [speakingSlug, setSpeakingSlug] = useState<string | null>(null)
  const slugRef = useRef<string | null>(null)

  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    // preload voices
    speechSynthesis.getVoices()
    const handler = () => speechSynthesis.getVoices()
    speechSynthesis.addEventListener("voiceschanged", handler)
    return () => {
      speechSynthesis.removeEventListener("voiceschanged", handler)
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  const stop = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current = null
    }
    speechSynthesis.cancel()
    slugRef.current = null
    setSpeakingSlug(null)
  }, [])

  const speak = useCallback(
    (slug: string, markdown: string) => {
      if (slugRef.current === slug) {
        stop()
        return
      }

      stop()

      // Try playing pre-generated audio first
      // Decode slug back to original filename because we store files with original names
      const filename = decodeURIComponent(slug)
      const audioPath = `/audio/${encodeURIComponent(filename)}.mp3`
      const audio = new Audio(audioPath)

      let fallbackCalled = false
      const playSynthesis = () => {
        if (fallbackCalled) return
        fallbackCalled = true
        speechSynthesis.cancel()

        const text = stripMarkdown(markdown)
        const utterance = new SpeechSynthesisUtterance(text)
        utterance.lang = "ru-RU"
        utterance.rate = 1

        const voice = getRussianVoice()
        if (voice) utterance.voice = voice

        utterance.onend = () => {
          slugRef.current = null
          setSpeakingSlug(null)
        }
        utterance.onerror = () => {
          slugRef.current = null
          setSpeakingSlug(null)
        }

        slugRef.current = slug
        setSpeakingSlug(slug)
        speechSynthesis.speak(utterance)
      }

      audio.onplay = () => {
        slugRef.current = slug
        setSpeakingSlug(slug)
      }
      audio.onended = () => {
        slugRef.current = null
        setSpeakingSlug(null)
      }
      audio.onerror = () => {
        // Fallback to synthesis if audio file fails (e.g. 404)
        playSynthesis()
      }

      audio.play().catch(() => {
         playSynthesis()
      })
      
      audioRef.current = audio
    },
    [stop],
  )

  return { speakingSlug, speak, stop }
}
