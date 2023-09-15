import React, { useContext } from 'react';
import Child2Child from './Child2Child';
import { myContext } from '../App';

const Child2 = () => {
    const [child2bgcolor,setColor]=useContext(myContext)
    return (
        <div style={{backgroundColor:child2bgcolor}}>
            <h1>child2 component</h1>
            <Child2Child />
        </div>
    );
};

export default Child2;