import React from "react";
import FixturePage from "../src/features/Fixtures/Components/FixtureRoot";
import Header from "../src/features/Fixtures/Components/GameInfo/Header";

const fixtures = () => {
  return (
    <div className="bg-slate-200">
      <Header />
      <FixturePage />
    </div>
  );
};

export default fixtures;
