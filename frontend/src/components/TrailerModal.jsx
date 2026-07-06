import { X } from 'lucide-react'
import useBodyScrollLock from '../hooks/useBodyScrollLock'
import useEscapeKey from '../hooks/useEscapeKey'

export default function TrailerModal({ movie, onClose }) {
  useBodyScrollLock(true)
  useEscapeKey(true, onClose)

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 px-4 py-8"
      role="dialog"
      aria-modal="true"
      aria-label={`${movie.title} trailer`}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl overflow-hidden rounded-[28px] bg-black shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-white/15 p-2 text-white transition hover:bg-white/25"
          aria-label="Close trailer"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="aspect-video w-full">
          <iframe
            src={movie.trailer.videoUrl}
            title={`${movie.title} trailer`}
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  )
}
