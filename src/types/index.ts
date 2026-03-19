interface Team {
  officialName: string;
}

interface MatchResult {
  homeGoals: number;
  awayGoals: number;
  winner: string | null;
}

interface MatchStage {
  id: string;
  name: string;
}

export interface CalendarEvent {
  status: string;
  dateVenue: string;
  timeVenueUTC: string;
  stadium: string | null;
  homeTeam: Team | null;
  awayTeam: Team | null;
  result: MatchResult | null;
  stage: MatchStage;
  originCompetitionName: string;
}
