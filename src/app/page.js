"use client"

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'
import styles from '../app/page.module.css'

const Page = () => {
  const router = useRouter()

  return (

    <main className={styles.mainclass}>
      <h1>Next JS with Shad CN Project </h1>
      <div className={styles.buttonbox}>
        <Button onClick={() => router.push('/signup')}>Sign Up</Button>
        <Button onClick={() => router.push('/login')}>Login</Button>
      </div>
    </main>

  )
}

export default Page
