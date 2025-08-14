"use client"

import React from "react";
import MediaGalleryCard from "./MediaGalleryCard";
import SearchBar from "../components/SearchBar";
import ImageViewerModal from "./ImageViewerModal";

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
  const [page, setPage] = React.useState(1);
  const [selected, setSelected] = React.useState<{ src: string; title: string } | null>(null);
  const ITEMS_PER_PAGE = 50;

  // Filter items by search term (case-insensitive, matches title)
  const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Reset to first page when search changes
  React.useEffect(() => {
    setPage(1);
  }, [searchTerm]);

  const totalPages = Math.max(1, Math.ceil(filteredItems.length / ITEMS_PER_PAGE));
  const startIdx = (page - 1) * ITEMS_PER_PAGE;
  const currentItems = filteredItems.slice(startIdx, startIdx + ITEMS_PER_PAGE);

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
          currentItems.map((item, idx) => (
            <MediaGalleryCard
              key={`${startIdx + idx}-${item.title}`}
              image={item.image}
              title={item.title}
              isVideo={item.isVideo}
              onClick={() => setSelected({ src: item.image, title: item.title })}
            />
          ))
        )}
      </div>

      {/* Pagination */}
      {filteredItems.length > ITEMS_PER_PAGE && (
        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            className="px-3 py-1.5 rounded border border-gray-300 text-sm disabled:opacity-50"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
          >
            Prev
          </button>
          <span className="text-sm text-gray-600">
            Page {page} of {totalPages}
          </span>
          <button
            className="px-3 py-1.5 rounded border border-gray-300 text-sm disabled:opacity-50"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>
      )}

      {/* Image Viewer Modal */}
      {selected && (
        <ImageViewerModal
          src={selected.src}
          alt={selected.title}
          onClose={() => setSelected(null)}
        />
      )}
    </>
  );
};

export default MediaGalleryGrid;