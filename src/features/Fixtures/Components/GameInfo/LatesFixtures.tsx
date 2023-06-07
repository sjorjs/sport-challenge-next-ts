import React, { FC, useEffect, useState } from "react";
import { getFixtureAPI } from "../../api";

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

interface LatestFixturesData {
  home: {
    home_goals: number;
    away_goals: number;
    home: {
      logo: string;
    };
    away: {
      logo: string;
    };
  }[];
  away: {
    home_goals: number;
    away_goals: number;
    home: {
      logo: string;
    };
    away: {
      logo: string;
    };
  }[];
}

const LatesFixtures: FC = () => {
  const [fixture, setFixture] = useState<Fixture | undefined>();
  const [latestFixtures, setLatestFixtures] = useState<LatestFixturesData>();

  const callApi = getFixtureAPI({ id: "02be22ec-09a8-4b78-a1bf-f82885065591" });
  useEffect(() => {
    callApi.then((res: any) => {
      if (res.status === 200) {
        console.log(res.data);

        setFixture(res.data);
        setLatestFixtures(res.data.latest_fixtures);
      }
    });
  }, []);

  return (
    <div className="bg-white m-4 rounded flex flex-row p-4">
      <div className="flex flex-row gap-x-4">
        <div>
          {latestFixtures?.home.map((teams, index) => (
            <div className="flex flex-row gap-x-2" key={index}>
              <img className="w-6 h-6 my-2" src={teams.home.logo} alt="" />
              {/* <div className="flex flex-row p-1 bg-gray-100 my-1 rounded"> */}
              <div
                className={
                  teams.home_goals > teams.away_goals
                    ? "bg-green-300 flex flex-row p-1 my-1 rounded"
                    : teams.home_goals < teams.away_goals
                    ? "bg-red-300 flex flex-row p-1 my-1 rounded"
                    : "bg-gray-300 flex flex-row p-1 my-1 rounded"
                }
              >
                <span>{teams.home_goals}</span>
                <span>-</span>
                <span>{teams.away_goals}</span>
              </div>
              <img className="w-6 h-6 my-2" src={teams.away.logo} alt="" />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col font-bold grow text-center ">
        رقابت های اخیر
      </div>
      <div>
        {latestFixtures?.away.map((teams, index) => (
          <div className="flex flex-row gap-x-2" key={index}>
            <img className="w-6 h-6 my-2" src={teams.home.logo} alt="" />
            <div
              className={
                teams.home_goals > teams.away_goals
                  ? "bg-green-300 flex flex-row p-1 my-1 rounded"
                  : teams.home_goals < teams.away_goals
                  ? "bg-red-300 flex flex-row p-1 my-1 rounded"
                  : "bg-gray-300 flex flex-row p-1 my-1 rounded"
              }
            >
              <span>{teams.home_goals}</span>
              <span>-</span>
              <span>{teams.away_goals}</span>
            </div>
            <img className="w-6 h-6 my-2" src={teams.away.logo} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatesFixtures;
