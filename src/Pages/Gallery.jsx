import React, { useEffect, useState } from 'react'
import Contact from '../components/Contact'

const CHUNK_SIZE = 5

const Gallery = () => {
  const [allImages, setAllImages] = useState([])
  const [visibleCount, setVisibleCount] = useState(CHUNK_SIZE)
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
        setAllImages(files.map((f) => ({ src: `/gallery/${encodeURIComponent(f)}`, alt: f })))
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }, [])

  const images = allImages.slice(0, visibleCount)
  const hasMore = visibleCount < allImages.length
  const loadMore = () => setVisibleCount((n) => Math.min(n + CHUNK_SIZE, allImages.length))

  const openLightbox = (idx) => setLightbox(idx)
  const closeLightbox = () => setLightbox(null)
  const prev = () => setLightbox((i) => (i - 1 + images.length) % images.length)
  const next = () => setLightbox((i) => (i + 1) % images.length)

  useEffect(() => {
    if (lightbox === null) return
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') setLightbox((i) => (i - 1 + images.length) % images.length)
      else if (e.key === 'ArrowRight') setLightbox((i) => (i + 1) % images.length)
      else if (e.key === 'Escape') setLightbox(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox, images.length])

  return (
    <div className="w-full min-h-screen bg-transparent flex flex-col">
      <div className="pt-24 pb-16 px-6 md:px-16 max-w-6xl mx-auto w-full flex-1">
        <h1 className="text-4xl md:text-7xl font-extrabold text-[#FACC15] mb-4">GALLERY</h1>
        <p className="text-white/60 text-base md:text-lg mb-12 max-w-2xl">
          Moments from Blueprint Lucknow Guild — April 19, 2026
        </p>

        {loading && (
          <p className="text-white/40 text-sm">Loading photos…</p>
        )}

        {!loading && error && (
          <p className="text-red-400/70 text-sm">Failed to load gallery. Please try again later.</p>
        )}

        {!loading && !error && images.length === 0 && (
          <p className="text-white/40 text-sm">No photos yet. Check back soon!</p>
        )}

        {!loading && !error && images.length > 0 && (
          <>
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
              {images.map((img, idx) => (
                <div
                  key={img.src}
                  className="break-inside-avoid overflow-hidden rounded-xl cursor-pointer border border-[#657795]/20 hover:border-[#FACC15]/50 transition-all duration-300 hover:scale-[1.02]"
                  onClick={() => openLightbox(idx)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {hasMore && (
              <div className="flex justify-center mt-10">
                <button
                  onClick={loadMore}
                  className="bg-[#FACC15] text-[#15294D] font-bold px-10 py-3 rounded hover:bg-yellow-300 transition-colors"
                >
                  Load More ({allImages.length - visibleCount} remaining)
                </button>
              </div>
            )}
          </>
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
          <img
            src={images[lightbox].src}
            alt={images[lightbox].alt}
            className="max-h-[90vh] max-w-[90vw] rounded-xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute right-4 text-white/70 hover:text-white text-4xl font-bold px-2"
            onClick={(e) => { e.stopPropagation(); next() }}
          >
            ›
          </button>
          <span className="absolute bottom-4 text-white/40 text-sm">
            {lightbox + 1} / {allImages.length}
          </span>
        </div>
      )}

      <Contact />
    </div>
  )
}

export default Gallery
