import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'

// firebase
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { setDoc, doc } from 'firebase/firestore'
import { auth, storage, db } from '../utils/firebase'

// icons
import { ImFilePicture } from 'react-icons/im'
import { BsCheckLg } from 'react-icons/bs'

export default function Signup() {
  // router
  const router = useRouter()
  // state
  const [uploadedImg, setUploadedImg] = useState()
  const [imgIsUploaded, setImgIsUploaded] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [err, setErr] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleFileChange = (e: any) => {
    // set the image upload name to show in the ui
    setUploadedImg(e.target.files[0].name)
    // sets the image upload to true to show a checkmark in the ui
    setImgIsUploaded(true)
  }

  // console.log(supabase)

  const handleSubmit = async (e: any) => {
    //grabs the file from the form
    const file = e.target[4].value

    setIsLoading(true)
    e.preventDefault()

    try {
      // signs up the user
      const res = await createUserWithEmailAndPassword(auth, email, password)

      // creates a unique name for the profile image
      const date = new Date().getTime()
      const storageRef = ref(storage, `${username + date}`)

      // uploads the image to storage
      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadUrl) => {
          try {
            // update the profile
            await updateProfile(res.user, {
              displayName: username,
              photoURL: downloadUrl,
            })

            //create the user in the firestore
            await setDoc(doc(db, 'users', res.user.uid), {
              uid: res.user.uid,
              username,
              email,
              photoUrl: downloadUrl,
            })

            // creates an empty user chats in firestore
            await setDoc(doc(db, 'userChats', res.user.uid), {})

            // reroutes back to home
            router.push('/')
          } catch (error) {
            console.log(error)
            setErr(true)
            setIsLoading(false)
          }
        })
      })
    } catch (error: any) {
      toast.error('Email already in use. Please try again!')
      setErr(true)
      setIsLoading(false)
    }
  }

  return (
    <div className='flex flex-col items-center gap-8 my-10'>
      <h1 className='text-4xl'>
        Welcome to <span className='logo'>Chirpt</span>
      </h1>
      <div className='bg-dark-gray w-[60%] rounded-xl pb-10'>
        <h2 className='text-center text-2xl py-5'>Sign Up</h2>
        <form
          className='flex flex-col items-center gap-2'
          onSubmit={handleSubmit}
        >
          <input
            type='text'
            placeholder='Name'
            className='input'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type='email'
            placeholder='Email'
            className='input'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type='text'
            placeholder='Username'
            className='input'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type='password'
            placeholder='Password'
            className='input'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type='file'
            id='file'
            className='hidden'
            onChange={handleFileChange}
            accept='.png, .jpg'
            required
          />
          <label htmlFor='file' className='flex items-center gap-2 input'>
            {imgIsUploaded ? (
              <BsCheckLg className='text-purple-500' />
            ) : (
              <ImFilePicture />
            )}
            {imgIsUploaded ? uploadedImg : 'Upload Profile Pic'}
          </label>
          <button className='btn' type='submit'>
            Sign Up
          </button>
        </form>
        <p className='text-center'>
          Have an account?{' '}
          <Link href='/login' className='link'>
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
