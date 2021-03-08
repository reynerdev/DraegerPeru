import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { findByLabelText } from '@testing-library/react';
import DetailReportState from './hooks/DetailReportState';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    // justifyContent: 'center',
    '& .MuiTextField-root': {
      margin: theme.spacing(4),
      width: '30ch',
      backgroundColor: 'white',
    },
  },
}));
const InputReportDetail = ({
  reporte,
  setNumeroReporte,
  setRucCliente,
  setNombreCliente,
  setNombreIngeniero,
  setFechaServicio,
  setProblemaReportado,
  setCertificadoPrueba,
  setPersonaContacto,
}) => {
  console.log('InputReportDetail');
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        required
        id="outlined-basic"
        label="Numero de Reporte"
        placeholder="L2121012000"
        value={reporte.numeroReporte}
        onChange={(e) => setNumeroReporte(e.target.value)}
        margin="normal"
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
      />

      <TextField
        required
        id="outlined-basiSc"
        label="Numero de Ruc"
        placeholder="20202022"
        value={reporte.rucCliente}
        onChange={(e) => setRucCliente(e.target.value)}
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        required
        id="outlined-basic"
        label="Nombre del Cliente"
        placeholder="BUENAVENTURA S.A.C"
        value={reporte.nombreCliente}
        onChange={(e) => setNombreCliente(e.target.value)}
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
      />

      <TextField
        required
        id="outlined-basic"
        label="Required"
        placeholder="Ing. Reyner Loza"
        value={reporte.nombreIngeniero}
        onChange={(e) => setNombreIngeniero(e.target.value)}
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
      />

      <TextField
        required
        id="outlined-basic"
        type="date"
        variant="outlined"
        label="Fecha Servicio"
        // value={reporte.fet}
        onChange={(e) => setFechaServicio(e.target.value)}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        required
        id="outlined-basic"
        variant="outlined"
        label="Problema Reportado"
        value={reporte.problemaReportado}
        onChange={(e) => setProblemaReportado(e.target.value)}
        InputLabelProps={{
          shrink: true,
        }}
      />

      <TextField
        required
        id="outlined-basic"
        variant="outlined"
        label="Certificado de Prueba"
        value="Result Time Instructions"
        value={reporte.certificadoPrueba}
        onChange={(e) => setCertificadoPrueba(e.target.value)}
        InputLabelProps={{
          shrink: true,
        }}
      />

      <TextField
        required
        id="outlined-basic"
        variant="outlined"
        label="Persona de Contacto"
        value={reporte.personaContacto}
        onChange={(e) => setPersonaContacto(e.target.value)}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
};

export default InputReportDetail;
