
const defaultState = {
    countries: []
};

const ADD_COUNTRY = 'ADD_COUNTRY';
const GET_COUNTRIES = 'GET_COUNTRIES';
const GET_COUNTRIES_FROM_API = 'GET_COUNTRIES_FROM_API';
export const countryReducer = (state: any = defaultState, action: {type: string, payload: any}) => {
    switch (action.type) {
        case GET_COUNTRIES:
            return {...state, countries: [...state.countries]}
        case GET_COUNTRIES_FROM_API:
            return {...state, countries: [...state.countries, ...action.payload]}
        case ADD_COUNTRY:
            return {...state, countries: [...state.countries, action.payload]}
        default:
            return state
    }
}

export const getCountriesAction = () => ({type: GET_COUNTRIES})
export const getCountriesFromApiAction = (payload: any) => ({type: GET_COUNTRIES_FROM_API, payload})
export const addCountry = (payload: any) => ({type: ADD_COUNTRY, payload})
