import React, { useState } from 'react';

interface TodoItemProps {
    item: string,
    onDelete: () => void;
    onSave: (todoItem: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ item, onDelete, onSave }) => {
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [todoItem, setTodoItem] = useState<string>(item);

    return (
        <div className="list-item">
            {
                isEditing ? (
                    <input
                        value={todoItem}
                        onChange={e => setTodoItem(e.target.value)}
                        className="input"
                        type="text"
                        placeholder="Text input"
                    />
                ) : <p>{item}</p>
            }
            <div className="button-container">
                <button onClick={onDelete} className="button is-danger">Delete</button>
                <div className="edit-buttons-container">
                    {
                        isEditing ? (
                            <button onClick={() => {
                                onSave(todoItem)
                                setIsEditing(false)
                            }} className="button is-success">Save</button>
                        ) : (
                            <button onClick={() => setIsEditing(true)} className="button is-success">Edit</button>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default TodoItem;
