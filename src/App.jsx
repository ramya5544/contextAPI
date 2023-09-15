import React, { createContext, useReducer, useState } from 'react';
import ComponentA from './Components/ComponentA';
import ComponentB from './Components/ComponentB';
import ComponentC from './Components/ComponentC';
import ReducerAction from './Components/ReducerAction';
// import Child1 from './Components/Child1';
// import Child2 from './Components/Child2';
// import Child3 from './Components/Child3';
 export const myContext=createContext()
const App = () => {
  // const[color, setColor]=useState('blue');
  const[state,dispatch]=useReducer(ReducerAction,0)
  return (
    <div>
      {/* <input type='color' onChange={(e)=>{setColor(e.target.value)}}/>
      <h1>parent component</h1>
      <myContext.Provider value={[color,setColor]}>
      <Child1 />
      <Child2  />
      

      </myContext.Provider>
       <myContext.Provider value="pink">
      <Child3 />
      </myContext.Provider>
       */}
       <h1>Parent:{state}</h1>
       <myContext.Provider value={{reducerState:state,reducerDispatch:dispatch}}>
       <ComponentA/>
       <ComponentB/>
       <ComponentC/>

       </myContext.Provider>
       
    </div>
  );
};

export default App;