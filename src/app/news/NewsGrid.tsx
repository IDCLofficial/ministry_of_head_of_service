import NewsCard from "./NewsCard";
import newsList from "./newsList";

export default function NewsGrid() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
      {newsList.length === 0 ? (
        <div className="col-span-full text-center py-12 border border-gray-200 rounded">
          <p className="text-lg md:text-xl mb-4 text-gray-600">No news available at the moment.</p>
          <a href="/projects" className="inline-block px-6 py-2 bg-primary-green text-white rounded hover:bg-primary-green/80 transition">Check out our Projects</a>
        </div>
      ) : (
        newsList.map((item, idx) => (
          <NewsCard news={item} key={idx} />
        ))
      )}
    </div>
  );
} 