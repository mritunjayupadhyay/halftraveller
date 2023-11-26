import { Header } from '@/components/Header/header'
import List from '@/components/Sidebar/Sidebar'
import Image from 'next/image'

import { Map } from '@/components/Map/Map';
import cntl from 'cntl';

const classes = {
  listContainer: cntl`
    w-full md:w-1/3 min-h-screen
  `,
  mapContainer: cntl`
  w-full md:w-2/3
  `,
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <div>
      <div className='w-full flex'>
        <div className={classes.listContainer}>
          <List />
        </div>
        <div className={classes.mapContainer}>
          <Map />
        </div>
      </div>
      </div>
    </main>
  )
}
