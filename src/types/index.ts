interface Team {
  officialName: string;
}

interface MatchResult {
  homeGoals: number;
  awayGoals: number;
  winner?: string;
}

interface MatchStage {
  id: string;
  name: string;
}

interface CalendarEvent {
  status: string;
  dateVenue: string;
  timeVenueUTC: string;
  stadium?: string;
  homeTeam?: Team;
  awayTeam?: Team;
  result?: MatchResult;
  stage: MatchStage;
  originCompetitionName: string;
}
