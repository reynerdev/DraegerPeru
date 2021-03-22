import React from 'react';
import EditorJs from 'react-editor-js';
import { EDITOR_JS_TOOLS } from '../assets/constants';
import styled from 'styled-components';
const isEqual = require('react-fast-compare');
const ReactEditorV2 = ({
  data,
  handleOnChangeEditor,
  instanceRef,
  holder,
  setIsReady,
}) => {
  console.log('React Editor JS');
  return (
    <EditorJs
      holder={holder}
      tools={EDITOR_JS_TOOLS}
      enableReInitialize
      instanceRef={(instance) => (instanceRef.current = instance)}
      onChange={handleOnChangeEditor}
      onCompareBlocks={(newData, oldData) => isEqual(newData, oldData)} // I recommend react-fast-compare
      data={data}
      minHeight={30}
      autofocus={true}
      // onReady={() => {
      //   setIsReady(true);
      // }}
    >
      <InsideEditorJs id={holder} />
    </EditorJs>
  );
};

export default ReactEditorV2;

const InsideEditorJs = styled.div`
  /* background-color: white; */
  /* width: 400px; */
  /* border-radius: 16px; */
  /* padding: 20px; */
`;
