'use client'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { Box, Heading } from 'theme-ui'

export default function Hamburg() {
  const router = useRouter()
  /**
   * Will Change this to scrapyard-hamburg.de or scrapyard.de (but that domain is unused and owned by some random company in germany)
   * Most German Companies dont trust international companies / nonprofits
   * Having a german tld would help
   *
   * Thanks,
   * Jack
   */
  if (typeof window !== 'undefined') {
    router.push('https://scraphamburg.vercel.app') // again this is a temporary domain
  }
  return (
    <>
      <Head>
        <title>Redirecting to: Scrapyard Hamburg</title>
      </Head>
      <Box
        sx={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'black',
          color: 'white'
        }}
      >
        <Heading as="h2">Redirecting to our Website</Heading>
      </Box>
    </>
  )
}
