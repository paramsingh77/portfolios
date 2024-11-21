import React, { useEffect, useState } from 'react'
import '../styles/work.css'
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import MobileScreen from '../Components/MobileScreen.js'
const Work = () => {
  const [width,setWidth] = useState(window.innerWidth);

  useEffect(()=>{
    const handleSizeChange = () =>{
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize',handleSizeChange);

    return () => {
      window.removeEventListener('resize',handleSizeChange);
    }
  })
  return (
    <>

    { width < 430 ? <MobileScreen/> : <WebScreen/>}
   
    </>
    
  )
}


const WebScreen = () => {
  return(
 <div className='setw'>
    <Timeline className='timelinee'
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      <TimelineItem>
        <TimelineSeparator>
          <div>
          <TimelineDot 
  sx={{
    backgroundColor: '#1F2937',
    padding: '2px',
    margin: '0',
    border: '2px solid #8F97A3',
    '&.MuiTimelineDot-root': {
      width: '44px',
      height: '44px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }}
>
       <img style={{height:'40px', width:'40px', objectFit:'cover', borderRadius:'50%', backgroundColor:'gray'}} src="https://www.professors.directory/gallery/1277_al-university_of_north_alabama_xmw.jpg" alt="ele"/>
         </TimelineDot>
         </div>
          <TimelineConnector />
          <TimelineConnector/>
          <TimelineConnector/>
        </TimelineSeparator>
        <TimelineContent className=''>
        <div>
          <div className='date'>January 2023 - May 2024</div>
          <div className='work-place'>University of North Alabama</div>
          <div className='role'>Web Dev & Computer Science Tutor</div>
          <div className='points'>
            <ul>
            <li className='lis'>Developed the Java backend for a bank account servicing process with multiple channel integrations using Activiti workflow</li>
            <li className='lis'>Built a custom database migration tool using Python and MariaDB and facilitated the migration of 1000+ processes from a vendor platform</li>
            </ul>
          </div>
        </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem className='t2'>
        <TimelineSeparator>
          <TimelineDot>
            <img style={{height:'40px', width:'40px', objectFit:'cover', padding:-10, borderRadius:'50%', backgroundColor:'gray'}} src="https://pics.craiyon.com/2024-09-12/u0omXX-VSfaJSn0BCUUpcA.webp" alt="ele"/>
         </TimelineDot>
          <TimelineConnector />
          <TimelineConnector/>
          <TimelineConnector/>
        </TimelineSeparator>
        <TimelineContent>
        <div>
          <div className='date'>May 2020 - July 2021</div>
          <div className='work-place'>DevTech Solutions</div>
          <div className='role'>Python Developer</div>
          <div className='points'>
            <ul>
            <li className='lis'>Assisted in developing backend services using Python and Flask for a client’s project</li>
            <li className='lis'>Created and executed 5+ test cases, contributing to the delivery of quality software products</li>
            <li className='lis'>Participated in integration testing for 2 releases, gaining experience in quality assurance processes
            </li>
            </ul>
          </div>
        </div>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    </div>

  )
}

export default Work