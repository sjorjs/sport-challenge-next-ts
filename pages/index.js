import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="text-blue-700 hover:text-blue-900">
        <Link href="/fixtures">Go to Fixtures page</Link>
      </div>
    </div>
  );
}
