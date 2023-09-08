import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import bookWillItMakeTheBoatGoFaster from '@/images/current/books/will-it-make-the-boat-go-faster.png'
import bookHowToWorkWithAnyone from '@/images/current/books/how-to-work-with-anyone.png'

const books = [
  {
    name: 'How to Work With (Almost) Anyone',
    description:
      'Learning practical ways to navigate different personalities at work. Eye-opening insights on team dynamics and cooperation.',
    link: { href: '#' },
    logo: bookHowToWorkWithAnyone,
    status: 'Currently Reading',
  },
  {
    name: 'Will It Make The Boat Go Faster?',
    description:
      'A compelling exploration of goal-setting and teamwork, offering practical insights on achieving personal and professional excellence. Highly motivating and impactful.',
    link: { href: '/articles/will-it-make-the-boat-go-faster' },
    logo: bookWillItMakeTheBoatGoFaster,
    date: 'August 2023'
  },
]

export default function Projects() {
  return (
    <>
      <Head>
        <title>Current Reading - Stephen McCullough</title>
        <meta
          name="description"
          content="Explore My Reading Journey: Current & Past."
        />
      </Head>
      <SimpleLayout
        title="Explore My Reading Journey: Current & Past."
        intro="Welcome to my personal reading corner. Here, you'll discover the books that have captured my attention recently, as well as those that have left a lasting impression. Explore my reading journey through both current and past reads."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {books.map((book) => (
            <Card as="li" key={book.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={book.logo}
                  alt=""
                  className="h-15 w-15"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={book.link.href}>{book.name}</Card.Link>
              </h2>
              <Card.Description>{book.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                {book.status}
                {book.date}
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
