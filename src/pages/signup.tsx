import { useState } from 'react'

// icons
import { ImFilePicture } from 'react-icons/im'
import { BsCheckLg } from 'react-icons/bs'
import Link from 'next/link'

export default function Signup() {
  const [uploadedImg, setUploadedImg] = useState('')
  const [imgIsUploaded, setImgIsUploaded] = useState(false)

  const handleFileChange = (e: any) => {
    console.log(e.target.files[0].name)
    setUploadedImg(e.target.files[0].name)
    setImgIsUploaded(true)
  }

  return (
    <div className='flex flex-col items-center gap-8 my-10'>
      <h1 className='text-4xl'>
        Welcome to <span className='logo'>Chirpt</span>
      </h1>
      <div className='bg-dark-gray w-[60%] rounded-xl pb-10'>
        <h2 className='text-center text-2xl py-5'>Sign Up</h2>
        <form className='flex flex-col items-center gap-2'>
          <input type='text' placeholder='Name' className='input' />
          <input type='email' placeholder='Email' className='input' />
          <input type='text' placeholder='Username' className='input' />
          <input type='password' placeholder='Password' className='input' />
          <input
            type='file'
            id='file'
            className='hidden'
            onChange={handleFileChange}
            accept='.png, .jpg'
          />
          <label htmlFor='file' className='flex items-center gap-2 input'>
            {imgIsUploaded ? (
              <BsCheckLg className='text-purple-500' />
            ) : (
              <ImFilePicture />
            )}
            {imgIsUploaded ? uploadedImg : 'Upload Profile Pic'}
          </label>
          <button className='btn'>Sign Up</button>
        </form>
        <p className='text-center'>
          Have an account?{' '}
          <Link href='/login' className='text-blue-500'>
            Login
          </Link>
        </p>
      </div>
      <p className='fixed bottom-0 pb-5 text-light-gray text-sm'>
        &copy; Copyright Chirpt 2022
      </p>
    </div>
  )
}
