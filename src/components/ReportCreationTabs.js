import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
// import clsx from clsx
const theme = createMuiTheme({
  overrides: {
    MuiTabs: {
      indicator: {
        backgroundColor: '#FFD103',
      },
    },
  },
});

// import { twitterTabsStylesHook } from '@mui-treasury/styles/tabs';

const useStyles = makeStyles((theme) => ({
  root: {
    alignSelf: 'flex-start',
    // marginBottom: '48px',
  },

  indicator: {
    backgroundColor: '#FFD103',
  },
}));

const ReportCreationTabs = ({ setSelectedTab, selectedTab }) => {
  const handleChange = (e, newValue) => {
    setSelectedTab(newValue);
  };

  const classes = useStyles();
  return (
    <Tabs
      classes={{ root: classes.root, indicator: classes.indicator }}
      value={selectedTab}
      onChange={handleChange}
      aria-label="simple tabs example"
    >
      <Tab label="Detalles del Reporte" />
      <Tab label="Ingreso Equipos" />
    </Tabs>
  );
};

export default ReportCreationTabs;
