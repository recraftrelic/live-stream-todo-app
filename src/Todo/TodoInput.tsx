import React, { useState } from 'react';

interface TodoInputProps {
    onAddItem: (todoItem: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ onAddItem }) => {
    const [todoItem, setTodoItem] = useState<string>('');

    return (
        <div className="input-container">
            <input
                value={todoItem}
                onChange={e => setTodoItem(e.target.value)}
                className="input"
                type="text"
                placeholder="What's on your list today?"
            />
            <button onClick={() => {
                onAddItem(todoItem);
                setTodoItem('');
            }} className="button is-success add-todo-item">Add Item</button>
        </div>

    )
}

export default TodoInput;
