import React, { useState } from 'react';


const SearchBar = () => {

    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    }

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        console.log(`Searching for: ${searchQuery}`);
        // Add your search functionality here:
        // const filteredData = BooksList.filter((item) => {
        //     return item.Name.toLowerCase().includes(searchQuery.toLowerCase());
        // });
        // setFilteredData(filteredData);
    }

    return (
        <>
            <form onSubmit={handleSearchSubmit}>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                />
                <button type="submit"><i className="fa fa-search" /></button>
            </form>
        </>
    );

}

export default SearchBar;
