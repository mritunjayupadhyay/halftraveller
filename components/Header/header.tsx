'use client'
import React from 'react'
import cntl from 'cntl'
import { TextInput } from '../TextInput/TextInput'

const classes = {
    header: cntl`
    absolute w-full h24 flex
    justify-center md:justify-end 
    items-center pt-5 pr-0 md:pr-5
    `
}

function Header() {
    return (
        <header className={classes.header}>
            <TextInput placeholder="Search Here" />
        </header>
    )
}

export {Header}
