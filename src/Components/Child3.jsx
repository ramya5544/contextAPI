import React, { useContext } from 'react';
import { myContext } from '../App';

const Child3 = () => {
    const child3bgcolor=useContext(myContext)
    return (
        <div style={{backgroundColor:child3bgcolor}}>
            <h1>child3 component</h1>
        </div>
    );
};

export default Child3;