import Reactotron from 'reactotron-react-native';

const tokenReducer = (state = [], action) => {
  const tokens = [...state];
  switch (action.type) {
    case 'ADD_TOKEN':
        tokens.push(action.payload);
        return tokens;

    case 'DELETE_TOKEN':
      var index = tokens.indexOf(action.payload)
      if (index !== -1) {
        tokens.splice(index, 1);
      }
      return tokens ;
  
    default:
      return state
  }
};

export default tokenReducer
