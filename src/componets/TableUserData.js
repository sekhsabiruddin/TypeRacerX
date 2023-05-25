import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { useTheme } from "../Context/ThemeContext";

const TableUserData = ({ data }) => {
  const { theme } = useTheme();
  const cellStyleHeader = {
    color: theme.typeBoxText,
    textAlign: "center",
    fontSize: "24px",
    fontFamily: "'Roboto Mono', monospace",
  };
  const cellStyleTd = {
    color: theme.typeBoxText,
    textAlign: "center",
    fontFamily: "'Roboto Mono', monospace",
  };

  return (
    <div className="table">
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={cellStyleHeader}>WPM</TableCell>
              <TableCell style={cellStyleHeader}>Accuracy</TableCell>
              <TableCell style={cellStyleHeader}>Character</TableCell>
              <TableCell style={cellStyleHeader}>Date</TableCell>
              {/* Add more table header cells as needed */}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.id}>
                <TableCell style={cellStyleTd}>{item.wpm}</TableCell>
                <TableCell style={cellStyleTd}>{item.accuracy}</TableCell>
                <TableCell style={cellStyleTd}>{item.characters}</TableCell>
                <TableCell style={cellStyleTd}>
                  {item.timeStamp.toDate().toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableUserData;
