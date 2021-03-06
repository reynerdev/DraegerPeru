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
import ReactEditorV2 from './ReactEditorV2';
import { TrendingUpOutlined } from '@material-ui/icons';
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
  const editorJsRef = React.useRef(null);
  const [numeroParteInput, setNumeroParteInput] = useState('');
  const [numeroSerieInput, setNumeroSerieInput] = useState('');
  const [nombreEquipo, setNombreEquipo] = useState('');
  const [openEditor, setOpenEditor] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [data, setData] = useState({});
  const firstUpdate = useRef(true);
  // const handleSave = React.useCallback(async () => {
  //   try {
  //     const savedData = await editorJsRef.current.save();
  //     console.log('data', edjsParser.parse(savedData));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);

  const handleOnChangeEditor = async (newData) => {
    console.log('HandleOnChangeEditor');
    const saveData = await newData.saver.save();
    console.log(saveData, 'saveData');
    dispatch({
      type: TYPES.addText,
      payload: {
        index: currentIndex,
        content: saveData,
      },
    });
  };

  useEffect(() => {
    if (!firstUpdate.current) {
      setOpenEditor(false);
      console.log('INSERTEQUIPODETAIL');
      console.log('reference', editorJsRef.current);

      console.log(editorJsRef.current.isReady);
      editorJsRef.current.isReady.then(() =>
        console.log('isReady', editorJsRef.current)
      );

      firstUpdate.current = false;
    } else {
      editorJsRef.current.isReady.then(() => {
        editorJsRef.current.destroy();
      });
      setOpenEditor(true);
    }

    // console.log(editorJsRef.current.render, equipos, currentIndex);
    // if (!!editorJsRef.current) {
    //   console.log(equipos[currentIndex].content, 'CONTENIDO');
    //   const render = {
    //     blocks: !equipos[currentIndex].content.blocks
    //       ? []
    //       : equipos[currentIndex].content.blocks,
    //   };
    //   console.log(render, 'RENDER');
    //   // editorJsRef.current.render({
    //   //   blocks: [
    //   //     {
    //   //       type: 'paragraph',
    //   //       data: {
    //   //         text:
    //   //           'The example of text that was written in <b>one of popular</b> text editors.',
    //   //       },
    //   //     },
    //   //     {
    //   //       type: 'header',
    //   //       data: {
    //   //         text: 'With the header of course',
    //   //         level: 2,
    //   //       },
    //   //     },
    //   //     {
    //   //       type: 'paragraph',
    //   //       data: {
    //   //         text: 'So what do we have?',
    //   //       },
    //   //     },
    //   //   ],
    //   // });
    //   console.log(editorJsRef.current.render, 'What is the render funcion');

    //   editorJsRef.current.render(render);
    //   editorJsRef.current.focus(true);
    // }
  }, [currentIndex]);

  const handleInsertarEquipo = () => {
    console.log('handleInsertarEquipo');
    console.log(dispatch);
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

  const handleDeleteEquipo = (index) => {
    dispatch({
      type: TYPES.remove,
      payload: {
        index: index,
      },
    });
  };

  const classes = useStyles();

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
        <DevicesWrapper>
          {equipos.map((element, index) => (
            <DeviceAdded
              element={element}
              key={index}
              index={index}
              handleDeleteEquipo={handleDeleteEquipo}
              setOpenEditor={setOpenEditor}
              setCurrentIndex={setCurrentIndex}
              setData={setData}
              equipos={equipos}
              instanceRef={editorJsRef}
            />
          ))}
        </DevicesWrapper>

        {true && (
          <EditorJsWrapper style={{ display: openEditor ? 'block' : 'none' }}>
            {/* <button onClick={handleSave}>Save !</button> */}
            {/* <EditorJs
            tools={EDITOR_JS_TOOLS}
            // enableReInitialize={true}
            onChange={handleOnChangeEditor}
            onCompareBlocks={(newData, oldData) => newData === oldData} // I recommend react-fast-compare
            data={data}
          ></EditorJs> */}
            <ReactEditorV2
              data={data}
              handleOnChangeEditor={handleOnChangeEditor}
              instanceRef={editorJsRef}
            />
          </EditorJsWrapper>
        )}
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
