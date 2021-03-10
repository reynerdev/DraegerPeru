import React from 'react';
import ReactEditorJs from 'react-editor-js';
const ReactEditor = ({ name, holder, onChange, instanceRef }) => {
  function handleChange(_api, newData) {
    onChange({
      instance: instanceRef.current,
      holder,
      newData,
    });
  }
  return (
    <ReactEditorJs
      instanceRef={(instance) => (instanceRef.current = instance)}
      onChange={handleChange}
    />
  );
};

export default ReactEditor;
