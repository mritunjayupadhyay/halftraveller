'use client'
import cntl from 'cntl'
import React, { ReactElement, use, useEffect, useState } from 'react'
import { Dropdown } from '../Dropdown/Dropdown'
import { IDroprownItem } from '../Dropdown/Dropdown.interface'
import { SelectOption } from './SelectOption'
import { ListContext } from './listContext'
import { ItemList } from './ItemList'
import { useGetPlacesMutation } from '@/store/travelAdvisor/travel-advisor.service'

const classes = {
  listContainer: cntl`
  h-screen w-full py-5 px-3
  `,
}

function List() {
  const [restaurant, setRestaurant] = useState("")
  const [attraction, setAttraction] = useState("")
  const [getPlaces, { error, isLoading: isFetching }] = useGetPlacesMutation()

  useEffect(() => {
    (async () => {
      const res = await getPlaces({
        "geoId": 304558
    })
      if (res) {
        console.log('data', res, error, isFetching)
      }
    })()
  }, [])

  return (
    <div className={classes.listContainer}>
      <h4 className='text-black text-base font-bold mb-4'>Atrractions near you</h4>
     <ListContext.Provider value={{restaurant, attraction, setRestaurant, setAttraction}}>
      <SelectOption />
      <ItemList />
     </ListContext.Provider>
    </div>
  )
}

export default List