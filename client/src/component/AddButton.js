import React from 'react';
import { Link } from 'react-router-dom';

const AddButton = () => {
    return (
        <>
            <div style={{ float: 'right', marginLeft: 50 }}>
                <Link to="/new">
                    <button class="btn"><i class="fa fa-plus-square-o" style={{ fontSize: 50 }}></i></button>
                </Link>
            </div>
        </>
    )
}

export default AddButton;
