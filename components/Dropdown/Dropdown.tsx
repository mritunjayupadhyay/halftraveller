'use client'

import React, { CSSProperties, FC, useCallback, useState } from 'react'
import { IDropdownProps, IDroprownItem } from './Dropdown.interface';
import { classes } from './style';
import { useOnOutsideClick } from '@/app/hooks/outsideClick';

const dropdownStyle: CSSProperties = {
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
  }

const Dropdown: FC<IDropdownProps> = ({
    children,
  options,
  selected,
  onChange: rawOnChange,
  onClose,
  closeOnChange,
}) => {
    const [isOpen, setIsOpen] = useState(false)
  const openDropdown = useCallback(() => setIsOpen(true), [])
  const closeDropdown = useCallback(() => setIsOpen(false), [])

  const onChange = useCallback(
    (item: IDroprownItem) => {
      return () => {
        rawOnChange?.(item)

        if (closeOnChange) {
          setIsOpen(false)
        }
      }
    },
    [rawOnChange, setIsOpen, closeOnChange],
  )

  const onOusideClick = useCallback(() => {
    closeDropdown()
    onClose?.()
  }, [onClose, closeDropdown])

  const ref = useOnOutsideClick(onOusideClick)
  
  return (
    <div
    ref={ref}
    className={classes.dropdownWrapper()}
  >
    <span onClick={openDropdown}>{children(isOpen, setIsOpen)}</span>
    {isOpen && options.length ? (
        <div
          className={classes.dropdownArea()}
          onMouseEnter={openDropdown}
          onMouseLeave={closeDropdown}
          style={{ display: !isOpen ? 'none' : undefined }}
        >
            <div className={classes.dropdown()} style={dropdownStyle}>
            {options.map((item, i) => (
              <div
                key={i}
                onClick={onChange(item)}
                className={classes.item(
                  i === options.length - 1,
                  selected && selected?.id === item?.id,
                )}
              >
                {item.content}
              </div>
            ))}
          </div>
        </div>
    ): null}
   
  </div>
  )
}

export {Dropdown};