import React, { useState } from "react";
import Link from "next/link";

import API from "../src/core/api/axiosConfig";
import { getFixturesApi } from "../src/features/Fixtures/api/index";

export default function Home() {
  const [logo, setLogo] = useState();
  const api = new API();

  const res = api.GetMethod("/football/fixtures/?date=2023-05-19");

  const fix = getFixturesApi({ date: "2023-05-19" });
  fix.then((res) => console.log("res --->", res));
  return (
    <div>
      <div className="text-blue-700 hover:text-blue-900">
        <Link href="/fixtures">Go to Fixtures page</Link>
        <img src={logo} />
      </div>
    </div>
  );
}
