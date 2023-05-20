"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../../../../core/components/Navbar";
import API from "../../../../core/api/axiosConfig";
import Image from "next/image";
import { getFixturesApi } from "../../api";
import { DateConverter } from "../../utils/DateConverter";

const Index = () => {
  const [league, setLeague] = useState<any>();
  const [fixtures, setFixtures] = useState();
  const [dateTimeString, setDateTimeString] = useState<string>("");
  const fixturesApi = getFixturesApi({ date: "2023-05-19" });
  useEffect(() => {
    fixturesApi
      .then((res) => {
        if (res.status === 200) {
          setLeague(res.data);
          setDateTimeString(res.data?.all[0].fixtures[0].start_time);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(league);
  // const dateTimeString = "2023-05-19T22:30:00";
  const [date, time] = dateTimeString.split("T");

  return (
    <div className="bg-white">
      <div className="flex flex-row gap-x-2 mx-8 p-4">
        <div className="w-8 h-8">
          <img src={league?.all[0].fixtures[0].away.logo} alt="team1" />
          <div>{league?.all[0].fixtures[0].away.name}</div>
        </div>
        <div className="flex flex-col grow text-center ">
          <h4 className="font-bold">{time}</h4>
          <h5 className="font-blod">{date}</h5>
        </div>
        <div className="w-8 h-8">
          <img src={league?.all[0].fixtures[0].home.logo} alt="team1" />
          <div>{league?.all[0].fixtures[0].home.name}</div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Index;
