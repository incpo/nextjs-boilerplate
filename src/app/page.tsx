import Link from 'next/link';

export default function HomePage() {
  return (
    <main className='relative flex min-h-screen flex-col items-center justify-center space-y-3 bg-gradient-to-r from-orange-950 to-[#15162c] text-white'>
      <h1 className='text-3xl font-medium tracking-tighter'>Next.js Starter for your projects</h1>
      <p>Welcome to your new Next.js application!</p>
      <Link
        className='flex h-6 items-center rounded border border-[#2e2e2e] px-3 text-sm  text-white/50'
        href='https://github.com/incpo/nextjs-boilerplate'
        target='_blank'
      >
        Github
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='none'
          className='ml-2 h-4 w-4'
          stroke='currentColor'
          strokeWidth='1'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4' />
          <path d='M9 18c-4.51 2-5-2-7-2' />
        </svg>
      </Link>
    </main>
  );
}
