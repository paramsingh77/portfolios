import React, { useEffect, useState } from 'react'
import '../styles/header.css'
import profile from '../images/profile.png'

const Header = () => {
  const[width,setWidth] = useState(window.innerWidth)

  useEffect(()=>{
    const handleResize = () => {
      setWidth(window.innerWidth);
    }


    window.addEventListener('resize',handleResize);

    return () => {
      window.removeEventListener('resize',handleResize);
    }
  },[])

let widthy = 0;
let heade = 0

  if( width < 430 ) 
    {
      widthy='35px'
       heade='35px'
    }
    else{
      widthy='35px'
      heade='35px'
    }
  // let heightt =  (width > 430 )? '15px' : '15px';
  
  console.log(width);


  return (
    <div className='headers'>
        <div className='tags'>
            <nav className='page-list'>
                <ul className='no-list'>
                    <li><a href="/">home</a></li>
                    <li><a href="/projects">projects</a></li>
                    <li><a href="/blog">blog</a></li>
                    <li><a href="/contact">contact</a></li>
                </ul>
            </nav>
            <div className='brightness'>
                <img src={profile} className='srci' style={{width:`${widthy}` , height:`${heade}`}} alt='dp'/>
            </div>
        </div>
    </div>
  )
}

export default Header