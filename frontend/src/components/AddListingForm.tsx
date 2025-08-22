"use client";

import { useState } from "react";
import ImageFileInput from "./ui/ImageFileInput";
import Image from "next/image";
import ListingPreviewPhotoGallery from "./ui/ListingPreviewPhotoGallery";

export default function AddListingForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [photos, setPhotos] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const uploadListing = async () => {

  }

  return (
    <div className="shadow-2xl rounded-2xl min-w-96 w-1/2 flex flex-col items-center py-4 mb-4">
      <form id="add-listing" onSubmit={uploadListing} className="flex flex-col w-full max-w-150 p-4">
        <label className="w-4/5 text-2xl font-bold" htmlFor="title">Title</label>
        <input
          maxLength={50}
          className="mb-4 w-4/5"
          id="title"
          name="title"
          type="text"
          value={title}
          placeholder="Property title..."
          onChange={e => setTitle(e.target.value)}
          required
        />
        <label className="w-4/5 text-2xl font-bold" htmlFor="description">Description</label>
        <textarea
        className="mb-4 max-h-max"
          form="add-listing"
          id="description"
          name="description"
          value={description}
          placeholder="Property description..."
          maxLength={400}
          onChange={e => setDescription(e.target.value)}
        />
        <ImageFileInput onFilesChange={(selectedPhotos) => setPhotos(selectedPhotos)} />
        <ListingPreviewPhotoGallery photos={photos} setPhotos={setPhotos}/>
        <button
          className="mt-4 py-4 bg-[var(--primary-color)] text-white font-bold rounded-3xl cursor-pointer hover:opacity-90"
          type="submit"
        >Create listing</button>
      </form>
    </div>
  )
}
