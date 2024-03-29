import React, { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { getDetail } from '../../actions'
import styleDetail from './Detail.module.css'

export default function Detail() {
    const { id } = useParams()

    const dispatch = useDispatch()
    const details = useSelector(state => state.detail)

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        dispatch(getDetail(id))
            .then((response) => {
                setLoading(false);
            })
            .catch(error => console.log(error));
    }, [dispatch,id])


    if (loading) {
        return (
            <div>
                <Link to="/home">
                    <button className={styleDetail.btnBack}>Home</button>
                </Link>
                <div className={styleDetail.loading}>
                </div>

            </div>
        )
    }

    var parser = new DOMParser();
    var htmlDoc = parser.parseFromString(details[0].description, 'text/html')
    const description = htmlDoc.body.innerText

    return (
        <div className={styleDetail.background}>
            <div className={styleDetail.border}>
                <h1 className={styleDetail.h1}> {details[0].name} </h1>
                <img className={styleDetail.img} src={details[0].background_image} alt="" width="500px" height="300px" />
                <p className={styleDetail.description}>{description}</p>
                <h2 className={styleDetail.h2}>Release Date:</h2>
                <p className={styleDetail.p}> {details[0].released} </p>
                <h2 className={styleDetail.h2}>Rating:</h2>
                <p className={styleDetail.p}> {details[0].rating} </p>
                <h2 className={styleDetail.platforms} >Platforms:</h2>
                <p className={styleDetail.pPlatforms}> {details[0].platforms.map(e => (e.name + " / "))} </p>
            </div>
            <div>
                <Link to="/home">
                    <button className={styleDetail.btnclose}>Home</button>
                </Link>
                <Link to={`/detail/${Math.floor(Math.random() * 100000)}`}>
                    <button className={styleDetail.btnclose}>Random Game</button>
                </Link>
            </div>
        </div>
    )
}