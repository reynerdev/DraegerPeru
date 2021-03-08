import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    alignSelf: 'flex-start',
    marginBottom: '48px',
  },
}));
const ReportCreationBreadCrumb = (props) => {
  const {
    history,
    location: { pathname },
  } = props;

  const pathnames = pathname.split('/').filter((x) => x);

  console.log(pathnames);
  const classes = useStyles();
  const handleClick = (event) => {
    event.preventDefault();
  };
  return (
    <Breadcrumbs className={classes.root} aria-label="breadcrumb">
      <Link color="inherit" href="/" onClick={handleClick}>
        Reporte
      </Link>
      <Link color="inherit" onClick={handleClick}>
        Insertar Equipo
      </Link>
      {/* <Typography color="textPrimary">Breadcrumb</Typography> */}
    </Breadcrumbs>
  );
};

export default withRouter(ReportCreationBreadCrumb);
