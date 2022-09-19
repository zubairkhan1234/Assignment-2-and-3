
import React from 'react'

import { AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn, FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa'

const ProfileHome = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ width: 600, lineHeight: 4 }}>
        <p>LET'S BUILD SOMETHIN TOGETHER</p>
        <h1>Hi! I'm Zubair</h1>
        <h1>A Mern stack developer</h1>
      </div>
      <div style={{ width: 600, lineHeight: 2, marginTop:30 }}>
        <p>
          I'm a frontend developer specializing building in (and ocasionaliy design) exeptional digital experiences,.
          Currently i'm focused on building responsive front-end web application while learning
          back-end technology
        </p>
      </div>

      <div style={{ textAlign: 'center',  marginTop:50 }}>
        <p className='uppercase tracking-widest text-[#5651e5]'>Let's Contact</p>
        <div className='flex py-2 ' style={{ justifyContent: 'center' }} >
          <FaInstagram size={20} color={'#5651e5'} className='mr-5' />
          <FaFacebook size={20} color={'#5651e5'} className='mr-5' />
          <FaLinkedinIn size={20} color={'#5651e5'} className='mr-5' />
          <FaGithub size={20} color={'#5651e5'} className='mr-5' />
          <AiOutlineMail size={20} color={'#5651e5'} />
        </div>
      </div>
    </div>
  )
}

export default ProfileHome