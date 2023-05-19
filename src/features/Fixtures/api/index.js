import { AxiosResponse } from "axios";
import API from "../../../core/api/axiosConfig";

const api = new API();

export const getFixtureApi = async (args) => {
  let path = "/match";
  try {
    const result = await api.GetMethod(path);
    if (result.status === 200) {
      return result;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getRecentGames = async (args) => {
  let path = "/recentlymatches";
  try {
    const result = await api.GetMethod(path);
    if (result.status === 200) {
      return result;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};
