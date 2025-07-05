"use client";

import { useState } from "react";

export default function AddListingForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [photos, setPhotos] = useState<FileList | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const uploadListing = async () => {

  }

  return (
    <div>
      <form id="add-listing" onSubmit={uploadListing}>
        <label htmlFor="title">Title</label>
        <input id="title" name="title" type="text" value={title} placeholder="Property title..." onChange={e => setTitle(e.target.value)} required />
        <label htmlFor="description">Description</label>
        <textarea
        form="add-listing"
          id="description"
          name="description"
          value={description}
          placeholder="Property description..."
          maxLength={400}
          onChange={e => setDescription(e.target.value)}
        />
        <label htmlFor="photos"
        <button type="submit">Create listing</button>
      </form>
    </div>
  )
}
