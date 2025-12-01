import React from 'react'

function SearchBar({value,onChange}) {
  return (
    <div>
      <input type="text" placeholder='Search' 
      className='border px-3 py-2 rounded-md w-64'
      value={value}
      onChange={onChange}
      
      />
    </div>
  )
}

export default SearchBar
