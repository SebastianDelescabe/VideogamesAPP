import axios from 'axios'

export function getVideogames() {
    return async function (dispatch) {
        const videogames = await axios.get('/games')
        return dispatch({
            type: "GET_VIDEOGAMES",
            payload: videogames.data
        })
    }
}

export function getNameVideogame(payload) {
    return async function (dispatch) {
        try {
            const videogame = await axios.get('/games?name=' + payload)
            return dispatch({
                type: "GET_NAME_VIDEOGAME",
                payload: videogame.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function getDetail(id) {
    return async function (dispatch) {
        try {
            const details = await axios.get("/games/" + id)
            return dispatch({
                type: "GET_DETAIL",
                payload: details.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function getGenres() {
    return async function (dispatch) {
        try {
            const genres = await axios.get("/genre")
            return dispatch({
                type: "GET_GENRES",
                payload: genres.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function getPlatforms() {
    return async function (dispatch) {
        try {
            const platforms = await axios.get("/platforms")
            return dispatch({
                type: "GET_PLATFORMS",
                payload: platforms.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function deleteDbGame(id) {
    return async function (dispatch) {
        try {
            const game = await axios.delete("/delete/" + id)
            return dispatch({
                type: "DELETE_DB_GAME",
                payload: game.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function filterGenre(payload) {
    return {
        type: "FILTER_GENRE",
        payload,
    }
}

export function filterPlatforms(payload) {
    return {
        type: "FILTER_PLATFORMS",
        payload,
    }
}

export function filterBd(payload) {
    return {
        type: "FILTER_BD",
        payload
    }
}

export function filterRating(payload) {
    return {
        type: "FILTER_RATING",
        payload
    }
}

export function filterNameOrder(payload) {
    return {
        type: "FILTER_NAME_ORDER",
        payload
    }
}

export function postVideogame(payload) { //TRAIGO LA INFO NECESARIA PARA EL FORMULARIO DESDE EL POST DEL BACK
    return async function (dispatch) {
        const response = await axios.post("/games", payload)
        return response;
    }
}