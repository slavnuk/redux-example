import { getCountriesFromApiAction } from '../store/countryReducer';

export const fetchCountries = (): any => {
    return (dispatch:any) => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => dispatch(getCountriesFromApiAction(json)))
    }
}
