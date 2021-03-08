import React, { useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import YellowButton from './YellowButton';
import DeviceAdded from './DeviceAdded';
import EditorJs from 'react-editor-js';
import { EDITOR_JS_TOOLS } from '../assets/constants';
// import edjsHTML from 'editorjs-html ';
const editorjsHTML = require('editorjs-html');
const edjsParser = editorjsHTML();
console.log(edjsParser);
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

const InsertEquipoDetail = () => {
  let data = {};
  const editorJsRef = React.useRef(null);
  const handleSave = React.useCallback(async () => {
    try {
      const savedData = await editorJsRef.current.save();
      console.log('data', edjsParser.parse(savedData));
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {});

  const classes = useStyles();
  return (
    <InputDeviceWrapper>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          required
          id="outlined-basic"
          label="Numero de Parte"
          placeholder="8321373"
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
          placeholder="ARKA-1212"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <YellowButton>Ingresar Equipos</YellowButton>
        <YellowButton>Cargar Firma</YellowButton>
        <YellowButton>Generar PDF</YellowButton>
      </form>

      <MainWrapper>
        <DevicesWrapper>
          <DeviceAdded />
          <DeviceAdded />
          <DeviceAdded />
          <DeviceAdded />
          <DeviceAdded />
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
