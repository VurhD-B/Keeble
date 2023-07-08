import React from 'react'
import MenuItem from './MenuItem'

const Menu = () => {
    // const height = `calc(100vh - 64px)`;
  return (
    <div className={`inset-y-0 right-0 w-1/4 h-screen bg-carolina-blue absolute overflow-hidden`}>
        <MenuItem children={"icon"} label={"text"}/>
    </div>
  )
}

export default Menu