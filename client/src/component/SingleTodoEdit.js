import React, { useState, useEffect } from 'react';
import api from '../services/api';
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
            api.put(`/api/todo/${id}`, {
                title: title,
                is_done: isDone === 'true'
            }).then(() => {
                props.updateState(title, isDone === 'true')
                props.toggleEdit()
            })
        } else {
            api.post('/api/todo', {
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
                <label htmlFor="title">Title for todo</label>
                <input name="title" type="text" className="form-control"
                    id="title" value={title || ''} onChange={(e) => setTitle(e.target.value)}></input>
            </div>
            <div className="form-group">
                <label htmlFor="idDone">Todo completed?</label>
                <select name="isDone" className="form-control"
                    id="is-done" value={isDone} onChange={(e) => setIsdone(e.target.value)}>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>
                <div className="d-flex justify-content-between align-items-center mt-3">
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <button type="button" className="btn btn-danger" onClick={props.toggleEdit}>Cancel</button>
                </div>
            </div>
        </form >
    );
}

export default withRouter(SingleTodoEdit);
