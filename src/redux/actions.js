import axios from "axios";

export const GET_ALL_DOGS = "GET_ALL_DOGS";
export const GET_NAME_DOG = "GET_NAME_DOG";
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS";
export const GET_DETAIL = "GET_DETAIL"
export const FILTER_BY_TEMPERAMENTS = "FILTER_BY_TEMPERAMENTS";
export const FILTER_CREATED = "FILTER_CREATED";
export const ORDER_SORT = "ORDER_SORT";
export const POST_DOG = "POST_DOG";
export const FILTER_AAA = "FILTER_AAA"



export function getAllDogs() {
    return async function (dispatch) {
        try {
            var json = await axios("http://localhost:3001/dogs")
            return dispatch({
                type: GET_ALL_DOGS,
                payload: json.data
            })
        }
        catch (error) {
            alert("Connection failed")
        }
    }
};

export function getNameDog(payload) {
    return async function (dispatch) {
        try {
            const json = await axios(`http://localhost:3001/dogs/name?name=${payload}`);
            return dispatch({
                type: GET_NAME_DOG,
                payload: json.data
            })
        }
        catch (error) {
            alert("Dog not found")
        }
    }
};

export function getTemperaments() {
    return async function (dispatch) {
        const json = await axios("http://localhost:3001/temperaments");
        return dispatch({
            type: GET_TEMPERAMENTS,
            payload: json.data
        })
    }
};


export function getDetail(id) {
    return async function (dispatch) {
        try {
            const json = await axios("http://localhost:3001/dogs/" + id)
            return dispatch({
                type: GET_DETAIL,
                payload: json.data
            });
        }
        catch (error) {
            alert("ID NOT FOUND")
        }
    }
};

export function filterByTemperaments(payload) {
    return {
        type: FILTER_BY_TEMPERAMENTS,
        payload
    }
}

export function filterCreated(payload) {
    return {
        type: FILTER_CREATED,
        payload
    }
}

export function orderSort(payload) {
    return {
        type: ORDER_SORT,
        payload
    }
}

export function postDog(payload) {
    return async function (dispatch) {
        try {
            await axios.post("http://localhost:3001/dog", payload);
            return {
                type: POST_DOG,
            }
        }
        catch (error) {
            alert("ERROR POST")
        }
    }
}

export function filteredAAA(payload){
    return {
        type: FILTER_AAA,
        payload
    }
}






