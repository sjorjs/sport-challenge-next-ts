import React, { useEffect, useState } from "react";
import Link from "next/link";

import API from "../src/core/api/axiosConfig";
import { getFixturesApi } from "../src/features/Fixtures/api/index";

export default function Home() {
  const [logo, setLogo] = useState();
  const [data, setData] = useState();
  const api = new API();

  const fix = getFixturesApi({ date: "2023-05-19" });
  useEffect(() => {
    fix.then((response) => {
      console.log(response.data);
      setLogo(response.data.all[3].logo);
      setData(response.data);
    });
  }, []);
  console.log(data?.all);
  return (
    <div>
      <div className="text-blue-700 hover:text-blue-900">
        <Link href="/fixtures">Go to Fixtures page</Link>

        {data?.all.map((i) => {
          return <div>{i.fixtures[0].home.name}</div>;
        })}
      </div>
    </div>
  );
}
