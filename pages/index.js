import React from 'react'
import Image from 'next/image'
import navlogo from '../public/assets/navLogo.png'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
export default function Home() {
  return (
    <div className='container'>
      <title>It's Zubair </title>
      <div className='fixed w-full h-15 shadow-xl z-[100]'>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
          <Image src={navlogo} alt="/" width={125} height={50} />
          <div>
            <ul className='hidden md:flex'>
              <Link href={'/'}>
                <li className='ml-10 text-sm uppercase hover:border-b '>
                  Home
                </li>
              </Link>
              <Link href={'/'}>
                <li className='ml-10 text-sm uppercase hover:border-b '>
                  about Us
                </li>
              </Link>
              <Link href={'/'}>
                <li className='ml-10 text-sm uppercase hover:border-b '>
                  Skill
                </li>
              </Link>
              <Link href={'/'}>
                <li className='ml-10 text-sm uppercase hover:border-b '>
                  Project
                </li>
              </Link>
              <Link href={'/'}>
                <li className='ml-10 text-sm uppercase hover:border-b '>
                  Contact
                </li>
              </Link>
            </ul>
          </div>
          <div className='md:hidden'>
            <AiOutlineMenu size={25} />
          </div>
        </div>

        <div className='fixed left-0 top-0 w-full h-screen bg-black/70'>
          <div className='fixed left-0 top-0 w-[75%] sm:[60%] md-[45%] h-screen bg-[#ecf0f3] ease-in duration-500 p-10'>

            <div>
              <div className='flex w-full justify-between'>
                <Image src={navlogo} alt="/" width={87} height={35} />
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                  <AiOutlineClose />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
