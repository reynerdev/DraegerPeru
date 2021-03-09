import { Breadcrumbs } from '@material-ui/core';
import React, { useReducer } from 'react';
import styled from 'styled-components';
import ReportCreationBreadCrumb from './ReportCreationBreadCrumb';
import Logo from '../assets/Logo.svg';
import InputReportDetail from './InputReportDetail';
import { useRouteMatch, Switch, Route } from 'react-router-dom';
import InsertEquipoDetail from './InsertEquipoDetail';
import ReportCreationTabs from './ReportCreationTabs';
import DetailReportState from './hooks/DetailReportState';
import EquiposReducer from './reducer/EquiposReducer';

const ReportCreationView = () => {
  console.log(useRouteMatch());

  const { path, url } = useRouteMatch();
  const [selectedTab, setSelectedTab] = React.useState(0);
  const [nReporte, setNReporte] = React.useState('');
  const [
    reporte,
    setNumeroReporte,
    setRucCliente,
    setNombreCliente,
    setNombreIngeniero,
    setFechaServicio,
    setProblemaReportado,
    setCertificadoPrueba,
    setPersonaContacto,
  ] = DetailReportState();

  const [equipos, dispatch] = useReducer(EquiposReducer, []);

  console.log(nReporte, 'Numero Reporte');
  return (
    <Wrapper>
      <InsideWrapper>
        <LogoWrapper>
          <img src={Logo} alt="Logo" width="200px" />
        </LogoWrapper>
        <ReportCreationTabs
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
        <InputArea>
          {/* <Switch>
            <Route path={`/addequipo`} component={InsertEquipoDetail} />
            <Route exact path={`${path}`} component={InputReportDetail} />
          </Switch> */}

          {selectedTab === 0 && (
            <InputReportDetail
              reporte={reporte}
              setNumeroReporte={setNumeroReporte}
              setRucCliente={setRucCliente}
              setNombreCliente={setNombreCliente}
              setNombreIngeniero={setNombreIngeniero}
              setFechaServicio={setFechaServicio}
              setProblemaReportado={setProblemaReportado}
              setCertificadoPrueba={setCertificadoPrueba}
              setPersonaContacto={setPersonaContacto}
            />
          )}
          {selectedTab === 1 && (
            <InsertEquipoDetail equipos={equipos} dispatch={dispatch} />
          )}
        </InputArea>
      </InsideWrapper>
    </Wrapper>
  );
};

export default ReportCreationView;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const InsideWrapper = styled.div`
  width: 1160px;
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  align-items: center;
`;

const LogoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 24px 0;
`;

const InputArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #f6f8f9;
  padding: 48px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
`;
