"use client";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { getFixtureApi } from "../../features/Fixtures/api/index";
import API from "../api/axiosConfig";
import Image from "next/image";

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
  const [fixture, setFixture] = useState<object>({});

  useEffect(() => {
    const result = getFixtureApi({ url: "/match" });
    result
      .then((res) => {
        if (res.status === 200) {
          const data = res.data;
          setMatchTime(data.matchTime);
          setMatchDate(data.matchDate);
          setTeam1(data.team1);
          setTeam2(data.team2);
          setFixture(data);
          console.log(fixture);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bg-white">
      <div className="flex flex-row gap-x-2 mx-8 p-4">
        <div className="w-8 h-8">
          <img src={fixture.team1ImageUrl} alt={team1} />
          <div>{team1}</div>
        </div>
        <div className="flex flex-col grow text-center ">
          <div className="font-bold">{matchTime}</div>
          <div className="font-bold">{matchDate}</div>
        </div>
        <div className="w-8 h-8">
          <img src={fixture.team2ImageUrl} alt={team1} />
          <div>{team2}</div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Index;
