import React, { useEffect, useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import YellowButton from './YellowButton';

import { TYPES } from './reducer/EquiposReducer';
import { TrendingUpOutlined } from '@material-ui/icons';
import { v4 as uuidv4 } from 'uuid';
import { cleanup } from '@testing-library/react';
import ListDeviceAdded from './ListDeviceAdded';
const editorjsHTML = require('editorjs-html');

const edjsParser = editorjsHTML();

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    // justifyContent: 'center',
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      width: '30ch',
      backgroundColor: 'white',
    },

    '& .MuiButton-root': {
      margin: theme.spacing(1),
    },
  },
}));

const InsertEquipoDetail = React.memo(({ equipos, dispatch }) => {
  const [numeroParteInput, setNumeroParteInput] = useState('');
  const [numeroSerieInput, setNumeroSerieInput] = useState('');
  const [nombreEquipo, setNombreEquipo] = useState('');
  const [openEditor, setOpenEditor] = useState(false);
  const [data, setData] = useState({});
  const firstUpdate = useRef(true);
  const emptyRender = useRef(false);
  const indexSelectedRef = useRef(null);
  const classes = useStyles();
  const [editorReady, setEditorReady] = useState(false);
  const editorJsRef = React.useRef(null);
  const [blockClicked, setBlockClicked] = useState(false);
  const prevJsRef = React.useRef(null);

  useEffect(() => {
    console.log('Insert Equipo Detail Effect');
    // console.log('currentIndex:', currentIndex);
  });

  useEffect(() => {
    console.log('Block Clicked', blockClicked);
    // console.log('currentIndex:', currentIndex);
  }, [blockClicked]);

  const handleInsertarEquipo = () => {
    console.log('handleInsertarEquipo');
    dispatch({
      type: TYPES.add,
      payload: {
        nombreEquipo: nombreEquipo,
        numeroSerie: numeroSerieInput,
        numeroParte: numeroParteInput,
        content: {},
      },
    });
  };

  const handleDeleteEquipoCallback = React.useCallback(
    (index) => {
      dispatch({
        type: TYPES.remove,
        payload: {
          index: index,
        },
      });
    },
    [dispatch]
  );

  const handleDeleteEquipo = (index) => {
    dispatch({
      type: TYPES.remove,
      payload: {
        index: index,
      },
    });
  };

  function handleChangeReact({ name, holder, onChange }) {
    // console.log(newD)
  }
  return (
    <InputDeviceWrapper>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          required
          id="outlined-basic"
          label="Numero de Parte"
          placeholder="8321373"
          value={numeroParteInput}
          onChange={(e) => setNumeroParteInput(e.target.value)}
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />

        <TextField
          required
          id="outlined-basic"
          label="Nombre Equipo"
          placeholder="X-am 5600"
          value={nombreEquipo}
          onChange={(e) => setNombreEquipo(e.target.value)}
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />

        <TextField
          required
          id="outlined-basic"
          label="Numero de Serie"
          value={numeroSerieInput}
          onChange={(e) => setNumeroSerieInput(e.target.value)}
          placeholder="ARKA-1212"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />

        <YellowButton type="button" onClick={handleInsertarEquipo}>
          Ingresar Equipo
        </YellowButton>
        <YellowButton>Cargar Firma</YellowButton>
        <YellowButton>Generar PDF</YellowButton>
      </form>
      <button onClick={handleInsertarEquipo}>click</button>
      <MainWrapper>
        {/* <DevicesWrapper>
          {equipos.map((element, index) => (
            <DeviceAdded
              key={uuidv4()}
              index={index}
              handleDeleteEquipo={handleDeleteEquipoCallback}
              setCurrentIndex={setCurrentIndex}
              currentIndex={currentIndex}
              // setData={setData}
              test={test}
              setTest={setTest}
              // equipos={equipos}
              getRender={getRenderCallback}
              save={saveDataCallback}
              indexSelectedRef={indexSelectedRef}
              prevJsRef={prevJsRef}
              dispatch={dispatch}
            />
          ))}
        </DevicesWrapper> */}

        <DevicesWrapper>
          <ListDeviceAdded
            dispatch={dispatch}
            equipos={equipos}
            setBlockClicked={setBlockClicked}
          />
          <DisableList
            style={{ display: blockClicked ? 'block' : 'none' }}
          ></DisableList>
        </DevicesWrapper>

        {/* {openEditor && (
          <EditorJsWrapper>
            <ReactEditorV2
              data={data}
              handleOnChangeEditor={handleOnChangeEditor}
              instanceRef={editorJsRef}
            />
          </EditorJsWrapper>
        )} */}
      </MainWrapper>
    </InputDeviceWrapper>
  );
});

export default InsertEquipoDetail;

const InputDeviceWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const MainWrapper = styled.div`
  margin-top: 48px;
  display: flex;
  align-items: flex-start;
`;

const DevicesWrapper = styled.div`
  position: absolute;
  margin-right: 48px;
  z-index: 1;
`;

const DisableList = styled.div`
  top: 0px;
  left: 0px;
  width: 100%;
  height: 50px;
  background-color: black;
  opacity: 0.3;
  z-index: 2;
`;
