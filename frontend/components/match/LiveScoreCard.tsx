import { FC } from 'react';
import Link from 'next/link';
import { Match } from '@/lib/types/match';

interface LiveScoreCardProps {
  match: Match;
}

const LiveScoreCard: FC<LiveScoreCardProps> = ({ match }) => {
  const { id, teamA, teamB, teamAScore, teamBScore, matchStatus, matchType, venue } = match;

  const isLive = matchStatus === 'LIVE';
  const isCompleted = matchStatus === 'COMPLETED';

  return (
    <Link href={`/matches/${id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="bg-cricket-blue text-white p-3 flex justify-between items-center">
          <span className="font-semibold text-sm">{matchType}</span>
          <div className="flex items-center">
            {isLive && (
              <span className="flex items-center">
                <span className="bg-red-500 h-2 w-2 rounded-full mr-2 animate-pulse"></span>
                LIVE
              </span>
            )}
            {isCompleted && <span>Completed</span>}
            {!isLive && !isCompleted && <span>{matchStatus}</span>}
          </div>
        </div>
        
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-200 rounded-full mr-3 overflow-hidden">
                <img src={teamA.logoUrl} alt={teamA.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-bold">{teamA.shortName}</h3>
                {teamAScore && (
                  <p className="text-sm">{teamAScore.runs}/{teamAScore.wickets} ({teamAScore.overs})</p>
                )}
              </div>
            </div>
            <div className="text-gray-500 text-xs md:text-sm">vs</div>
            <div className="flex items-center flex-row-reverse text-right">
              <div className="w-10 h-10 bg-gray-200 rounded-full ml-3 overflow-hidden">
                <img src={teamB.logoUrl} alt={teamB.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-bold">{teamB.shortName}</h3>
                {teamBScore && (
                  <p className="text-sm">{teamBScore.runs}/{teamBScore.wickets} ({teamBScore.overs})</p>
                )}
              </div>
            </div>
          </div>
          
          <div className="border-t pt-3">
            <p className="text-sm text-gray-600 truncate">{venue}</p>
            {match.result && <p className="text-sm font-medium text-cricket-dark mt-1">{match.result}</p>}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default LiveScoreCard;