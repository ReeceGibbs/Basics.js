//https://mui.com/components/tables/
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { AppTheme, CustomTypography } from '../../AppTheme';
import { Link } from '@mui/material';

//here we style our table
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: AppTheme.palette.quaternary,
    color: theme.palette.common.white,
  }
}));

const StyledTableRow = styled(TableRow)(() => ({
  '&:nth-of-type(odd)': {
    backgroundColor: AppTheme.palette.tertiary,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

//we define our data schema
function createData(name, description, link) {
  return { name, description, link };
}

//our list of data that we will loop through to populate our table
const rows = [
  createData('Codeacademy', 'Introduction to JavaScript course', 'https://www.codecademy.com/learn/introduction-to-javascript'),
  createData('JavaScript.com by Pluralsight', 'Great place to dip your toes into JavaScript', 'https://www.javascript.com/'),
  createData('MDN Web Docs - JavaScript', 'Useful and professional website for JavaScript tutorials and syntax references', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'),
  createData('W3 Schools - JavaScript', 'Detailed and free JavaScript tutorials', 'https://www.w3schools.com/js/'),
  createData('Auth0 - A Brief History of JavaScript', 'Well-written article on the history of the language', 'https://auth0.com/blog/a-brief-history-of-javascript/'),
];

//the actual Reference table hood that we export
export default function ReferenceTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <StyledTableRow>
            <StyledTableCell><CustomTypography>Name</CustomTypography></StyledTableCell>
            <StyledTableCell><CustomTypography>Description</CustomTypography></StyledTableCell>
            <StyledTableCell><CustomTypography>Link</CustomTypography></StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.description}>
              <StyledTableCell component="th" scope="row">
                <CustomTypography>{row.name}</CustomTypography>
              </StyledTableCell>
              <StyledTableCell><CustomTypography>{row.description}</CustomTypography></StyledTableCell>
              <StyledTableCell>
                <Link 
                  href={row.link}
                  target="_blank"
                  style={{ textDecoration: 'none' }}
                >
                  <CustomTypography
                    color={AppTheme.palette.primary}
                  >
                    {row.link}
                  </CustomTypography>
                </Link>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
