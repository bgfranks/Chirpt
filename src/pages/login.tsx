import Link from 'next/link'

export default function Login() {
  return (
    <div className='flex flex-col items-center gap-8 my-10'>
      <h1 className='text-4xl'>
        Welcome to <span className='logo'>Chirpt</span>
      </h1>
      <div className='bg-dark-gray w-[60%] rounded-xl py-10'>
        <h2 className='text-center text-2xl pb-5'>Login</h2>
        <form className='flex flex-col items-center gap-2'>
          <input type='email' placeholder='Email' className='input' />
          <input type='password' placeholder='Password' className='input' />
          <button className='btn'>Sign Up</button>
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
