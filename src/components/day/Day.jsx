import React, { useState } from 'react';
import Item from './Item';

const Day = ({ day, dayName }) => {

    return (
        <div className="day">
            <h2>{dayName}</h2>
            <ul>
                {day.map(todo => (
                    <Item key={todo.id} item={todo} />
                ))}
            </ul>
                <button>Ny uppgift</button>
        </div>
    );
};

export default Day;