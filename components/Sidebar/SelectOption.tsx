'use client'
import cntl from 'cntl'
import React, { ReactElement, useContext, useState } from 'react'
import { Dropdown } from '../Dropdown/Dropdown'
import { IDroprownItem } from '../Dropdown/Dropdown.interface'
import { ListContext } from './listContext'

const classes = {
  dropdownButton: cntl`
  border border-gray-300 px-2 py-2 rounded-md
  flex items-center text-slate-800 text-sm
  hover:bg-gray-100 w-[140px]
  `
}

const dropdownTypes = [
  {
    id: '1',
    type: 'restaurant',
    options: [
      {
        id: '1',
        content: 'Shimla',
      },
      {
        id: '2',
        content: 'Arslan',
      },
    ]
  },
  {
    id: '2',
    type: 'attraction',
    options: [
      {
        id: '1',
        content: 'Science City',
      },
      {
        id: '2',
        content: 'Birla Mandir',
      },
    ]
  },
]

const SelectOption = () => {
  const {restaurant, setRestaurant,
    attraction, setAttraction } = useContext(ListContext)

  const onChangeRestaurant = (item: IDroprownItem): void => {
    setRestaurant(item.content as string)
  }
  const onChangeAttraction = (item: IDroprownItem): void => {
    setAttraction(item.content as string)
  }
  const renderDropdown = () => {
    return dropdownTypes.map((item, i) => {
      return (
        <Dropdown
            key={item.id}
          options={item.options}
          onChange={item.type === "restaurant" ? onChangeRestaurant : onChangeAttraction}
        >
          {(isOpen, setIsOpen): ReactElement => (
            <button className={classes.dropdownButton} onClick={(): void => setIsOpen(!isOpen)}>
              {item.type === "restaurant" 
              ? restaurant || 'Select Restaurant' 
              : attraction || 'Select Attraction'}
            </button>
          )}
        </Dropdown>
      )
    })
  }
  return (
    <div className='flex gap-5 flex-wrap items-center'>
        {renderDropdown()}
     </div>
  )
}

export {SelectOption};