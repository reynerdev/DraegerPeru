import React from 'react';
import EditorJs from 'react-editor-js';
import { EDITOR_JS_TOOLS } from '../assets/constants';
import styled from 'styled-components';
const isEqual = require('react-fast-compare');
const ReactEditorV2 = ({
  instanceRef,
  holder,
  handleOnChangeEditorCallback,
}) => {
  // const handleChange = React.useCallback(async (api) => {
  //   const savedData = instanceRef.current.save();

  //   console.log('onChange', savedData);
  // }, []);

  React.useEffect(() => {
    console.log('InstanceRef Ready (Effect):', instanceRef);
  });
  return (
    <EditorJs
      holder={holder}
      tools={EDITOR_JS_TOOLS}
      enableReInitialize={true}
      instanceRef={(instance) => (instanceRef.current = instance)}
      onChange={handleOnChangeEditorCallback}
      onCompareBlocks={(newData, oldData) => isEqual(newData, oldData)} // I recommend react-fast-compare
      minHeight={30}
      autofocus={true}
    >
      <div id={holder} />
    </EditorJs>
  );
};

export default ReactEditorV2;
