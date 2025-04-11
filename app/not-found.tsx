import Link from 'next/link'

export default function NotFound() {
    return (
        <>
            <div className='flex flex-col gap-3 items-center justify-center text-center'>
                <span className='text-xs inline-block px-1.5 py-0.5 border-1 rounded-sm text-red-500 border-red-500'>404 Error</span>
                <h2 className='text-2xl font-bold text-yellow-300'>Page not found!</h2>
                <p className='text-lg'>Sorry, the page you are looking for does not exist.</p>
                <Link className='border px-6 py-2 rounded-sm font-semibold text-base' href="/">Go home!</Link>
            </div>
        </>
    )
}