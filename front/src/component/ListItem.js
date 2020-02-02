import React from 'react';

const ListItem = ({ title, isDone }) => {
    return (
        <ul className="list-group-item">
            {title} {isDone ? "Done" : "Not done"}
        </ul>
    );
}

export default ListItem;
