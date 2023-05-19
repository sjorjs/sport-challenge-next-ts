import React, { useEffect, useState } from "react";
import Message from "./Message";
import GameTable from "./GameTable";
import { getFixtureApi } from "../../api/index";

type MatchData = {
  matchDate: string;
  stadium: string;
  league: string;
  referee: string;
};

const Index = () => {
  const [calender, setCalender] = useState("");
  const [stadium, setStadium] = useState("");
  const [league, setLeague] = useState("");
  const [referee, setReferee] = useState("");

  useEffect(() => {
    const result = getFixtureApi();
    result
      .then((res) => {
        if (res.status === 200) {
          const data = res.data;
          setCalender(data.matchDate);
          setStadium(data.stadium);
          setLeague(data.league);
          setReferee(data.referee);
        }
      })
      .catch((err) => console.log(err));
  }, []);

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

export default Index;
