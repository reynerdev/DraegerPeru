import React, { useEffect, useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import YellowButton from './YellowButton';
import DeviceAdded from './DeviceAdded';
import EditorJs from 'react-editor-js';
import { EDITOR_JS_TOOLS } from '../assets/constants';
import { TYPES } from './reducer/EquiposReducer';
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

const InsertEquipoDetail = ({ equipos, dispatch }) => {
  const data = {};
  const editorJsRef = React.useRef(null);
  const [numeroParteInput, setNumeroParteInput] = useState('');
  const [numeroSerieInput, setNumeroSerieInput] = useState('');
  const [nombreEquipo, setNombreEquipo] = useState('');
  const handleSave = React.useCallback(async () => {
    try {
      const savedData = await editorJsRef.current.save();
      console.log('data', edjsParser.parse(savedData));
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    console.log(equipos, numeroParteInput, numeroSerieInput, nombreEquipo, '');
  });

  const handleInsertarEquipo = () => {
    console.log('handleInsertarEquipo');
    dispatch({
      type: TYPES.add,
      payload: {
        nombreEquipo: nombreEquipo,
        numeroSerie: numeroSerieInput,
        numeroParte: numeroParteInput,
      },
    });
    return false;
  };

  const classes = useStyles();
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
        <DevicesWrapper>
          {equipos.map((element, index) => (
            <DeviceAdded element={element} index={index} />
          ))}
        </DevicesWrapper>
        <EditorJsWrapper>
          <button onClick={handleSave}>Save !</button>
          <EditorJs
            instanceRef={(instance) => (editorJsRef.current = instance)}
            tools={EDITOR_JS_TOOLS}
            data={data}
            id="EditorJs"
          />
        </EditorJsWrapper>
      </MainWrapper>
    </InputDeviceWrapper>
  );
};

export default InsertEquipoDetail;

const InputDeviceWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const EditorJsWrapper = styled.div`
  background-color: white;
  width: 400px;
  border-radius: 16px;
  padding: 20px;

  .codex-editor .codex-editor__redactor {
    padding-bottom: 40px;
  }
`;

const MainWrapper = styled.div`
  margin-top: 48px;
  display: flex;
  align-items: flex-start;
`;

const DevicesWrapper = styled.div`
  margin-right: 48px;
`;
