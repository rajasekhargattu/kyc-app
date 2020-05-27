import React, { useContext } from 'react';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { useHistory } from 'react-router-dom';
import { DataContext } from '../../context/DataProvider';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    width: '40%',
  },
  elem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '30ch',
      '&:focus': {
        width: '35ch',
      },
    },
  },
  newFab: {
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(1),
      width: '100%',
    },

    marginLeft: theme.spacing(10),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

function SerachBox() {
  const classes = useStyles();
  const data = useContext(DataContext);
  let history = useHistory();

  const handelSerach = event => {
    event.preventDefault();
    data.getFilterData(event.target.value);
  };
  return (
    <div className={classes.elem}>
      <Paper>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder='Customer ID...'
            onChange={e => handelSerach(e)}
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ id: 'searchCriteria', 'aria-label': 'search' }}
          />
        </div>
      </Paper>
      <div className={classes.newFab}>
        <Fab
          variant='extended'
          size='small'
          color='primary'
          aria-label='add new profile'
          id={'newCustomer'}
          className={classes.margin}
          onClick={() => history.push('/profile')}
        >
          {data.addProfileData()}
          <AddIcon className={classes.extendedIcon} />
          Create New Customer
        </Fab>
      </div>
    </div>
  );
}

export default React.memo(SerachBox);
