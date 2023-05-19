"use client";
import React, { FC } from "react";
import { Divider, useTheme } from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import { TableBody } from "@mui/material";
import TableCell from "@mui/material/TableCell";

type gameTableProps = {
  calender: string;
  stadium: string;
  league: string;
  referee: string;
};

const GameTable: FC<gameTableProps> = ({
  calender,
  stadium,
  league,
  referee,
}) => {
  return (
    <div className="bg-white rounded text-center p-2 my-4 flex flex-col">
      <TableContainer>
        <Table>
          <TableBody>
            <TableCell align="right">
              <h3 className="font-bold" style={{ direction: "rtl" }}>
                {calender}
              </h3>
            </TableCell>
          </TableBody>
          <TableBody>
            <TableCell align="right">
              <h3 className="font-bold" style={{ direction: "rtl" }}>
                {stadium}
              </h3>
            </TableCell>
          </TableBody>
          <TableBody>
            <TableCell align="right">
              <h3 className="font-bold" style={{ direction: "rtl" }}>
                {league}
              </h3>
            </TableCell>
          </TableBody>

          <TableBody>
            <TableCell align="right">
              <h3 className="font-bold" style={{ direction: "rtl" }}>
                {referee}
              </h3>
            </TableCell>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default GameTable;
