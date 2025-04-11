import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';
import { Header } from './components/header';
import { Footer } from './components/footer';

export const metadata: Metadata = {
    title: 'Vikas Bhavsar | Web Developer',
    description: 'Portfolio of Vikas Bhavsar, a Web Developer',
}

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className='antialiased text-slate-400 bg-slate-900 p-4'>
                <Header />
                <main className='max-w-3xl mx-auto py-6'>{children}</main>
                <Footer />
            </body>
        </html>
    )
}