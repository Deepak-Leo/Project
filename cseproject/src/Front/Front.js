import React, { useState } from 'react'
import { AppBar, Toolbar, Container, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import MailIcon from '@mui/icons-material/Mail';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom';
import './Front.css'
export default function Front() {

  return (
    <div className='divsty'>
      <div className='d1'>

      <header className='Header'>
        <div className='header-h1'>
          <h1 style={{marginLeft:'50px',marginTop:'30px'}}>ExpenseEase</h1>
        </div>
        <div>
          <ul className='Header-ul'>
            <Link to='/about'><button ><li style={{fontSize:'20px'}}>About</li></button></Link>
            <Link to='/signup'><button ><li style={{fontSize:'20px'}}>Signup</li></button></Link>
            <Link to="/login"><button ><li style={{fontSize:'20px'}}>Login</li></button></Link>
          </ul>
        </div>
      </header>
     
        <div>
            <h2 className='parasty1' >Welcome To ExpenseEase! <br></br></h2>
        </div>
        <div className='gg' style={{display:'flex'}}>
            <div className='div1sty'>
                <h1 className='Headsty'>Trust The Accounting To Us! </h1><br></br>
                <br></br><div className='parasty' >
                  <p>Don' Worry you are in right place...</p><hr></hr>
                  <p>With 0% platform fee,you can manage your accounts</p><br></br>
                </div><br></br>
                <Link to='/login'><button className='butsty1' >Start Here</button></Link>
            </div>
            <img className='i1' src='https://img.freepik.com/free-vector/businessman-laptop_603843-770.jpg' alt='' width="600px" height="500px"></img>
        </div>
      </div>
        <div className='div2sty'>
           <div className='div2_content'>
             <center><h1>Our most unhappy customers are our <br></br> greatest source.</h1></center>
           </div>
           <div className='div2_img'>
            <img src='https://i.pinimg.com/564x/15/3a/45/153a4535df6cf2d2b106a558b750c486.jpg' alt=''></img>
            <img src='https://i.pinimg.com/564x/76/43/d9/7643d95155d961be3791a72f9de97c32.jpg' alt=''></img>
           </div>
        </div>
        <footer className='footer'>
            <AppBar position="static">
              <Container>
                <Toolbar>
                  <IconButton color="inherit" href="/">
                    <HomeIcon />
                  </IconButton>
                  <IconButton color="inherit" href="/about">
                    <InfoIcon />
                  </IconButton>
                  <IconButton color="inherit" href="/contact">
                    <MailIcon />
                  </IconButton>
                  <div style={{ flexGrow: 1 }}></div>
                  <p style={{marginRight:'10px', marginTop:'10px'}}>Follow us on </p>
                  <IconButton color="inherit" href="https://www.facebook.com/">
                    <FacebookIcon />
                  </IconButton>
                  <IconButton color="inherit" href="https://www.linkedin.com/">
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton color="inherit" href="https://twitter.com/">
                    <TwitterIcon />
                  </IconButton>
                </Toolbar>
              </Container>
            </AppBar>
        </footer>
        
    </div>
  )
}