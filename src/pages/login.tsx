import { FormEvent, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

// firebase
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../utils/firebase'
import toast from 'react-hot-toast'

export default function Login() {
  const router = useRouter()

  // state
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  // handle login form submit
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // log in with email and pass then route to home on success
      await signInWithEmailAndPassword(auth, email, password)
      router.push('/')
      setIsLoading(false)
    } catch (error) {
      toast.error('Invalid login credentials. Please try again!')
      setIsLoading(false)
    }
  }

  return (
    <div className='flex flex-col items-center gap-8 my-10'>
      <h1 className='text-4xl'>
        Welcome to <span className='logo'>Chirpt</span>
      </h1>
      <div className='bg-dark-gray w-[60%] rounded-xl py-10'>
        <h2 className='text-center text-2xl pb-5'>Login</h2>
        <form
          className='flex flex-col items-center gap-2'
          onSubmit={handleSubmit}
        >
          <input
            type='email'
            placeholder='Email'
            className='input'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            placeholder='Password'
            className='input'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type='submit' className='btn' disabled={isLoading}>
            Login
          </button>
        </form>
        <p className='text-center'>
          New to Chirpt?{' '}
          <Link href='/signup' className='link'>
            Sign Up
          </Link>
        </p>
      </div>
      <p className='fixed bottom-0 pb-5 text-light-gray text-sm'>
        &copy; Copyright Chirpt 2022
      </p>
    </div>
  )
}
