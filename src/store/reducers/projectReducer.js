const initState = {
  projects: []
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
    case 'UPDATE_PROJECT':
    case 'DELETE_PROJECT':
      return state;
    case 'CREATE_PROJECT_ERROR':
    case 'UPDATE_PROJECT_ERROR':
      return state;
    default: 
      return state;
  }
}

export default projectReducer;