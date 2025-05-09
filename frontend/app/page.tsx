import Link from 'next/link';
import LiveScoreCard from '@/components/match/LiveScoreCard';
import MatchList from '@/components/match/MatchList';
import { getUpcomingMatches, getLiveMatches, getRecentNews } from '@/lib/api/client';

export default async function Home() {
  // Fetch data from API
  const liveMatches = await getLiveMatches();
  const upcomingMatches = await getUpcomingMatches();
  const recentNews = await getRecentNews();

  return (
    <main className="container mx-auto px-4 py-8">
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">Live Matches</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {liveMatches.length > 0 ? (
            liveMatches.map((match) => (
              <LiveScoreCard key={match.id} match={match} />
            ))
          ) : (
            <p className="text-gray-500">No live matches at the moment</p>
          )}
        </div>
      </section>
      
      <section className="mb-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Upcoming Matches</h2>
          <Link href="/matches/upcoming" className="text-cricket-blue hover:underline">
            View All
          </Link>
        </div>
        <MatchList matches={upcomingMatches} />
      </section>
      
      <section className="mb-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Latest News</h2>
          <Link href="/news" className="text-cricket-blue hover:underline">
            More News
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentNews.map((news) => (
            <Link href={`/news/${news.id}`} key={news.id} className="block">
              <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 bg-gray-200 relative">
                  <img 
                    src={news.imageUrl} 
                    alt={news.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-500 mb-2">{news.publishedDate}</p>
                  <h3 className="text-lg font-semibold mb-2 line-clamp-2">{news.title}</h3>
                  <p className="text-gray-600 line-clamp-3">{news.summary}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}