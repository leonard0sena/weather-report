import { useState } from 'react'
import { SearchInputWrapper, SearchButton, SearchInputCamp, ErrorMsgWrapper } from './style.js'


function SearchInput ({ updateCoords }) {
  const [inputValue, setInputValue] = useState("")
  const [errorMsg, setErrorMsg] = useState(false)

  async function handleSearch() {
    await fetchData()
  }

  async function fetchData() {
    try {
      const initialResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=ddbe22c4ca49e54f138a28fc1067af55`)
      const response = await initialResponse.json()
      updateCoords({ latitude: response.coord.lat, longitude: response.coord.lon })
      setErrorMsg(false)
    } catch (error) {
      setErrorMsg(true)
      setTimeout(() => {
        setErrorMsg(false)
      }, "3000")
    }
  }

  return(
    <>
      <SearchInputWrapper>
        <SearchInputCamp
          placeholder='Digite a cidade'
          onChange={event => setInputValue(event.target.value)}
        />
        <SearchButton onClick={handleSearch}>Pesquisar</SearchButton>
      </SearchInputWrapper>
      <ErrorMsgWrapper>
        {errorMsg && <ErrorMsgWrapper>Cidade Inexistente, tente novamente.</ErrorMsgWrapper>}
      </ErrorMsgWrapper>
    </>
  )
}

export default SearchInput