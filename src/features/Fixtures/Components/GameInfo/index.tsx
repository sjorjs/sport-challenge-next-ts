import React, { useEffect, useState } from "react";
import Message from "./Message";
import GameTable from "./GameTable";
// import { getFixtureApi } from "../../api/index"; // TODO: use base path

const GameInfo = () => {
  // TODO: bad naming

  return (
    <div className="m-4">
      <Message />
      <GameTable />
    </div>
  );
};

export default GameInfo;
