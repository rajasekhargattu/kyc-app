import React, { useState, useEffect } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import { useHistory, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';

const useStyles = makeStyles(theme => ({
  disabledList: {
    lineHeight: theme.spacing(0.3),
    fontWeight: 700,
  },
}));

function SidePanPage() {
  let history = useHistory();
  const location = useLocation();
  const classes = useStyles();
  const [selectedRow, setSelectedRow] = useState();
  const [,setSelectedIndex] = useState();
  // const indexRef = useRef();

  useEffect(() => {
    setSelectedRow(location.state);
  }, [location.state]);

  // useEffect(() => {
  //   console.log('useEffect indexRef.current', indexRef.current);

  //   if (selectedIndex === 0) {
  //     indexRef.current = selectedIndex;
  //     history.push('/profile', selectedRow);
  //   }
  //   if (selectedIndex === 1) {
  //     indexRef.current = selectedIndex;
  //     history.push('/KYCInformation', selectedRow);
  //   }
  // }, [selectedIndex, history, selectedRow]);

  // console.log('Side pan ==> ', location);

  function handleListItemClick(index) {
    setSelectedIndex(index);
    console.log('location', location);
    console.log('index', index);

    switch (index) {
      case 0:
        history.push('/profile', selectedRow);
        return;
      case 1:
        history.push('/KYCInformation', selectedRow);
        return;
      default:
        history.push('/');
        return;
    }
  }
  return (
    <List>
      <ListItem
        button
        // selected={indexRef.current === 0}
        onClick={() => handleListItemClick(0)}
      >
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary='Customer Profile' />
      </ListItem>
      <ListItem
        button
        // selected={indexRef.current === 1}
        onClick={() => handleListItemClick(1)}
      >
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary='KYC Information ' />
      </ListItem>
      <>
        <Divider />
        <ListSubheader id='lblCustomerID' className={classes.disabledList}>
          Customer ID : {location.state ? location.state.customerID : ''}
        </ListSubheader>
        <ListSubheader id='lblKycStatus' className={classes.disabledList}>
          KYC Status : {location.state ? location.state.profile.kycStatus : ''}
        </ListSubheader>
      </>
    </List>
  );
}

export default React.memo(SidePanPage);
