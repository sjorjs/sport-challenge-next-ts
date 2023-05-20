import React from "react";
import Message from "./Message";
import GameTable from "./GameTable";
import LatesFixtures from "./LatesFixtures";

const GameInfo = () => {
  return (
    <div className="m-4">
      <Message />
      <GameTable />
      <LatesFixtures />
    </div>
  );
};

export default GameInfo;
