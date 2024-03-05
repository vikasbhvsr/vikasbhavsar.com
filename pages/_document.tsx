import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='antialiased text-slate-400 bg-slate-900 p-4'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
