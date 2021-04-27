import React, { useEffect, useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { Row, Item } from '@mui-treasury/components/flex';
import { Info, InfoTitle, InfoSubtitle } from '@mui-treasury/components/info';
import { useTutorInfoStyles } from '@mui-treasury/styles/info/tutor';
import { useSizedIconButtonStyles } from '@mui-treasury/styles/iconButton/sized';
import { useDynamicAvatarStyles } from '@mui-treasury/styles/avatar/dynamic';
import Add from '@material-ui/icons/Add';
import SettingsCellIcon from '@material-ui/icons/SettingsCell';
import CloseSharpIcon from '@material-ui/icons/CloseSharp';
import ReactEditorV2 from './ReactEditorV2';
import styled from 'styled-components';
import { TYPES } from './reducer/EquiposReducer';
import { EDITOR_JS_TOOLS } from '../assets/constants';
import TesComponent from './TesComponent';
import EditorJs from 'react-editor-js';

const isEqual = require('react-fast-compare');
const useStyles = makeStyles(() => ({
  actionAdd: {
    backgroundColor: '#fff',
    boxShadow: '0 1px 4px 0 rgba(0,0,0,0.12)',
    '&:hover': {
      backgroundColor: '#fff',
      color: '#000',
    },
    marginRight: '20px',
  },

  actionDelete: {
    backgroundColor: '#FFC3B8',
    boxShadow: '0 1px 4px 0 rgba(0,0,0,0.12)',
    '&:hover': {
      backgroundColor: '#fff',
      color: '#000',
    },
    marginRight: '20px',
  },

  row: {
    boxShadow: '0 1px 4px 0 rgba(0,0,0,0.12)',
    marginBottom: '32px',
    // pointerEvents: 'none',
  },

  item: {
    '&:last-child': {
      marginRight: '0px',
    },
  },

  numberItem: {
    fontSize: '2.25rem',
    fontWeight: 700,
    margin: '0 20px',
  },

  buttonNumber: {
    fontSize: '18px',
    padding: '0 20px',
    backgroundColor: '#fff',
    boxShadow: '0 1px 4px 0 rgba(0,0,0,0.12)',
  },

  icon: {
    alignSelf: 'flex-end',
  },
}));

export const DeviceAdded = React.memo(function TutorCard({
  index,
  handleDeleteEquipo,
  setCurrentIndex,
  getRender,
  setIsSaving,
  isSaving,
  // setData,
  // instanceRef,
  // indexSelectedRef,
  // setTest,
  test,
  // prevJsRef,
  currentIndex,
  setBlockClicked,
  save,
}) {
  const styles = useStyles();
  const iconBtnStyles = useSizedIconButtonStyles({
    padding: 6,
    boxShadow: '0px 3px 6px rgba(0,0,0.16)',
  });
  const avatarStyles = useDynamicAvatarStyles({ radius: 12, size: 48 });
  const [openEditor, setOpenEditor] = useState(false);
  const editorJsRef = React.useRef(null);
  const firstUpdate = useRef(true);

  const handleOnChangeEditorCallback = React.useCallback(
    async (newData) => {
      console.log('HandleOnChangeEditor');
      setBlockClicked(true);
      const saveData = await newData.saver.save();
      console.log('saveData');
      save(saveData);
      setTimeout(() => {
        setBlockClicked(false);
      }, 100);
    },
    [save]
  );

  const handleOnChangeEditor = async (newData) => {
    try {
      console.log('HandleOnChangeEditor');
      const saveData = await newData.saver.save();
      // setBlockClicked(false);
      save(saveData);
      // setBlockClicked(false);
    } catch (error) {
      console.log('ERROR', error);
    }
  };

  const isEqualIndex = currentIndex === index;
  console.log(
    'isEqualIndex:',
    isEqualIndex,
    'CurrentIndex:',
    currentIndex,
    'Index:',
    index
  );
  useEffect(() => {
    console.log('DeviceAdded UseEffect', 'index', index);

    if (isEqualIndex) {
      if (currentIndex !== null) {
        const render = getRender();
        console.log('Render', render.blocks);
        // id = setTimeout(() => {
        //   console.log('EditorJsRef Set Time Out', editorJsRef);

        editorJsRef.current.isReady.then(() => {
          // Si lo que obtenemos en getRender me retorno un block vacio, no realizo nada y dejo que se cargue el editor js como nuevo. En todo caso
          // retorno
          if (render.blocks.length !== 0) {
            console.log('Block Empty');
            editorJsRef.current.render(render);
          }

          console.log('EditorJsRef', editorJsRef);

          console.log('EditorJsRef After Clear', editorJsRef);
        });
      }
    }
  }, [currentIndex, getRender, isEqualIndex]);

  const handleOpenEditor = () => {
    console.log('Handle Open Editor', 'index=', index);
    setCurrentIndex(index);
  };
  return (
    <RowWrapper>
      <Row
        p={1.5}
        gap={2}
        bgcolor={'#FFFF'}
        borderRadius={16}
        className={styles.row}
        onClick={handleOpenEditor}
      >
        <Item position={'middle'} className={styles.icon}>
          {/* <Avatar
          classes={avatarStyles}
          src={
            'https://www.biography.com/.image/t_share/MTU0ODUwMjQ0NjIwNzI0MDAx/chris-hemsworth-poses-during-a-photo-call-for-thor-ragnarok-on-october-15-2017-in-sydney-australia-photo-by-mark-metcalfe_getty-images-for-disney-square.jpg'
          }
        /> */}
          <SettingsCellIcon fontSize="large" />
        </Item>
        <Item className={styles.numberItem}>{index}</Item>

        <Info position={'middle'} useStyles={useTutorInfoStyles}>
          <InfoTitle>dasd</InfoTitle>
          <InfoSubtitle>sadasd</InfoSubtitle>
        </Info>
        <Item ml={1} position={'middle'} className={styles.item}>
          <IconButton
            onClick={handleOpenEditor}
            className={styles.actionAdd}
            classes={iconBtnStyles}
          >
            <Add />
          </IconButton>
          <IconButton
            onClick={(e) => {
              e.stopPropagation();
              handleDeleteEquipo(index);
            }}
            className={styles.actionDelete}
            classes={iconBtnStyles}
          >
            <CloseSharpIcon fontSize="small" />
          </IconButton>
        </Item>
      </Row>

      {currentIndex === index && (
        <EditorJsWrapper>
          <ReactEditorV2
            instanceRef={editorJsRef}
            holder={`editorjs-${index}`}
            handleOnChangeEditorCallback={handleOnChangeEditorCallback}
          />
        </EditorJsWrapper>
      )}
    </RowWrapper>
  );
});

export default DeviceAdded;

const RowWrapper = styled.div`
  position: relative;
  display: flex;
`;

const EditorJsWrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 400px;
  background-color: white;
  width: 400px;
  border-radius: 16px;
  padding: 20px;

  .codex-editor .codex-editor__redactor {
    padding-bottom: 40px;
  }
`;
