import React from 'react'

function Header() {
  return (
    <div className='w-full h-auto'>
        <img className='w-full hidden md:block' src="https://cdn.pwskills.com/assets/uploads/banners/63a18cca807628f5968f528a/web.jpg" alt="" />
        <img className='w-full block md:hidden' src="https://cdn.pwskills.com/assets/uploads/banners/63a18cca807628f5968f528a/mobile.jpg" alt="" />      
    </div>
  )
}

export default Header
