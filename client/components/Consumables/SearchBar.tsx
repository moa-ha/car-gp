import { useState } from 'react'

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('')
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchQuery(e.target.value)
  }

  // Show google search result
  const searchOnGoogle = () => {
    const encodedQuery = encodeURIComponent(searchQuery)
    const googleSearchUrl = `https://www.google.com/search?q=${encodedQuery}`
    window.open(googleSearchUrl, '_blank')
    setSearchQuery('')
  }

  return (
    <div className="flex items-center space-x-4">
      <button onClick={searchOnGoogle} className="font-light">
        🔍
      </button>
      <input
        className="m-2 w-full rounded border border-gray-300 px-4 py-2"
        onChange={handleChange}
        type="text"
        value={searchQuery}
        name="name"
        placeholder="ex. How many kms to drive after changing battery?"
      />
    </div>
  )
}

export default SearchBar
