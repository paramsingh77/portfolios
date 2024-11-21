import React from 'react'
// import Timeline from '@mui/lab/Timeline';
// import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
// import TimelineSeparator from '@mui/lab/TimelineSeparator';
// import TimelineConnector from '@mui/lab/TimelineConnector';
// import TimelineContent from '@mui/lab/TimelineContent';
// import TimelineDot from '@mui/lab/TimelineDot';

const MobileScreen = () => {
  return (
    <>
        <div className='dot-desc'>
            <div className='work-1'>
            <div className='logogo'>
                    <div className='make-circle'>
                    <img style={{height:'40px', width:'40px', objectFit:'cover', borderRadius:'50%', backgroundColor:'gray'}} src="https://www.professors.directory/gallery/1277_al-university_of_north_alabama_xmw.jpg" alt="ele"/>
                    </div>
               
                </div>
                <div className='descm1'>
                <div>
                        <div className='date1'>January 2023 - May 2024</div>
                        <div className='work-place1'>University of North Alabama</div>
                       <div className='role1'>Web Dev & Computer Science Tutor</div>
                       <div className='points1'>
                           <ul>
                              <li className='lis1'>Developed the Java backend for a bank account servicing process with multiple channel integrations using Activiti workflow</li>
                             <li className='lis1'>Built a custom database migration tool using Python and MariaDB and facilitated the migration of 1000+ processes from a vendor platform</li>
                           </ul>
                </div>
            </div>

        </div>
            </div>
            <div className='work-2'>
            <div className='logogo1'>
                    <div className='make-circle'>
                    <img style={{height:'40px', width:'40px', objectFit:'cover', padding:-10, borderRadius:'50%', backgroundColor:'gray'}} src="https://pics.craiyon.com/2024-09-12/u0omXX-VSfaJSn0BCUUpcA.webp" alt="ele"/>
                    </div>
               
                </div>
                <div className='descm1'>
                <div>
                        <div className='date1'>January 2023 - May 2024</div>
                        <div className='work-place1'>DevelopTech sols</div>
                       <div className='role1'>Python Developer</div>
                       <div className='points1'>
                           <ul>
                              <li className='lis1'>Assisted in developing backend services using Python and Flask for a client’s project</li>
                             <li className='lis1'>Created and executed 5+ test cases, contributing to the delivery of quality software products</li>
                             <li className='lis1'>Participated in integration testing for 2 releases, gaining experience in quality assurance processes</li>
                           </ul>
                </div>
                </div>
                </div>
            </div>
             
        </div>
    </>
    
  )
}

export default MobileScreen