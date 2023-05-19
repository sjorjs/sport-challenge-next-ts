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
        <Link underline="hover" mt="24px" color="inherit" href="/">
          {BreadCumbValue.gameInfo}
        </Link>
        <Link underline="hover" color="inherit" href="/news">
          {BreadCumbValue.news}
        </Link>

        <Link underline="hover" color="inherit" href="/table">
          {BreadCumbValue.gameTable}
        </Link>
      </Breadcrumbs>
    </div>
  );
};

export default Navbar;
