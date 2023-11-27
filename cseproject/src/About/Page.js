import React from 'react';
import "./Style.css";
// import { AppBar, Toolbar, Container, IconButton } from '@mui/material';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import TwitterIcon from '@mui/icons-material/Twitter';

const AboutPage = () => {
  return (
  <div className='bodytag'>
    <div className='summa'>
      <h1 className='aboutcss'>About Us</h1>
      <p className='ouot'>-Empower Lives, Foster Hope  </p>
          <div className='seperatebox'>
            <div className='seperatebox1'>
              <h1 className='box-1' >We are ExpenseEase.</h1>
              
              <p className='box-2'><br></br>WelcomeTo ExpenseEase,Keep An Accurate Track on Your Accounts.</p>
              </div>
              <div >
                <img src='https://i.pinimg.com/564x/14/32/f7/1432f7ce422963c1a2ecfc33888018a9.jpg' alt='' className='seperatebox2'></img>
              </div>
              {/* <img className='imgsty'/> */}

        </div>
    </div>
    <div className='up-mission'>
        <div className='mission-img'>
              <img src='https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1600' alt=''></img>
        </div>
        <div className="mission">
          <h1>Our Mission</h1>
          <p>
          <br></br>
          Empower Users: Our mission is to empower individuals <br></br>
           by providing a user-friendly accounting application <br></br>
           that enables them to take control of their finances<br></br>
            and make informed financial decisions.
          </p>
        </div>
    </div>


      <div className="why">
            <div className='why2'>
            <h2>Why Support Us?</h2>
            <p>
              Supporting our cause will be more helpfull<br></br> for Account Handling<br></br><br></br>
            </p>
             <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-activity" className='life'><path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
             </svg> Enhanced Access&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
             <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-pulse" className='health'><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/>
             </svg> Accounting
             <br></br>
             <br></br>
             <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-graduation-cap"className='edu'><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
             </svg>Managing Budget&ensp;&ensp;&ensp;&nbsp;&ensp;&ensp;&ensp;
             <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-baby"className='child'><path d="M9 12h.01"/><path d="M15 12h.01"/><path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"/><path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"/>
             </svg>Managing Expense
            </div>
            <div className='why3'>
              <img src='https://images.pexels.com/photos/5303515/pexels-photo-5303515.jpeg?auto=compress&cs=tinysrgb&w=1600' alt=''></img>
            </div>
      </div>
      <br></br>

<div className='foot'>
<div className='footer'>
      <div className="how">
        <h2> <g>|&ensp;</g>ExpenseEase </h2>
        <p>
        <br></br>
        Our accounting app <br></br>simplifies financial management, empowering <br></br>
        users to track expenses, <br></br>set budgets, and gain confidence <br></br>in their financial decisions<br></br> through a user-friendly interface.
          
        </p>
      </div>
      <div className="how">
        <h2> <g>|&ensp;</g>Our Supports around  </h2>
        <p>
        <br></br>
          <li>Chennai.</li>
          <li>Bangalore.</li>
          <li>Coimbatore.</li>
          <li>Salem.</li>
          <li>Hosur.</li>
             &ensp;&ensp; and more in cities and towns
          
        </p>
      </div>
      <div className="how">
        <h2> <g>|&ensp;</g>How You Can Help </h2>
        <p>
        <br></br>
          There are various ways to contribute:
          <li>fundraising Campaign.</li>
          <li>Advocate and Spread Awareness.</li>
          <li>Donate to Medical Charities.</li>
          
        </p>
      </div>
      <div className="us">
        <h2 ><g>|&ensp;</g>Contact Us</h2>
        <p>
        <br></br>
        {/* <br></br> */}
          Have questions or want<br></br> to get involved? <br></br>Reach out to us at<br></br>
          <br></br><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>  +91 636951798<br>
          </br><br></br><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
          </svg>  mailtofund@gmail.com
        </p>
      </div>
</div>
</div>
    </div>
  );
};

export default AboutPage;
