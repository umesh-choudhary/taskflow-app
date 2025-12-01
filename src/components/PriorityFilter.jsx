import React from 'react'

function PriorityFilter({value , onChange}) {
  return (
    <div>
      <select value={value}
      onChange={onChange} className="border px-3 py-2 rounded-md">
        <option value="">Priority</option>
        <option value="high">High</option>
      <option value="medium">Medium</option>
      <option value="low">Low</option>
      </select>
    </div>
  )
}

export default PriorityFilter
