import logo from './logo.svg';
import './App.css';
import ReportCreationView from './components/ReportCreationView';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import InsertEquipoDetail from './components/InsertEquipoDetail';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={ReportCreationView} />
      </Switch>
    </Router>
  );
}

export default App;
