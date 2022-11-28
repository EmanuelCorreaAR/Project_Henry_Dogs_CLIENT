import {
    GET_ALL_DOGS,
    GET_NAME_DOG,
    GET_TEMPERAMENTS,
    GET_DETAIL,
    FILTER_BY_TEMPERAMENTS,
    FILTER_CREATED,
    ORDER_SORT,
    POST_DOG,
} from "../redux/actions"

const initialState = {
    dogs: [],
    filterDogs: [],
    temperaments: [],
    detail: {},
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_DOGS:
            return {
                ...state,
                dogs: action.payload,
                filterDogs: action.payload
            }
        case GET_NAME_DOG:
            return {
                ...state,
                dogs: action.payload
            }
        case GET_TEMPERAMENTS:
            return {
                ...state,
                temperaments: action.payload
            }
        case GET_DETAIL:
            return {
                ...state,
                detail: action.payload
            }
        case ORDER_SORT:
            if (action.payload === "default") {
                return {
                    ...state,
                    dogs: state.dogs
                }
            }
            if (action.payload === "az") {
                return {
                    ...state,
                    dogs: state.dogs.sort(function (a, b) {
                        if (a.name.toLowerCase() > b.name.toLowerCase()) {
                            return 1;
                        }
                        if (b.name.toLowerCase() > a.name.toLowerCase()) {
                            return -1;
                        }
                        return 0
                    })
                }
            }
            if (action.payload === "za") {
                return {
                    ...state,
                    dogs: state.dogs.sort(function (a, b) {
                        if (a.name.toLowerCase() > b.name.toLowerCase()) {
                            return -1;
                        }
                        if (b.name.toLowerCase() > a.name.toLowerCase()) {
                            return 1
                        }
                        return 0;
                    })
                }
            }
            if (action.payload === "toUp") {
                return {
                    ...state,
                    dogs: state.dogs.sort(function (a, b) {
                        if (a.max_weight > b.max_weight) {
                            return 1;
                        }
                        if (b.max_weight > a.max_weight) {
                            return -1;
                        }
                        return 0
                    })
                }
            }
            if (action.payload === "toDown") {
                return {
                    ...state,
                    dogs: state.dogs.sort(function (a, b) {
                        if (a.max_weight > b.max_weight) {
                            return -1;
                        }
                        if (b.max_weight > a.max_weight) {
                            return 1
                        }
                        return 0;
                    })
                }
            }
            else {
                return {
                    ...state,
                }
            }
        case FILTER_BY_TEMPERAMENTS:
            const allDogs = state.filterDogs;
            const temperamentFilter =
                action.payload === "all" ? allDogs
                    : allDogs.filter((temp) =>
                        temp.temperament?.includes(action.payload))
            return {
                ...state,
                dogs: temperamentFilter,
            }
        case FILTER_CREATED:
            const createdFilter = action.payload === "created" ? state.filterDogs.filter((event) => event.createInDb) : state.filterDogs.filter((event) => !event.createInDb)
            return {
                ...state,
                dogs: createdFilter
            }
        case POST_DOG:
            return {
                ...state
            } 
        default:
            return state;
    }
}
export default rootReducer