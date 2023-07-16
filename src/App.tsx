import React, { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountries } from './asyncActions/countries';
import { addCountry } from './store/countryReducer';

function App() {
  const dispatch = useDispatch();
  // @ts-ignore
  const countries: [any] = useSelector(state => state.countries.countries);
  const [inputValue, setInputValue] = useState('');
  console.log('sdfdsfds', countries)

  return (
    <div className="App">
      sfsdgdfgdf
      <button onClick={() => dispatch(fetchCountries())}>btn</button>
      <div style={{display: "flex", flexWrap: "wrap"}}>
        {countries.map(country => <div key={country.id} style={{display: "flex", maxWidth: "120px", margin: "5px", border: '1px solid'}}>{country.title}</div>)}
      </div>
      <input onChange={(e) => setInputValue(e.target.value)}/>
      <button onClick={() => dispatch(addCountry({id: 123453453, title: inputValue}))}>ADD COUNTRY</button>
    </div>
  );
}

export default App;
