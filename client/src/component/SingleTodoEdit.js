import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

const SingleTodoEdit = (props) => {
    const [title, setTitle] = useState('');
    const [isDone, setIsdone] = useState(false);

    useEffect(() => {
        setTitle(props.title)
        setIsdone(props.isDone)
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();

        const { id, history } = props;

        if (id) {
            axios.put(`/api/todo/${id}`, {
                title: title,
                is_done: isDone === 'true'
            }).then(() => {
                props.updateState(title, isDone === 'true')
                props.toggleEdit()
            })
        } else {
            axios.post('/api/todo', {
                title: title,
                is_done: isDone
            }).then(() => {
                history.push('/')
            })
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="title">Título</label>
                <input name="title" type="text" className="form-control"
                    id="title" value={title || ''} onChange={(e) => setTitle(e.target.value)}></input>
            </div>
            <div className="form-group">
                <label htmlFor="idDone">Tarefa completada?</label>
                <select name="isDone" className="form-control"
                    id="is-done" value={isDone} onChange={(e) => setIsdone(e.target.value)}>
                    <option value="true">Sim</option>
                    <option value="false">Não</option>
                </select>
                <div className="d-flex justify-content-between align-items-center mt-3">
                    <button type="submit" className="btn btn-primary">Enviar</button>
                    <button type="button" className="btn btn-danger" onClick={props.toggleEdit}>Cancelar</button>
                </div>
            </div>
        </form >
    );
}

export default withRouter(SingleTodoEdit);
