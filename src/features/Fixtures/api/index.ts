import { AxiosResponse } from "axios";
import API, { baseUrl } from "../../../core/api/axiosConfig";

type FootballFixtureInfoType = FixtureInfoSummaryType & {
  round: LeagueRoundType;
  venue: VenueType;
  referee?: string;
  events: FixtureEventType[];
  latest_fixtures?: [];
  status: string;
  elapsed?: number | null;
  winner?: string | null;
  show_lineup: boolean;
  has_group: boolean;
  round_phase: boolean;
};

type FixtureEventType = {
  type: "G" | "C" | "S" | "V";
  team: TeamType;
  player?: [];
  assist_player?: string | null;
  detail: string;
  elapsed_time?: number | null;
  extra_time?: number | null;
  home_goals_upto_now?: number;
  away_goals_upto_now?: number;
};

type VenueType = {
  name: string;
  city: string;
};

type LeagueRoundType = {
  league_id: number | string;
  name: string;
  country: string;
  logo?: string;
  season: string;
  season_id: number;
  round?: string;
  is_cup: boolean;
};

type FixtureInfoSummaryType = {
  id?: number | string;
  api_id: number;
  home: TeamType;
  away: TeamType;
  start_time: string;
  status: string;
  elapsed: number | string;
  home_goals?: number | null;
  away_goals?: number | null;
  week?: string;
  winner?: string;
  archive_url?: string | null;
  live_url?: string | null;
  live_banner?: string | null;
  home_penalty_goals?: number | null;
  away_penalty_goals?: number | null;
};

type TeamType = {
  id: number;
  name: string;
  logo?: string;
  country?: string;
  winner?: boolean;
};

type GetFixturesRequest = {
  name?: string;
  date?: string;
  isActive?: boolean;
  isToday?: boolean;
};

type GetFixtureRequest = {
  id?: string;
  token?: string | null | undefined;
  isActive?: boolean;
};

const api = new API();

export const getFixturesApi = async (args: GetFixturesRequest) => {
  // TODO: specify the type of input
  console.log();
  let path = `/football/fixtures/?date=${args.date}`;
  let url = baseUrl + path;
  const name = "GetFixture";
  return api.GetMethod({ url, name });
};

export const getFixtureAPI = async (
  args: GetFixtureRequest
): Promise<AxiosResponse<FootballFixtureInfoType, any>> => {
  let path = `/football/fixtures/${args.id}/`;
  let url = baseUrl + path;
  const name = "GetFixture";
  return api.GetMethod<FootballFixtureInfoType>({ url, name });
};
