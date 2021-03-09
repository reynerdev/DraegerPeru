const TYPES = {
  add: 'add',
  remove: 'remove',
  addText: 'addText',
};

const EquiposReducer = (state, action) => {
  switch (action.type) {
    case TYPES.ADD: {
      return [...state, action.payload];
    }

    case TYPES.remove: {
      return state.filter((element) => element !== action.payload.id);
    }

    case TYPES.addText: {
      const oldState = state;

      oldState[action.id].content = action.payload.content;

      return [...oldState];
    }
    default:
      return state;
  }
};

export { TYPES };
export default EquiposReducer;
