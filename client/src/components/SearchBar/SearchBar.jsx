import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getNameVideogame } from '../../actions'
import styleSearchBar from './SearchBar.module.css'

export default function SearchBar() {

    const dispatch = useDispatch()

    const [name, setName] = useState("")
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    function handleInputChange(e) {
        setError(false)
        setName(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        setLoading(true)
        dispatch(getNameVideogame(name))
            .then(response => {
                !response ? setError(true) : setError(false)
                setLoading(false)
            })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <p className={styleSearchBar.divErrors}>
                {
                    error && (
                        <div className={styleSearchBar.error}>Game not found</div>
                    )
                }
                {
                    loading && loading ? <div className={styleSearchBar.search} >Searching...</div> : null
                }
            </p>
            <div className = {styleSearchBar.divSearch}>
                <button className={styleSearchBar.button} onClick={((e) => handleSubmit(e))} type="submit">Search</button>
                <input className={styleSearchBar.input} onChange={((e) => handleInputChange(e))} placeholder="Name..." type="text" />
            </div>
        </div>
    )
}