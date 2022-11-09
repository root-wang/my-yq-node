import React, {FunctionComponent, useEffect, useState} from 'react';
import image1 from './banner/banner-01.jpg'
import image2 from './banner/banner-02.jpg'
import image3 from './banner/banner-03.jpg'
import './Slide.css'

export const Slide: FunctionComponent = function () {
  
  const [currentImg, setCurrentImg] = useState<typeof image1>(image1);
  const imgArr = [image1, image2, image3];
  
  let timer: NodeJS.Timeout;
  const changeImg = () => {
    setCurrentImg(imgArr[( imgArr.indexOf(currentImg) + 1 ) % 3]);
    clearInterval(timer)
  };
  
  useEffect(() => {
    timer = setInterval(changeImg, 3000);
    return () => {
      clearInterval(timer)
    }
  }, [currentImg]);
  
  
  const curDotClass = {
    backgroundColor: 'orange',
    border         : 'none'
  }
  return (
    <div className='slide' >
      <ul >
        <li >
          <img
            src={currentImg}
            alt='banner'
            width='100%'
          />
        </li >
      </ul >
      <div className='dot' >
        <span style={currentImg === image1 ? curDotClass : {}} />
        <span style={currentImg === image2 ? curDotClass : {}} />
        <span style={currentImg === image3 ? curDotClass : {}} />
      </div >
    </div >
  )
}