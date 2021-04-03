import React from 'react';
import TodoItem from './TodoItem';

interface TodoListProps {
    list: string[],
    dispatch: any
}

const TodoList: React.FC<TodoListProps> = ({ list, dispatch }) => {
    return (
        <div className="list-container">
            {
                list.map((item, index) => {
                    return <TodoItem
                        key={index}
                        item={item}
                        onDelete={() => dispatch({ type: 'DELETE_TODO_ITEM', itemIndex: index })}
                        onSave={(updatedTodoitem) => {
                            dispatch({ type: 'UPDATE_TODO_ITEM', itemIndex: index, updatedItem: updatedTodoitem })
                        }}
                    />
                })
            }
        </div>
    )
}

export default TodoList;
