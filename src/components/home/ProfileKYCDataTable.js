import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Fab from '@material-ui/core/Fab';
import Title from '../../util/Title';
import EditIcon from '@material-ui/icons/Edit';
import { DataContext } from '../../context/DataProvider';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
  badgeYellow: {
    background: 'Yellow',
  },
}));

function ProfileKYCDataTable() {
  const classes = useStyles();
  const data = useContext(DataContext);
  let history = useHistory();
  console.log('data==>', data.rows);

  function editHandler(event, row) {
    event.preventDefault();
    data.getFilterData();
    history.push('/profile', row);
  }
  useEffect(() => {
    data.getFilterData();
  });

  if (data.rows.length === 0) {
    return <div id={'errorMessage'}>NO RECORDS FOUND</div>;
  }
  // if (!data.rows) {
  //   return <div>NO RECORDS FOUND </div>;
  // }

  return (
    <>
      <Title>KYC Details</Title>
      <Table size='small'>
        <TableHead>
          <TableRow>
            <TableCell>Customer ID</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>City</TableCell>
            <TableCell>State</TableCell>
            <TableCell>Country</TableCell>
            <TableCell>KYC Status</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.rows.map((row, i) => (
            <TableRow key={row.customerID}>
              <TableCell id={`custId${i + 1}`}>{row.customerID}</TableCell>
              <TableCell id={`fName${i + 1}`}>
                {row.profile.firstName}
              </TableCell>
              <TableCell id={`lastName${i + 1}`}>
                {row.profile.lastName}
              </TableCell>
              <TableCell id={`address${i + 1}`}>
                {row.profile.address}
              </TableCell>
              <TableCell id={`city${i + 1}`}>{row.profile.city}</TableCell>
              <TableCell id={`state${i + 1}`}>{row.profile.state}</TableCell>
              <TableCell id={`country${i + 1}`}>
                {row.profile.country}
              </TableCell>
              <TableCell id={`kycStatus${i + 1}`}>
                {row.profile.kycStatus}
              </TableCell>
              <TableCell>
                <Fab
                  variant='round'
                  id={`edit${i + 1}`}
                  size='small'
                  aria-label='edit'
                  color='secondary'
                  onClick={e => editHandler(e, row)}
                >
                  <EditIcon className={classes.extendedIcon} fontSize='small' />
                </Fab>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

export default React.memo(ProfileKYCDataTable);
