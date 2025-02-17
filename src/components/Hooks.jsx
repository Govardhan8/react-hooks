import { useCallback, useContext, useEffect, useReducer, useRef, useState } from "react";
import AddButton from "./AddButton";
import { UserContext } from "../context/UserContext";
import { userReducer } from "../reducers/UserReducer";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

import "./Hooks.css";

const initialState = {count : 0};
export const Hooks = () => {
    const [count, setCount] = useState(0);
    const [user, setUser] = useState("");
    const [showCode, setShowCode] = useState(false);
    const value = useContext(UserContext);
    const [state, dispatch] = useReducer(userReducer, initialState)
    const inputRef = useRef();

    const handleAdd = useCallback(() => {
        setCount(c=>c + 1);
    },[]);
    // const handleAdd = () => {
    //     setCount(c=>c + 1);
    // };

    useEffect(()=>{
        inputRef.current.focus();
    },[])

    const syntax = `
    const [count, setCount] = useState(0);
    const [user, setUser] = useState("");
    const value = useContext(UserContext);
    const [state, dispatch] = useReducer(userReducer, initialState)
    const inputRef = useRef();

    const handleAdd = useCallback(() => {
        setCount(c=>c + 1);
    },[]);

    useEffect(()=>{
        inputRef.current.focus();
    },[])
     <p className="container">
        <span>Using useState hook and useCallback for memoizing handleClick: {count}</span>
        <AddButton handleClick={handleAdd}>Add</AddButton>
      </p>
      <p className="container">
        <span>Using useRef hook for focus on render/mount using useEffect</span>
        <input ref={inputRef} value={user} onChange={e=>setUser(e.target.value)} />
      </p>
      <p className="container">
        <span>Using usecontext hook: <b>{value?.user} </b></span>
      </p>
      <div className="container">
        <span>Using use reducer hook for adding or subtracting: <b>{state.count}</b></span>
        <div className="buttons">
            <button onClick={()=>dispatch({type: "add"})}>Add</button>
            <button onClick={()=>dispatch({type: "sub"})}>Sub</button>
        </div>
      </div>
    `

  return (
    <div>
        <button onClick={()=>setShowCode(!showCode)}>Show Code</button>
      <p className="container">
        <span>Using useState hook and useCallback for memoizing handleClick: {count}</span>
        <AddButton handleClick={handleAdd}>Add</AddButton>
      </p>
      <p className="container">
        <span>Using useRef hook for focus on render/mount using useEffect</span>
        <input ref={inputRef} value={user} onChange={e=>setUser(e.target.value)} />
      </p>
      <p className="container">
        <span>Using usecontext hook: <b>{value?.user} </b></span>
      </p>
      <div className="container">
        <span>Using use reducer hook for adding or subtracting: <b>{state.count}</b></span>
        <div className="buttons">
            <button onClick={()=>dispatch({type: "add"})}>Add</button>
            <button onClick={()=>dispatch({type: "sub"})}>Sub</button>
        </div>
      </div>
      <p>
      {showCode && <SyntaxHighlighter language="javascript" style={solarizedlight}>
        {syntax}
      </SyntaxHighlighter>}
      </p>
    </div>
  );
};
