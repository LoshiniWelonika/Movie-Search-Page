import MovieCard from "../components/MovieCard";
import { useState } from "react";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        {id:1, title:"John Wick", released_date:"2018"},
        {id:2, title:"Sinners", released_date:"2025"},
        {id:3, title:"Friends", released_date:"1998"},
    ]

    const handleSearch = (e) => {
        e.preventDefault();
        alert(searchQuery);
        setSearchQuery("");
    };

    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input 
                type="text" 
                placeholder="Search for movies..." 
                value={searchQuery}
                onChange={ e => {setSearchQuery(e.target.value)}}
            />
            <button type="submit" className="search-btn">Search</button>
        </form>

        <div className="movies-grid">
            {movies.map(movie => 
            <MovieCard movie={movie} key={movie.id} /> 
            )}
        </div>
    </div>
}

export default Home;