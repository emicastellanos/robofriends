import React from 'react';

const SearchBox = ({searchChange}) => {
    return (
        <div >
            <input className='tc bg-light-green' onChange={searchChange}></input>
        </div>
    );
}

export default SearchBox;