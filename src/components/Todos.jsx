import React from "react";
import { useRef, useState } from "react";
import { handleClearBtn, handleSubmit } from "../utils";
import All from "./All";
import Completed from "./Completed";
import Active from "./Active";
import './Todos.scss';

export const Todos = () => {
    const initialData = JSON.parse(localStorage.getItem('data')) || [];

    // Setup to get Unique id for the Each task
    const initialUid = initialData.length > 0 ? initialData[initialData.length - 1].id + 1 : 3;
    const [uid, setUid] = useState(initialUid);


    const [currentView, setCorrentView] = useState('All');
    const example = [{ content: "Task 1", complete: false, id: 1 }, { content: "Task 2", complete: true, id: 2 }];
    const [lists, setLists] = useState((initialData.length>0) ? initialData : example);

    const inputVal = useRef();


    return (
        <div className="container">
            <div className="header">
                <h2> My Memory</h2>
            </div>
            <div className="myUL">
                <form onSubmit={(e) => handleSubmit(e, lists, setLists, inputVal, uid, setUid)} id="myForm">
                    <input type="text" id="myInput" placeholder="Title..." ref={inputVal} required />
                    <button type="submit" className="addBtn">
                        Add
                    </button>
                </form>
                <ul className="myList">
                    {
                        (currentView === 'All') ?
                            (<All lists={lists} setLists={setLists}/>) :
                            (currentView === "Completed") ?
                                (<Completed lists={lists} setLists={setLists}/>) :
                                (<Active lists={lists} setLists={setLists}/>)
                    }
                </ul>
                <div className="someBtns">
                    <div className="left">
                        <button className="clearBtn" onClick={() => handleClearBtn(setLists)}>
                            Clear All
                        </button>
                        <p id="numOfListRemain">
                            {(currentView==='All')?`Left: ${(lists.filter(item => !item.complete).length)}`:
                            (currentView === 'Active')?`Active: ${(lists.filter(item => !item.complete).length)}`:
                            `Completed: ${(lists.filter(item => item.complete).length)}`}
                            </p>
                    </div>
                    <div className="right">
                        <button onClick={() => setCorrentView('All')} className={(currentView === "All") ? "active" : ''}>All</button>
                        <button onClick={() => setCorrentView('Active')} className={(currentView === "Active") ? "active" : ''}>Active</button>
                        <button onClick={() => setCorrentView('Completed')} className={(currentView === "Completed") ? "active" : ''}>Completed</button>
                    </div>
                </div>
            </div>
        </div>
    );
}