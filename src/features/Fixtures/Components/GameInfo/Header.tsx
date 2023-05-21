import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { getFixtureAPI } from "../../api";
import { dateConverter } from "../../utils/DateConverter";

interface Fixture {
  start_time: string;
  away: {
    logo: string;
    name: string;
  };
  home: {
    logo: string;
    name: string;
  };
}

const Header = () => {
  const [fixture, setFixture] = useState<Fixture | undefined>();
  const [dateTimeString, setDateTimeString] = useState<string>("");

  const callApi = getFixtureAPI({ id: "02be22ec-09a8-4b78-a1bf-f82885065591" });
  useEffect(() => {
    callApi.then((res: any) => {
      if (res.status === 200) {
        setFixture(res.data);
        setDateTimeString(res.data.start_time);
      }
    });
  }, []);

  const [date, time] = dateConverter({ dateTimeString });

  return (
    <div className="bg-white">
      <div className="flex flex-row gap-x-2 mx-8 p-4">
        <div className="flex flex-col justify-center">
          <img className="w-8 h-8" src={fixture?.home.logo} alt="team1" />
          <h6 className="text-[15px]">{fixture?.home.name}</h6>
        </div>
        <div className="flex flex-col grow text-center ">
          <h4 className="font-bold">{time}</h4>
          <h5 className="font-blod">{date}</h5>
        </div>
        <div className="flex flex-col justify-center">
          <img className="w-8 h-8" src={fixture?.away.logo} alt="team1" />
          <h6 className="text-[15px]">{fixture?.away.name}</h6>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
