import React from 'react'
import '../styles/footer.css'
import { X, MailOpen, Instagram } from 'lucide-react'
import ScrollToTop from './ScrollToTop'


const Footer = () => {
  return (
    <div className="absolute bottom-0 w-full h-[calc(100vh-650px)] px-[30px]">
      <div className='cont w-full h-full flex justify-between items-center'>
        <h1 className='text-[20px] items-center'> <span className='text-[23px]'>©</span> 2025 Built and Design by <span className='text-blue-700'>@Bytes</span></h1>
        <p className='flex text-[20px]'>Reach me out via 😊 <span className='flex gap-2 items-center'> <X /> <Instagram /> <MailOpen /> </span>
        </p>
      </div>
      <ScrollToTop />
    </div>
  )
}

export default Footer

