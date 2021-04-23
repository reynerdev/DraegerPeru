const editorjsHTML = require('editorjs-html');
const edjsParser = editorjsHTML();

const TYPES = {
  add: 'add',
  remove: 'remove',
  addText: 'addText',
};

const EquiposReducer = (state, action) => {
  console.log('Reducer');
  switch (action.type) {
    case TYPES.add: {
      console.log('ADD');
      return [...state, action.payload];
    }

    // case TYPES.remove: {
    //   return state.filter((element) => element !== action.payload.id);
    // }
    case TYPES.remove: {
      const oldState = state;

      oldState.splice(action.payload.index, 1);
      console.log(oldState, action.payload.index);
      return [...oldState];
    }

    case TYPES.addText: {
      console.log('state in reducer', state, action.payload.index);
      const oldState = state;

      oldState[action.payload.index].content = action.payload.content;
      // oldState[action.payload.index].contentHTML = edjsParser.parse(
      //   action.payload.content
      // );
      return [...oldState];
    }
    default:
      return state;
  }
};

export { TYPES };
export default EquiposReducer;
