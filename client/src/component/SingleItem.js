import React, { useState, useEffect } from 'react';
import TodoCard from './TodoCard';
import axios from 'axios';

const SingleItem = (props) => {
    const [item, setItem] = useState();
    const [loadItem, setLoadItem] = useState(true);

    useEffect(() => {
        async function loadItem() {
            const id = props.match.params.id;
            const response = await axios.get(`/api/todo/${id}`);
            setItem(response.data);
            setLoadItem(false);
        }

        loadItem();
    }, []);


    return (
        <>
            {loadItem ? (<div>Loading...</div >)
                :
                (<TodoCard title={item.title} isDone={item.is_done} id={item.id}></TodoCard>)
            }
        </>
    );
}

export default SingleItem;
