import React from 'react'

function Header() {
  return (
    <div>
      <header className='flex items-center justify-between py-4 px-2'>
        <h1 className='text-2xl font-bold'>
            TaskFlow <span className='text-gray-500'>Mini Trello Board(Drag & Drop)</span>
        </h1>
      </header>
    </div>
  )
}

export default Header
