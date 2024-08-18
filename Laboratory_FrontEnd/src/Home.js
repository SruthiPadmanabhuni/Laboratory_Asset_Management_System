import React from 'react'
import './Home.css'
import Navbar from './Navbar'
import Footer from './Footer'
import lpuentrance from './lpuentrance.jpg'
import lpuweb from './lpuweb.jpg'

function clearAllCookies() {
  var cookies = document.cookie.split(";");

  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var eqPos = cookie.indexOf("=");
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;";
  }
}

const Home = () => {
  clearAllCookies();

  return (
    <div>
      <Navbar />
      <div className='row homebg p-5'>
        <div className='col-8'>
          <h2 className='head'>About LPU</h2>
          <p className='content'>Lovely Professional University (LPU) is a private university located in Phagwara, Punjab, India. The university was established in 2005 by Lovely International Trust, under The Lovely Professional University Act, 2005 (Punjab Act 25 of 2005) and started operation in 2006.</p>
          <p className='content'>Ashok Kumar Mittal is the founder and chancellor of Lovely Professional University. LPU's distance degree is recognized by UGC and other educational bodies such as AICTE and NAAC, which has awarded the institution an 'A++' grade for its exceptional quality of education and related facilities.</p>
          <p className='content'>LPU encompasses over 20 schools offering more than 200 programs in fields such as engineering, technology, management, pharmacy, social sciences, and hotel management, all distinguished by an enhanced curriculum, state-of-the-art facilities, and exceptional faculty.</p>
          <p className='content'>LPU university is equipped with world-class infrastructure, offering internationally benchmarked curricula, fostering a diverse student body, and utilizing innovative, participatory, and experiential learning methods, with a strong emphasis on research, innovation, and entrepreneurship.</p>
        </div>
        <div className='col-4'>
          <img src={lpuentrance} alt='lpulogo' className='lpuimg'/>
        </div>
        <div className='col-4'>
          <img src={lpuweb} alt='lpulogo' className='lpuimg'/>
        </div>
        <div className='col-8'>
          <h2 className='head'>About Website</h2>
          <p className='content'>Laboratories are vital to universities, as the quality of their facilities and management directly influence the institution's teaching and research outcomes. The project, "A Problem-Solving Approach for Computer Laboratory Asset Management System", aims to develop a web-based application featuring both user and admin login portals to streamline the resolution of lab-related issues.</p>
          <p className='content'>This system enhances communication and issue tracking, enabling efficient problem-solving and providing regular updates for users. Implementing this solution allows laboratories to optimize their issue management processes, increase customer satisfaction, and ensure smooth operations.</p>
          <p className='content'> In today's academic and research institutions, laboratories are essential for education, learning, and scientific inquiry. Advances in web technology have transformed how we communicate, access information, and conduct business online. The project's goal is to enhance customer satisfaction, improve communication, and boost the effectiveness of lab issue management.</p>
        </div>
      </div>
      <hr style={{border:"1px solid black",margin:'0px'}}/>
      <Footer />
    </div>
  )
}

export default Home
