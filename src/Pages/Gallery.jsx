import React, { useEffect, useState } from 'react'
import Contact from '../components/Contact'

const ImageCard = ({ img, onClick }) => {
  const [loaded, setLoaded] = useState(false)
  return (
    <div
      className="relative aspect-[4/3] overflow-hidden rounded-xl cursor-pointer border border-[#657795]/30 hover:border-[#FACC15]/50 transition-all duration-300 hover:scale-[1.02]"
      onClick={onClick}
    >
      {/* skeleton frame shown until image loads */}
      {!loaded && (
        <div className="absolute inset-0 bg-[#1a2235] animate-pulse rounded-xl" />
      )}
      <img
        src={img.src}
        alt={img.alt}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
      />
    </div>
  )
}

const Gallery = () => {
  const [allImages, setAllImages] = useState([])
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

  const openLightbox = (idx) => setLightbox(idx)
  const closeLightbox = () => setLightbox(null)
  const prev = () => setLightbox((i) => (i - 1 + allImages.length) % allImages.length)
  const next = () => setLightbox((i) => (i + 1) % allImages.length)

  useEffect(() => {
    if (lightbox === null) return
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') setLightbox((i) => (i - 1 + allImages.length) % allImages.length)
      else if (e.key === 'ArrowRight') setLightbox((i) => (i + 1) % allImages.length)
      else if (e.key === 'Escape') setLightbox(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox, allImages.length])

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

        {!loading && !error && allImages.length === 0 && (
          <p className="text-white/40 text-sm">No photos yet. Check back soon!</p>
        )}

        {!loading && !error && allImages.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {allImages.map((img, idx) => (
              <ImageCard key={img.src} img={img} onClick={() => openLightbox(idx)} />
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
          <img
            src={allImages[lightbox].src}
            alt={allImages[lightbox].alt}
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
