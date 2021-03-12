import React from 'react';
import EditorJs from 'react-editor-js';
import { EDITOR_JS_TOOLS } from '../assets/constants';
const ReactEditorV2 = ({ data, handleOnChangeEditor, instanceRef }) => {
  return (
    <EditorJs
      holder={'editorjs'}
      tools={EDITOR_JS_TOOLS}
      //   enableReInitialize
      instanceRef={(instance) => (instanceRef.current = instance)}
      onChange={handleOnChangeEditor}
      onCompareBlocks={(newData, oldData) => newData === oldData} // I recommend react-fast-compare
      data={data}
      //   autofocus={true}
    >
      <div id={'editorjs'} />
    </EditorJs>
  );
};

export default ReactEditorV2;
