import React, { useContext } from 'react';
import { myContext } from '../App';

const Child1 = () => {
    const [child1bgcolor,setColor]=useContext(myContext)
    return (
       
        <div style={{backgroundColor:child1bgcolor}}>
            <h1>child1 component</h1> 
        </div>
    );
};

export default Child1;