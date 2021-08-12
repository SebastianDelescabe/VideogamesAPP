import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar/SearchBar";
import GenreFilter from "./Filters/GenreFilter";
import DbFilter from "./Filters/DbFilter";
import RatingOrder from "./Filters/RatingOrder"
import Home from "./Home/Home"
import styleIndex from "./index.module.css"

export default function Index() {

    return (
        <div>
            <h1 className={styleIndex.h1}>Videogames APP</h1>
            <Link to="/form">
                <button>Crea tu Videojuego</button>
            </Link>
            <div className={styleIndex.filters}>
                <GenreFilter />
                <DbFilter />
                <RatingOrder />
                <SearchBar />
            </div >
            <Home />
        </div>
    )
}