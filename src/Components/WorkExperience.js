import React, { useState } from 'react'
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import '../styles/work.css'
import Work from './Work';
import Projects from './Projects';
const WorkExperience = () => {
    const [running, notRunning] = useState(<Work/>);
  return (
    <>
     <div className='tabl'>
     <Tabs aria-label="tabs" defaultValue={0} sx={{ bgcolor: 'transparent' , color:'white'}}>
    <TabList
      disableUnderline
      sx={{
        p: 0.9,
        gap: 0.5,
        height:'50px',
        fontSize:'15px',
        borderRadius: 'sm',
        bgcolor: '#1f2937',
        display:'flex',
        color:"white",
        verticalAlign:'middle',
        justifyContent:'center',
        [`& .${tabClasses.root}[aria-selected="true"]`]: {
          boxShadow: 'sm',
          bgcolor: '#030712',
          color:'white',
        },
      }}
    >
      <Tab disableIndicator sx={{ color: '#9BA3AF' , width:'50%'}}> <span className='colorFix' onClick={()=>{
        notRunning(<Work/>)
      }}>Work Experience</span></Tab>
      <Tab disableIndicator sx={{ color: '#9BA3AF' , width:'50%'}}><span className='colorFix' onClick={()=>{
        notRunning(<Projects/>)
      }}>Education</span></Tab>

    </TabList>
  </Tabs>
    </div>
    <div className='switch-sections timeline1'>
     {running}
    </div>
    </>
   
   
  )
}

export default WorkExperience