import { useState } from 'react'
import { SearchInputWrapper, SearchButton, SearchInputCamp } from './style.js'


function SearchInput ({ updateCoords }) {
  const [inputValue, setInputValue] = useState("")
  const [coordst, setCoordst] = useState({})

  async function handleSearch() {
    await fetchData()
  }

  async function fetchData() {
    const initialResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=ddbe22c4ca49e54f138a28fc1067af55`)
    const response = await initialResponse.json()
    updateCoords({ latitude: response.coord.lat, longitude: response.coord.lon })
  }
  console.log(coordst)

  return(
    <SearchInputWrapper>
      <SearchInputCamp
        placeholder='Digite a cidade'
        onChange={event => setInputValue(event.target.value)}
      />
      <SearchButton onClick={handleSearch}>Pesquisar</SearchButton>
    </SearchInputWrapper>
  )
}

export default SearchInput