import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import React from 'react';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#FFD103',
  },
}));

const YellowButton = ({ children }) => {
  const classes = useStyles();
  return (
    <Button classes={{ root: classes.root }} variant="contained">
      {children}
    </Button>
  );
};

export default YellowButton;
