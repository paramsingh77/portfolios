import React from 'react'
import '../styles/Me.css'
// import * as Reac /t from 'react';
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const Me = () => {
  return (
    <div className='flexd'>
        <div className='flex'>
            <div className='content'>
                <div className='title'>Hi Parminder here 👋</div>
                <div className='Description'>
                23 - year- old <s>game</s>   software developer.
                <br/>
                <br/>
                I like to develop full-stack, drink instant coffee and get coding advice from my cat, Luffy.
                </div>
                <div className='button-class flexf'>
                    <div className='height-100'>
                <div className='butttons'>
                Resume {<SimCardDownloadIcon/>}
                </div>
 
                  </div>
                    <div>
                        <ul className='flex9'>
                            <a href='https://www.linkedin.com/in/psingh20'><li><LinkedInIcon/></li></a>
                            <a href='https://www.github.com/paramsingh77'><li><GitHubIcon/></li></a>
                            <a href='psinghdev13@gmail.com'> <li><EmailIcon/></li></a>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='profilephoto'>
            </div>
        </div>
    </div>
  )
}

export default Me