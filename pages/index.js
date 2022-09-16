import React,{useState} from 'react'
import Image from 'next/image'
import navlogo from '../public/assets/navLogo.png'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { FaLinkedinIn, FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa'

export default function Home() {
  const [nav, setNav] = useState(false)
  const changeCondition = () => setNav(!nav)
  

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
                    <AiOutlineMenu size={25} onClick={() => changeCondition()} />
                </div>
            </div>


            <div 
            className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 ease-in duration-500' : ''}>
                <div
                    className={
                        nav ?
                            'fixed left-0 top-0 w-[75%] sm:[60%] md-[45%] h-screen bg-[#ecf0f3] ease-in duration-500 p-10'
                            :
                            'fixed left-[-100%] top-0 h-screen bg-[#ecf0f3] ease-in duration-500 p-10'
                    }
                >

                    <div>
                        <div className='flex w-full justify-between'>
                            <Image src={navlogo} alt="/" width={87} height={35} />
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                                <AiOutlineClose onClick={() => changeCondition()} />
                            </div>
                        </div>
                        <div className='border-b border-gray-300 my-4 '>
                            <p className='w-[85%] md:w-[90%]'>This is Navigation</p>
                        </div>
                    </div>
                    <div className='py-4 flex  flex-col'>
                        <ul>
                            <Link href={'/'}>
                                <li className='text-sm uppercase hover:border-b py-4 '>
                                    Home
                                </li>
                            </Link>
                            <Link href={'/'}>
                                <li className='text-sm uppercase hover:border-b py-4 '>
                                    about Us
                                </li>
                            </Link>
                            <Link href={'/'}>
                                <li className='text-sm uppercase hover:border-b py-4 '>
                                    Skill
                                </li>
                            </Link>
                            <Link href={'/'}>
                                <li className='text-sm uppercase hover:border-b py-4 '>
                                    Project
                                </li>
                            </Link>
                            <Link href={'/'}>
                                <li className='text-sm uppercase hover:border-b py-4 '>
                                    Contact
                                </li>
                            </Link>
                        </ul>
                    </div>
                    <div className='py-40'>
                        <p className='uppercase tracking-widest text-[#5651e5]'>Let's Contact</p>
                        <div className='flex py-2 justify-start' >
                            <FaInstagram size={20} color={'#5651e5'} className='mr-5' />
                            <FaFacebook size={20} color={'#5651e5'} className='mr-5' />
                            <FaLinkedinIn size={20} color={'#5651e5'} className='mr-5' />
                            <FaGithub size={20} color={'#5651e5'} className='mr-5' />
                            <AiOutlineMail size={20} color={'#5651e5'} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}
