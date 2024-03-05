import { Html, Head, Main, NextScript } from 'next/document'
import { GoogleTagManager } from '@next/third-parties/google'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='antialiased text-slate-400 bg-slate-900 p-4'>
        <Main />
        <GoogleTagManager gtmId="GTM-W3NQK88B" />
        <NextScript />
      </body>
    </Html>
  )
}
