import React, { useEffect, useState } from "react";
import Message from "./Message";
import GameTable from "./GameTable";
// import { getFixtureApi } from "../../api/index"; // TODO: use base path

type MatchData = {
  // TODO: why is this not used
  matchDate: string;
  stadium: string;
  league: string;
  referee: string | null | undefined;
};

const GameInfo = () => {
  // TODO: bad naming
  const [calender, setCalender] = useState("");
  const [stadium, setStadium] = useState("");
  const [league, setLeague] = useState("");
  const [referee, setReferee] = useState("");

  // useEffect(() => {
  //   getFixtureApi()
  //     .then((res) => {
  //       if (res.status === 200) {
  //         const data = res.data;
  //         setCalender(data.matchDate);
  //         setStadium(data.stadium);
  //         setLeague(data.league);
  //         setReferee(data.referee);
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <div className="m-4">
      <Message />
      <GameTable
        calender={calender}
        stadium={stadium}
        league={league}
        referee={referee}
      />
    </div>
  );
};

export default GameInfo;
