import React from "react";
import './App.css';
import Map from './Map.js';
import Nav from './Nav.js';

import {Component, useState } from "react";
import App from "./App";

export default function Search(props) {

    //respond to input changes
    const handleChange = (event) => {
        //get the value that the <input> now has
        let newValue = event.target.value

        //update the state to use that new value, rendering the component
        props.setInputValue(newValue);
    }

    return (
        <div>
            <Nav/>
            <div className="input-group rounded">
                <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" onChange={handleChange} value={props.inputValue} />
                <span className="input-group-text border-0" id="search-addon">
                    <i className="fas fa-search"></i>
                </span>
            </div>
        </div>
    );
}