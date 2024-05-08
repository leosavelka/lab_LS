import React, { useState } from 'react';

function todo(props) {
    return (
        <div className="blocks">
            <img src={props.img} />
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
    );
}

export default todo;