import React, { useEffect, useRef, useState } from 'react'
import Contact from '../components/Contact'

const isVideo = (filename) => /\.(mp4|webm|ogg)$/i.test(filename)

const VideoTile = ({ src, onClick }) => {
  const ref = useRef(null)

  const handleMouseEnter = () => {
    if (ref.current) {
      ref.current.play().catch(() => {})
    }
  }

  const handleMouseLeave = () => {
    if (ref.current) {
      ref.current.pause()
      ref.current.currentTime = 0
    }
  }

  return (
    <div
      className="relative w-full h-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <video
        ref={ref}
        src={src}
        muted
        loop
        playsInline
        preload="metadata"
        className="w-full h-auto object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="bg-black/40 rounded-full p-2">
          <svg className="w-8 h-8 text-white/80" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </div>
  )
}

const Gallery = () => {
  const [media, setMedia] = useState([])
  const [lightbox, setLightbox] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch('/gallery/manifest.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load manifest')
        return res.json()
      })
      .then((files) => {
        setMedia(files.map((f) => ({ src: `/gallery/${encodeURIComponent(f)}`, name: f, video: isVideo(f) })))
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }, [])

  const openLightbox = (idx) => setLightbox(idx)
  const closeLightbox = () => setLightbox(null)
  const prev = () => setLightbox((i) => (i - 1 + media.length) % media.length)
  const next = () => setLightbox((i) => (i + 1) % media.length)

  useEffect(() => {
    if (lightbox === null) return
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') setLightbox((i) => (i - 1 + media.length) % media.length)
      else if (e.key === 'ArrowRight') setLightbox((i) => (i + 1) % media.length)
      else if (e.key === 'Escape') setLightbox(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox, media.length])

  return (
    <div className="w-full min-h-screen bg-transparent flex flex-col">
      <div className="pt-24 pb-16 px-6 md:px-16 max-w-6xl mx-auto w-full flex-1">
        <h1 className="text-4xl md:text-7xl font-extrabold text-[#FACC15] mb-4">GALLERY</h1>
        <p className="text-white/60 text-base md:text-lg mb-12 max-w-2xl">
          Moments from Blueprint Lucknow Guild — April 19, 2026
        </p>

        {loading && (
          <p className="text-white/40 text-sm">Loading media…</p>
        )}

        {!loading && error && (
          <p className="text-red-400/70 text-sm">Failed to load gallery. Please try again later.</p>
        )}

        {!loading && !error && media.length === 0 && (
          <p className="text-white/40 text-sm">No photos yet. Check back soon!</p>
        )}

        {!loading && !error && media.length > 0 && (
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
            {media.map((item, idx) => (
              <div
                key={item.src}
                className="break-inside-avoid overflow-hidden rounded-xl cursor-pointer border border-[#657795]/20 hover:border-[#FACC15]/50 transition-all duration-300 hover:scale-[1.02]"
                onClick={() => openLightbox(idx)}
              >
                {item.video ? (
                  <VideoTile src={item.src} onClick={() => openLightbox(idx)} />
                ) : (
                  <img
                    src={item.src}
                    alt={item.name}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white text-3xl font-bold"
            onClick={closeLightbox}
          >
            ✕
          </button>
          <button
            className="absolute left-4 text-white/70 hover:text-white text-4xl font-bold px-2"
            onClick={(e) => { e.stopPropagation(); prev() }}
          >
            ‹
          </button>
          {media[lightbox].video ? (
            <video
              key={media[lightbox].src}
              src={media[lightbox].src}
              controls
              autoPlay
              className="max-h-[90vh] max-w-[90vw] rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <img
              src={media[lightbox].src}
              alt={media[lightbox].name}
              className="max-h-[90vh] max-w-[90vw] rounded-xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          )}
          <button
            className="absolute right-4 text-white/70 hover:text-white text-4xl font-bold px-2"
            onClick={(e) => { e.stopPropagation(); next() }}
          >
            ›
          </button>
          <span className="absolute bottom-4 text-white/40 text-sm">
            {lightbox + 1} / {media.length}
          </span>
        </div>
      )}

      <Contact />
    </div>
  )
}

export default Gallery
