import React from "react";
import { Breadcrumbs } from "@mui/material";
import { Typography } from "@mui/material/styles/createTypography";
import Link from "@mui/material/Link/Link";

interface BreadCumbValues {
  gameInfo: string;
  news: string;
  gameTable: string;
}

const Navbar = () => {
  const BreadCumbValue: BreadCumbValues = {
    gameInfo: "اطلاعات بازی",
    news: "اخبار",
    gameTable: "جدول",
  };
  return (
    <div className="m-2" style={{ direction: "rtl" }}>
      <Breadcrumbs separator="" aria-label="breadcrumb">
        <Link
          underline="hover"
          mt="24px"
          color="inherit"
          href="/"
          className="font-mono font-bold text-[14px]"
        >
          {BreadCumbValue.gameInfo}
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/news"
          className="font-mono font-bold text-[14px]"
        >
          {BreadCumbValue.news}
        </Link>

        <Link
          underline="hover"
          color="inherit"
          href="/table"
          className="font-mono font-bold text-[14px]"
        >
          {BreadCumbValue.gameTable}
        </Link>
      </Breadcrumbs>
    </div>
  );
};

export default Navbar;
