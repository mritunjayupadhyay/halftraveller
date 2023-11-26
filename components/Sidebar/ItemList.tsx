import React from 'react'
import Item from './Item'

const list = [1, 2, 3, 4, 5, 6, 7]

const ItemList = () => {
  return (
    <div className='mt-5'>
        {list.map((item, i) => {
            return (
                <Item key={i} />
            )
        })}
    </div>
  )
}

export {ItemList}