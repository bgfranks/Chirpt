import { useState } from 'react'
import { Toaster } from 'react-hot-toast'

// types
import type { AppProps } from 'next/app'

// gobal styles
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Toaster />
    </>
  )
}
