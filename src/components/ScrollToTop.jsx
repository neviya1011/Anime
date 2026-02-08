import React from 'react'
import '../styles/scroll.css'
import { ArrowBigUp } from 'lucide-react'

const ScrollToTop = () => {

  function top() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}


  return (
    <div onClick={top}
    className='up absolute bottom-22 right-10 bg-white rounded-full p-[10px]'><ArrowBigUp size={50}/></div>
  )
}

export default ScrollToTop
