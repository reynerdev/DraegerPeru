import React, { useState, useMemo, useEffect } from 'react';
import DeviceAdded from './DeviceAdded';
import { v4 as uuidv4 } from 'uuid';
import { TYPES } from './reducer/EquiposReducer';

// We create this intermediate List in order to avoid re-rendering

const ListDeviceAdded = React.memo(({ equipos, dispatch }) => {
  useEffect(() => {
    console.log('ListDevice');
  });

  const [currentIndex, setCurrentIndex] = useState(null);
  const [isSaving, setIsSaving] = useState(false); // this state is to control the button disable while saving the editor content

  const handleDeleteEquipo = (index) => {
    dispatch({
      type: TYPES.remove,
      payload: {
        index: index,
      },
    });
  };

  const getRenderCallback = React.useCallback(() => {
    const render = {
      blocks: equipos[currentIndex].content.blocks
        ? equipos[currentIndex].content.blocks
        : [],
    };

    return render;
  }, [currentIndex]);

  const saveDataCallback = React.useCallback(
    (saveData) => {
      dispatch({
        type: TYPES.addText,
        payload: {
          index: currentIndex,
          content: saveData,
        },
      });
    },
    [currentIndex, dispatch]
  );

  return (
    <>
      {equipos.map((element, index) => (
        <DeviceAdded
          //   key={uuidv4()} // this causes to rerender everytime our devicedadded henced the reacteditorjs. We might want yo
          key={index}
          index={index}
          setCurrentIndex={setCurrentIndex}
          currentIndex={currentIndex}
          getRender={getRenderCallback}
          save={saveDataCallback}
          handleDeleteEquipo={handleDeleteEquipo}
          setIsSaving={setIsSaving}
          isSaving={isSaving}
          // indexSelectedRef={indexSelectedRef}
          // prevJsRef={prevJsRef}
          // dispatch={dispatch}
        />
      ))}
    </>
  );
});

export default ListDeviceAdded;
