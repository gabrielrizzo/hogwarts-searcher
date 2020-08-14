function RequesterService (URL, KEY) {
  console.log(KEY)
  const url = URL
  const key = KEY ? `&key=${KEY}` : ''

  async function getCharacterByQuery (query) {
    const response = await fetch(`${url}characters/?${query}${key}`)
    const characters = await response.json()

    return characters
  }

  return {
    getCharacterByQuery
  }
}

export const HarryPotterAPI = RequesterService('https://www.potterapi.com/v1/', process.env.REACT_APP_HARRY_POTTER_KEY)
console.log(process.env.REACT_APP_HARRY_POTTER_KEY)
console.log(process.env.REACT_APP_HARRY_POTTER_SECOND_KEY)
