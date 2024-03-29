import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGenres } from '../../actions'
import { filterGenre } from '../../actions'
import styleFilter from './Filters.module.css'

export default function GenreFilter() {

    const dispatch = useDispatch()
    const genres = useSelector(state => state.genres)

    useEffect(() => {
        dispatch(getGenres())
    }, [dispatch])

    function handleGenreFilter(e) { 
        dispatch(filterGenre(e.target.value))
    }

    return (
        <div className={styleFilter.caja}>
            <select className={styleFilter.select} onChange={(e) => handleGenreFilter(e)}>
                <option value="all">All Genre</option>
                {
                    genres && genres.map(e => (
                        <option key={e.name} value={e.name}> {e.name} </option>

                    ))
                }
            </select>
        </div>
    )
}