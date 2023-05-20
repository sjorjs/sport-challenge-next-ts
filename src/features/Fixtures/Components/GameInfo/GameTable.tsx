"use client";
import React, { FC } from "react";
import { Divider, TableRow, useTheme } from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import { TableBody } from "@mui/material";
import TableCell from "@mui/material/TableCell";

type GameTableProps = {
  // TODO: this must be pascal case
  calender: string;
  stadium: string;
  league: string;
  referee: string;
};

const GameTable: FC<GameTableProps> = ({
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
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="right">
                <h3 className="font-bold" style={{ direction: "rtl" }}>
                  {referee}
                </h3>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="right">
                <h3 className="font-bold" style={{ direction: "rtl" }}>
                  {calender}
                </h3>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="right">
                <h3 className="font-bold" style={{ direction: "rtl" }}>
                  {stadium}
                </h3>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="right">
                <h3 className="font-bold" style={{ direction: "rtl" }}>
                  {league}
                </h3>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default GameTable;
