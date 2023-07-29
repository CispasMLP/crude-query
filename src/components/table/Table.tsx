import useData from "../../hooks/useData"
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


const Table1=({info:any})=>{
  const { data} = useData();
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell >TITLE</TableCell>
            <TableCell >DESCRIPTION</TableCell>
            <TableCell >ACTION</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row) => (
            <TableRow key={row.id}sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell >{row.title}</TableCell>
              <TableCell >{row.description}</TableCell>
              <TableCell >{row.published}</TableCell>
       
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Table1




