import { Breadcrumbs } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import ReportCreationBreadCrumb from './ReportCreationBreadCrumb';
import Logo from '../assets/Logo.svg';
import InputReportDetail from './InputReportDetail';
import { useRouteMatch, Switch, Route } from 'react-router-dom';
import InsertEquipoDetail from './InsertEquipoDetail';
import ReportCreationTabs from './ReportCreationTabs';
const ReportCreationView = () => {
  console.log(useRouteMatch());

  const { path, url } = useRouteMatch();
  const [selectedTab, setSelectedTab] = React.useState(0);
  const [nReporte, setNReporte] = React.useState('');
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
            <InputReportDetail nReporte={nReporte} setNReporte={setNReporte} />
          )}
          {selectedTab === 1 && <InsertEquipoDetail />}
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
