import React, { useCallback, useReducer, useState } from 'react';
import './App.css';

import 'bulma/css/bulma.css';

import TodoList from './Todo/TodoList';
import TodoReducer from './Reducer/Todo';
import TodoInput from './Todo/TodoInput';


function App() {
  const [todoItemList, dispatch] = useReducer(TodoReducer, []);

  const onAddItem = useCallback((todoItem) => {
    dispatch({ type: 'ADD_TODO_ITEM', item: todoItem });
  }, [dispatch])

  return (
    <div className="App">
      <TodoInput onAddItem={onAddItem} />
      <TodoList
        list={todoItemList}
        dispatch={dispatch}
      />
    </div>
  );
}

export default App;
