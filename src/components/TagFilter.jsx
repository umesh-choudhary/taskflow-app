import React from 'react'

function TagFilter({value , onChange}) {
  return (
    <div>
      <select value={value}
      onChange={onChange} className="border px-3 py-2 rounded-md">
      <option value="">Tag</option>
      <option value="frontend">Frontend</option>
      <option value="backend">Backend</option>
      <option value="testing">Testing</option>
      <option value="docs">Docs</option>
      </select>
    </div>
  )
}

export default TagFilter
