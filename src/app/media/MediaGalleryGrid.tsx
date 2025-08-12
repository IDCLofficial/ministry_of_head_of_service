"use client"

import React from "react";
import MediaGalleryCard from "./MediaGalleryCard";
import SearchBar from "../components/SearchBar";

interface MediaItem {
  image: string;
  title: string;
  isVideo?: boolean;
}

interface MediaGalleryGridProps {
  items: MediaItem[];
}

const MediaGalleryGrid: React.FC<MediaGalleryGridProps> = ({ items }) => {
  const [searchTerm, setSearchTerm] = React.useState("");

  // Filter items by search term (case-insensitive, matches title)
  const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handler for input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Handler for form submit (optional: could be used to trigger analytics or other side effects)
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Filtering is already live, so nothing extra needed here
  };

  if (items.length === 0) {
    return (
      <div className="w-full flex flex-col items-center justify-center">
        <h1 className="text-2xl font-medium">No media items found</h1>
      </div>
    );
  }

  return (
    <>
      <SearchBar
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
        onSearch={handleSearch}
      />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.length === 0 ? (
          <div className="col-span-full flex flex-col items-center justify-center py-8">
            <h2 className="text-xl font-medium">No media items match your search</h2>
          </div>
        ) : (
          filteredItems.map((item, idx) => (
            <MediaGalleryCard key={idx} image={item.image} title={item.title} isVideo={item.isVideo} />
          ))
        )}
      </div>
    </>
  );
};

export default MediaGalleryGrid; 