import React from 'react'
import style from "./Pagination.module.css"

export default function Pagination({ videogamesPerPage, videogames, pagination }) {
    const pageNumbers = []
    for (let i = 0; i < Math.ceil(videogames / videogamesPerPage); i++) {
        pageNumbers.push(i + 1)
    }

    console.log(pageNumbers);
    return (
        <div>
            <div className={style.paginado}>
            {
                pageNumbers && pageNumbers.map(e => (
                    <div key={e} className={style.number} onClick={() => pagination(e)}>{e}</div>
                ))
            }
            </div>
        </div>
    )
}