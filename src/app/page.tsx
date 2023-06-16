'use client';

import { getTrendingData } from './getData';

export default async function Home({ searchParams }: {
  searchParams: object,
}) {
  const genre = searchParams.genre || 'fetchTrending';

  const data = await getTrendingData(genre);

  console.log('getTrendingData', data)
  return (
    <main>
      <p className='text-red-900'>{'Hello'}</p>
    </main>
  )
}
