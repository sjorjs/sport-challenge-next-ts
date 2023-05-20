import { AxiosResponse } from "axios";
import API, { baseUrl } from "../../../core/api/axiosConfig";

const api = new API();

type GetFixturesRequest = {
  name?: string | undefined,
  date?: string | undefined,
  isActive?: boolean | undefined,
  isToday?: boolean | undefined 
};

export const getFixturesApi = async (args: GetFixturesRequest) => {
  // TODO: specify the type of input
  console.log();
  let path = `/football/fixtures/?date=${args.date}`;
  let url = baseUrl + path;
  const name = "GetFixture";
  return api.GetMethod({ url, name });
};

// export const getRecentGames = async (args) => {
//   let path = "/recentlymatches";
//   try {
//     const result = await api.GetMethod(path);
//     if (result.status === 200) {
//       return result;
//     }
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };
