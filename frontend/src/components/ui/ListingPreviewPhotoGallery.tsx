"use client"

import { useState } from "react";

interface GalleryProps {
  photos: File[];
  setPhotos: (photos: File[]) => void
}

export default function ListingPreviewPhotoGallery({photos, setPhotos}: GalleryProps) {
  const [selected, setSelected] = useState<string | null>(null)
  return (
    <div>
      <div className="flex flex-wrap gap-1 mt-4 justify-center">
          {photos.map((photo, id) => {
            const url = URL.createObjectURL(photo)
            return (
              <div
                key={id}
                className="relative aspect-square w-32 cursor-pointer"
                onClick={() => setSelected(url)}
              >
                <button
                  className="absolute top-1 right-1 bg-black/30 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold hover:bg-red-800"
                  onClick={(e) => {
                    e.stopPropagation();
                    setPhotos(photos.filter((_, i) => i !== id));
                  }}
                >
                  x
                </button>
                <img
                  src={url}
                  alt="Image preview"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            );
          }
        )}
      </div>
      {selected && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
        onClick={() => setSelected(null)}
        >
          <div className="relative max-w-3xl max-h-[90vh]">
          <img src={selected}
            alt="selected image preview"
            className="w-auto max-h-[90vh] rounded-2xl shadow-lg"
            />
            <button
              onClick={() => setSelected(null)}
              className="absolute top-2 right-2 bg-black/50 text-white rounded-full px-3 py-1 text-sm font-bold"
            >
              x
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
