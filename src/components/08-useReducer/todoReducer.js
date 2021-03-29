export const todoReducer = (state = [], action) => {
  console.log('todoReducer', ' se ejecuto la función todoReducer');
  switch (action.type) {
    case 'add':
      return [...state, action.payload];

    default:
      return state;
  }  

}