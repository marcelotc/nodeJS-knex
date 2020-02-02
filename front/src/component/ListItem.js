import React from 'react';

const ListItem = ({ text }) => {
    return (
        <ul className="list-group-item">
            {text}
        </ul>
    );
}

export default ListItem;
