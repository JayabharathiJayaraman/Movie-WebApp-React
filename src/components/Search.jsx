import React from 'react';
import './search.css'

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
            </div>
        </div>
        </>
    );
}
    

export default Search;