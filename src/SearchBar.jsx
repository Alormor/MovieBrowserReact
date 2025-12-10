import './assets/styles/searchBar.css'

export default function SearchBar(){
    return(
        <div className="searchBar">
            <input className="input-search" placeholder="Search..."/>

            <button className="btn-search">
                <i class="fa fa-search"></i>
            </button>

            <div className="filters">
                <input className="input-year" placeholder="Year"/>
                <select className="select-type" name="type">
                    <option value="">-- Type --</option>
                    <option value="movie">Movies</option>
                    <option value="series">Series</option>
                    <option value="game">Games</option>
                </select>     
            </div>
        </div>
    )
}