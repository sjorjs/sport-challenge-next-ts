import React, { useEffect, useState } from "react";
import { getRecentGames } from "../Fixtures/api/index";

type GameData = {
  team1: {
    teamName: string;
    score: number;
  };
  team2: {
    teamName: string;
    score: number;
  };
};

const Index = () => {
  // TODO: bad naming
  const [games, setGames] = useState<GameData[]>([]);

  useEffect(() => {
    getRecentGames()
      .then((res) => {
        if (res.status === 200) {
          const data = res.data;
          setGames(data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bg-white m-4 rounded flex flex-row p-4">
      <div>
        {games.map((game, index) => {
          return (
            <div className="flex flex-row gap-x-2 m-2" key={index}>
              <div>{game.team1.teamName}</div>
              <div className="bg-gray-100 flex flex-row p-2 rounded">
                <div>{game.team1.score}</div>
                <span> - </span>
                <div className="bg-gray-100">{game.team2.score}</div>
              </div>
              <div>{game.team2.teamName}</div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col font-bold grow text-center ">
        رقابت های اخیر
      </div>
      <div>
        {games.map((game, index) => {
          return (
            // TODO: duplicate code
            <div className="flex flex-row gap-x-2 m-2" key={index}>
              <div>{game.team2.teamName}</div>
              <div className="bg-gray-100 flex flex-row p-2 rounded">
                <div>{game.team2.score}</div>
                <span> - </span>
                <div className="bg-gray-100">{game.team1.score}</div>
              </div>
              <div>{game.team1.teamName}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Index;
