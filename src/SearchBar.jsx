import { useState } from "react";
import './assets/styles/searchBar.css'

export default function SearchBar({onSearch}){
    const [query, setQuery] = useState("");
    const [year, setYear] = useState("");
    const [type, setType] = useState("");

    const handleSearch = () => {
        onSearch(query, year, type);
    }


    return(
        <div className="searchBar">
            <input 
                className="input-search"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />

            <button className="btn-search" onClick={handleSearch}>
                <i className="fa fa-search"></i>
            </button>

            <div className="filters">
                <input 
                    className="input-year" 
                    placeholder="Year"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                />
                
                <select 
                    className="select-type" 
                    name="type"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                >
                    <option value="">-- Type --</option>
                    <option value="movie">Movies</option>
                    <option value="series">Series</option>
                    <option value="game">Games</option>
                </select>     
            </div>
        </div>
    )
}