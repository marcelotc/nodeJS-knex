import React, { useState } from 'react';
import SingleTodoList from './SingleTodoList';
import SingleTodoEdit from './SingleTodoEdit';

const TodoCard = (props) => {

    const [editing, setEditing] = useState(false);
    const [title, setTitle] = useState(props.title);
    const [isDone, setIsDone] = useState(props.isDone);

    const onEdit = () => {
        setEditing(!editing);
    }

    const updateState = (title, isDone) => {
        setTitle(title)
        setIsDone(isDone)
    }

    return (
        <>
            {editing ? (<SingleTodoEdit title={title} isDone={isDone} toggleEdit={onEdit} id={props.id} updateState={updateState}></SingleTodoEdit>) :
                (<SingleTodoList title={title} isDone={isDone} onEdit={onEdit} id={props.id}></SingleTodoList>)
            }
        </>
    );
}

export default TodoCard;
