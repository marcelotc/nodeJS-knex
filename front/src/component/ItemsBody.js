import React, { useState, useEffect } from 'react';
import ListItems from './ListItems';
import ListItem from './ListItem';
import api from '../services/api';
import _ from 'lodash';

const ItemsBody = () => {
    const [loading, setLoading] = useState(true);
    const [todos, setTodos] = useState('');

    useEffect(() => {
        api.get('/api/todo').then(response => {
            setLoading(false);
            setTodos(response.data);
        })
    }, []);

    // const renderTodos = () => {
    //     return _.map(todos, todo => {
    //         return (
    //             <ListItem key={todo.id} title={todo.title} isDone={todo.is_done}></ListItem>
    //         )
    //     })
    // }

    return (
        <>
            {loading ? (<h1>Loading...</h1>) :
                (
                    <ListItems>
                        {todos && todos.map(todo =>
                            <ListItem key={todo.id} title={todo.title} isDone={todo.is_done}></ListItem>

                        )}
                    </ListItems>
                )}
        </>
    )

}

export default ItemsBody;
