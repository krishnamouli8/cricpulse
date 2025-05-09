import { FC } from 'react';
import Link from 'next/link';
import { Match } from '@/lib/types/match';
import { formatDate } from '@/lib/utils/date';

interface MatchListProps {
  matches: Match[];
}

const MatchList: FC<MatchListProps> = ({ matches }) => {
  if (matches.length === 0) {
    return <p className="text-gray-500">No matches found</p>;
  }

  return (
    <div className="space-y-4">
      {matches.map((match) => (
        <Link href={`/matches/${match.id}`} key={match.id}>
          <div className="bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow duration-200">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-500">{match.matchType}</span>
              <span className="text-sm text-gray-500">{formatDate(match.startTime)}</span>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden mr-2">
                  <img src={match.teamA.logoUrl} alt={match.teamA.name} className="w-full h-full object-cover" />
                </div>
                <span className="font-medium">{match.teamA.name}</span>
              </div>
              
              <div className="text-sm font-medium text-cricket-blue">vs</div>
              
              <div className="flex items-center">
                <span className="font-medium">{match.teamB.name}</span>
                <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden ml-2">
                  <img src={match.teamB.logoUrl} alt={match.teamB.name} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            
            <div className="mt-2 text-sm text-gray-600">{match.venue}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MatchList;