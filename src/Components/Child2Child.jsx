import React, { useContext } from 'react';
import { myContext } from '../App';

const Child2Child = () => {
    const [child2childbgcolor,setColor]=useContext(myContext)
    return (
        <div style={{backgroundColor:child2childbgcolor}}>
            <h2>this is child2child tags</h2>
            <button onClick={()=>{setColor("red")}}>color change</button>
        </div>
    );
};

export default Child2Child;
