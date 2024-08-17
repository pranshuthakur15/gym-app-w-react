import React from 'react'
import { Button } from '../Components/Button'

export const Hero = () => {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
        <div className='flex flex-col gap-4'>
        <p>IT'S TIME TO BECOME</p>
        <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'><span>A </span><span className='text-blue-400'>BE</span><span>A</span><span className='text-blue-400'>ST</span></h1>
        </div>
        <p className='text-sm md:text-base font-light'>
         I fully embrace the journey to becoming <span className='text-blue-400 font-medium'>incredibly strong and confident</span>, understanding the challenges and triumphs that come with growth. I accept the potential of becoming a <span className='text-blue-400 font-medium'>powerhouse of strength</span>, with the determination to overcome any obstacles in my path.
        </p>
        <Button func={() => {
                window.location.href = '#generate'
            }} text={"Accept & Begin"}></Button>
    </div>
  )
}
