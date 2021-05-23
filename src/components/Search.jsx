import React from 'react';
import './search.css'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions, STATUS } from "../features/movie";

const Search = ({ placeholder, handleChange }) => {
    
    return (
        <>
        <div className='ui search'>
            <div className='box'>
                <i class="fas fa-search"></i>
                <input type='search'
                    className='search'
                    placeholder={placeholder}
                    onChange={handleChange}
                />
                <button></button>
            </div>
        </div>
        </>
    );
}
    

export default Search;