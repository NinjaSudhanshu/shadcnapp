"use client"

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'

const Page = () => {
  const router = useRouter()

  return (
    <div>
      <main className="mainclass">
        <h1>Next JS with Shad CN Project </h1>
        <div className="buttonbox">
          <Button onClick={() => router.push('/signup')}>Sign Up</Button>
          <Button onClick={() => router.push('/login')}>Login</Button>
        </div>
      </main>
    </div>
  )
}

export default Page
