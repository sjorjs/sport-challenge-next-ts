import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { getFixtureApi } from "../../features/Fixtures/api/index";
import API from "../api/axiosConfig";

type MatchData = {
  matchTime: string;
  matchDate: string;
  team1: string;
  team2: string;
};

const Index = () => {
  const [matchTime, setMatchTime] = useState<string>("");
  const [matchDate, setMatchDate] = useState<string>("");
  const [team1, setTeam1] = useState<string>("");
  const [team2, setTeam2] = useState<string>("");

  // const api = new API();

  // const callApi = api.GetMethod<MatchData>("/match");

  // useEffect(() => {
  //   callApi
  //     .then((respose) => {
  //       if (respose?.status === 200) {
  //         const result = respose.data;
  //         setMatchTime(result.matchTime);
  //         setMatchDate(result.matchDate);
  //         setTeam1(result.team1);
  //         setTeam2(result.team2);
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  useEffect(() => {
    const result = getFixtureApi();
    result
      .then((res) => {
        if (res.status === 200) {
          const data = res.data;
          setMatchTime(data.matchTime);
          setMatchDate(data.matchDate);
          setTeam1(data.team1);
          setTeam2(data.team2);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bg-white">
      <div className="flex flex-row gap-x-2 mx-8 p-4">
        <div>{team1}</div>
        <div className="flex flex-col grow text-center ">
          <div className="font-bold">{matchTime}</div>
          <div className="font-bold">{matchDate}</div>
        </div>
        <div>{team2}</div>
      </div>
      <Navbar />
    </div>
  );
};

export default Index;
