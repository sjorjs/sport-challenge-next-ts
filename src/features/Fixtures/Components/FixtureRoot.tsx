import React from "react";
import GameInfo from "./GameInfo";
import RecentGames from "../../Games/RecentGames";

const FixturePage = () => {
  return (
    <React.Fragment>
      <GameInfo />
      <RecentGames />
    </React.Fragment>
  );
};

export default FixturePage;
