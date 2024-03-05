import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>Vikas Bhavsar</title>
        <meta name="description" content="Vikas Bhavsar's portfolio website." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className='max-w-3xl mx-auto border-b py-8 sticky top-0 bg-slate-900'>
        <div className='flex justify-between items-end'>
          <div>
            <h1 className='text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-pink-400  to-violet-400'>Vikas Bhavsar</h1>
            <p className='font-semibold'>Web Developer</p>
          </div>
          <div>
            <div className='space-x-2'>
              <a href='mailto:vikasbhvsr@gmail.com' title='Email Me!' className='btn-email p-1 bg-yellow-300 rounded inline-block '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-slate-900">
                  <path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
                </svg>
              </a>
              <a title='My GitHub link' href='https://github.com/vikasbhvsr' target='_blank' className='btn-github p-1 bg-yellow-300 rounded inline-block'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" stroke="currentColor" className=" w-6 h-6 text-slate-900"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
              </a>
              <a className='btn-linkedin p-1 bg-yellow-300 rounded inline-block'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" stroke="currentColor" className="w-6 h-6 text-slate-900"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" /></svg>
              </a>
            </div>
          </div>
        </div>
      </nav >
      <main className="max-w-3xl mx-auto divide-y">
        <section className='py-6'>
          <h2 className='text-yellow-300 text-2xl font-bold mb-5'>About Me</h2>
          <p>{`This is a small manifest of my professional career. I don't really know how to sell myself and my skills. Take this as grain of salt. There's more to me than what's presented on this page.`}</p>
        </section>
        <section className='py-6'>
          <h2 className='text-yellow-300 text-2xl font-bold mb-5'>Skills</h2>
          <div>
            <p>Many and none at the same time... depends on what you will ask me to do, I guess.</p>
          </div>
        </section>
        <section className='py-6'>
          <h2 className='text-yellow-300 text-2xl font-bold mb-5'>Experience</h2>
          <div className='space-y-12'>
            <div className='border-l-4 border-violet-300 pl-6 space-y-6'>
              <div className='flex justify-between items-end'>
                <div>
                  <h3 className='text-xl font-semibold'>Web Developer</h3>
                  <p className='text-base'>Golden Hippo</p>
                </div>
                <div className='text-sm'>
                  <span>September 2022 - Present</span>
                </div>
              </div>
              <div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit veniam modi quod consequatur perspiciatis eaque exercitationem officiis, veritatis ipsa. Aliquid corrupti optio culpa accusantium a aperiam animi, aut fugiat officiis, porro voluptatum reprehenderit ipsam! Pariatur aliquam voluptatem ipsa illum minus?</p>
              </div>
              <div className='flex flex-wrap gap-2'>
                <span className='bg-slate-800 rounded py-1 px-2 text-sm shadow'>WordPress</span>
                <span className='bg-slate-800 rounded py-1 px-2 text-sm shadow'>PHP</span>
                <span className='bg-slate-800 rounded py-1 px-2 text-sm shadow'>MySQL</span>
                <span className='bg-slate-800 rounded py-1 px-2 text-sm shadow'>JavaScript</span>
                <span className='bg-slate-800 rounded py-1 px-2 text-sm shadow'>CSS3</span>
                <span className='bg-slate-800 rounded py-1 px-2 text-sm shadow'>HTML5</span>
                <span className='bg-slate-800 rounded py-1 px-2 text-sm shadow'>Tailwind CSS</span>
                <span className='bg-slate-800 rounded py-1 px-2 text-sm shadow'>Git</span>
                <span className='bg-slate-800 rounded py-1 px-2 text-sm shadow'>GitHub</span>
              </div>
            </div>
            <div className='border-l-4 border-violet-300 pl-6 space-y-6'>
              <div className='flex justify-between items-end'>
                <div>
                  <h3 className='text-xl font-semibold'>Director of Web Development</h3>
                  <p className='text-base'>Next Level Marketing</p>
                </div>
                <div className='text-sm'>
                  <span>October 2019 - September 2022</span>
                </div>
              </div>
              <div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit veniam modi quod consequatur perspiciatis eaque exercitationem officiis, veritatis ipsa. Aliquid corrupti optio culpa accusantium a aperiam animi, aut fugiat officiis, porro voluptatum reprehenderit ipsam! Pariatur aliquam voluptatem ipsa illum minus?</p>
              </div>
              <div className='flex flex-wrap gap-2'>
                <span className='bg-slate-800 rounded py-1 px-2 text-sm shadow'>WordPress</span>
                <span className='bg-slate-800 rounded py-1 px-2 text-sm shadow'>Squarespace</span>
                <span className='bg-slate-800 rounded py-1 px-2 text-sm shadow'>Wix</span>
                <span className='bg-slate-800 rounded py-1 px-2 text-sm shadow'>BigCommerce</span>
                <span className='bg-slate-800 rounded py-1 px-2 text-sm shadow'>Shopify</span>
                <span className='bg-slate-800 rounded py-1 px-2 text-sm shadow'>PHP</span>
                <span className='bg-slate-800 rounded py-1 px-2 text-sm shadow'>MySQL</span>
                <span className='bg-slate-800 rounded py-1 px-2 text-sm shadow'>JavaScript</span>
                <span className='bg-slate-800 rounded py-1 px-2 text-sm shadow'>CSS3</span>
                <span className='bg-slate-800 rounded py-1 px-2 text-sm shadow'>HTML5</span>
                <span className='bg-slate-800 rounded py-1 px-2 text-sm shadow'>Laravel</span>
                <span className='bg-slate-800 rounded py-1 px-2 text-sm shadow'>React</span>
                <span className='bg-slate-800 rounded py-1 px-2 text-sm shadow'>Git</span>
                <span className='bg-slate-800 rounded py-1 px-2 text-sm shadow'>GitHub</span>
              </div>
            </div>
            <div className='border-l-4 border-violet-300 pl-6 space-y-6'>
              <div className='flex justify-between items-end'>
                <div>
                  <h3 className='text-xl font-semibold'>Head of Web Development</h3>
                  <p className='text-base'>Dymic Digital</p>
                </div>
                <div className='text-sm'>
                  <span>March 2019 - October 2021</span>
                </div>
              </div>
              <div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit veniam modi quod consequatur perspiciatis eaque exercitationem officiis, veritatis ipsa. Aliquid corrupti optio culpa accusantium a aperiam animi, aut fugiat officiis, porro voluptatum reprehenderit ipsam! Pariatur aliquam voluptatem ipsa illum minus?</p>
              </div>
              <div className='flex flex-wrap gap-2'>
                <span className='bg-slate-800 rounded py-1 px-2 text-sm shadow'>WordPress</span>
                <span className='bg-slate-800 rounded py-1 px-2 text-sm shadow'>Squarespace</span>
                <span className='bg-slate-800 rounded py-1 px-2 text-sm shadow'>Wix</span>
                <span className='bg-slate-800 rounded py-1 px-2 text-sm shadow'>BigCommerce</span>
                <span className='bg-slate-800 rounded py-1 px-2 text-sm shadow'>Shopify</span>
                <span className='bg-slate-800 rounded py-1 px-2 text-sm shadow'>PHP</span>
                <span className='bg-slate-800 rounded py-1 px-2 text-sm shadow'>MySQL</span>
                <span className='bg-slate-800 rounded py-1 px-2 text-sm shadow'>JavaScript</span>
                <span className='bg-slate-800 rounded py-1 px-2 text-sm shadow'>CSS3</span>
                <span className='bg-slate-800 rounded py-1 px-2 text-sm shadow'>HTML5</span>
                <span className='bg-slate-800 rounded py-1 px-2 text-sm shadow'>Laravel</span>
                <span className='bg-slate-800 rounded py-1 px-2 text-sm shadow'>React</span>
                <span className='bg-slate-800 rounded py-1 px-2 text-sm shadow'>Git</span>
                <span className='bg-slate-800 rounded py-1 px-2 text-sm shadow'>GitHub</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
