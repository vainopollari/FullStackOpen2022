import { useState, useEffect } from 'react'
import axios from 'axios'

const FilterInput = (props) => {
  return (
    <div>
      {props.text} <input value={props.value} onChange={props.handler} />
    </div>
  )
}

const ShowInfo = (props) => {
  const arr = props.list

  if (arr.length > 10 && arr.length < 250) {
    return(
      <div>
        Too many matches, specify another filter
      </div>
    )
  }

  else if (arr.length <= 10 && arr.length > 1) {
    return (
      <div>
        <ul>
          {arr.map(content => 
            <li key={content.name.common}>
              {content.name.common}
            </li>
          )}
        </ul>
      </div>
    )
  }

  else if (arr.length === 1) {
    const lang_values = Object.values(arr[0].languages)
    return (
      <div>
        <h3>{arr[0].name.common}</h3>
        <p>Capital: {arr[0].capital}</p>
        <p>Area: {arr[0].area}</p>
        <h3>Languages:</h3>
        <ul>
          {lang_values.map(elem => 
            <li key={elem}>
              {elem}
            </li>
          )}
        </ul>
        <img 
        src={arr[0].flags.png}
        alt="new"
        />
      </div>
    )
  }
}


const App = () => {

  const [countries, setCountries] = useState([])
  const [findcountry, setFind] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleFilter = (event) => {
    setFind(event.target.value)
  }

  
  const filteredCountries = countries
        .filter((country) => {
            return country.name.common.toString().toLowerCase().includes(findcountry);
        })

  return (
    <div>
      <h2>
        Get info from countries by typing below
      </h2>
      <FilterInput
        text='find countries'
        value={findcountry}
        handler={handleFilter}
      />
      <ShowInfo 
        list={filteredCountries}
      />
    </div>
  )
}

export default App

