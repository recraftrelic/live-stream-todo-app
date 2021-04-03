export default function TodoReducer (state: string[], action: any) {
    switch (action.type) {
      case 'ADD_TODO_ITEM':
        return state.concat(action.item);
      case 'DELETE_TODO_ITEM': {
        return state.filter((_, index) => action.itemIndex !== index);
      }
      case 'UPDATE_TODO_ITEM': {
        const copyState = [...state];
        copyState[action.itemIndex] = action.updatedItem;
        return copyState
      }
      default:
        throw new Error();
    }
}