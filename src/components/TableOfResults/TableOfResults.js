import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function TableOfResults({
  state,
  setState,
  total,
  setTotal,
  totalQuantity,
}) {
  return (
    <div>
      {state && (
        <TableContainer component={Paper} sx={{ marginTop: "17px" }}>
          <Table sx={{ width: 300 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {/* <TableCell>Dessert (100g serving)</TableCell> */}
                <TableCell align="right">id</TableCell>
                <TableCell align="right">Name:</TableCell>
                <TableCell align="right">Quantity:</TableCell>
                <TableCell align="right">Price:</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {state &&
                state.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="right">
                      <img
                        src={row.photo}
                        alt="item"
                        width="50px"
                        height="50px"
                      />
                    </TableCell>
                    <TableCell align="right">{row.name}</TableCell>
                    <TableCell align="right">{row.quantity}</TableCell>
                    <TableCell align="right">{row.price}</TableCell>
                  </TableRow>
                ))}
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  TOTAL
                </TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right">{totalQuantity}</TableCell>
                <TableCell align="right">{total}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
}

// export default TableOfResults;
