import React, { useState } from 'react';

const DetailReportState = () => {
  const [reporte, setReport] = useState({
    numeroReporte: '',
    rucCliente: '',
    nombreCliente: '',
    nombreIngeniero: '',
    fechaServicio: '',
    problemaReportado: '',
    certificadoPrueba: 'Result Time Sheet Instructions',
    personaContacto: '-',
  });

  const setRucCliente = (value) => {
    setReport((prevState) => {
      console.log('RUC', value);
      return { ...prevState, rucCliente: value };
    });
  };
  const setNombreIngeniero = (value) => {
    setReport((prevState) => {
      return { ...prevState, nombreIngeniero: value };
    });
  };
  const setNombreCliente = (value) => {
    setReport((prevState) => {
      return { ...prevState, nombreCliente: value };
    });
  };

  const setFechaServicio = (value) => {
    setReport((prevState) => {
      return { ...prevState, fechaServicio: value };
    });
  };

  const setNumeroReporte = (value) => {
    setReport((prevState) => {
      return { ...prevState, numeroReporte: value };
    });
  };

  const setProblemaReportado = (value) => {
    setReport((prevState) => {
      return { ...prevState, problemaReportado: value };
    });
  };

  const setCertificadoPrueba = (value) => {
    setReport((prevState) => {
      return { ...prevState, certificadoPrueba: value };
    });
  };

  const setPersonaContacto = (value) => {
    setReport((prevState) => {
      return { ...prevState, personaContacto: value };
    });
  };

  return [
    reporte,
    setNumeroReporte,
    setRucCliente,
    setNombreCliente,
    setNombreIngeniero,
    setFechaServicio,
    setProblemaReportado,
    setCertificadoPrueba,
    setPersonaContacto,
  ];
};

export default DetailReportState;
