'use client'
import React from 'react'
import cntl from 'cntl'

const classes = {
    container: cntl`
    w-80 h-11 rounded-3xl flex bg-primary items-center justify-center
    `,
    input: cntl`
    font-medium text-white text-sm 
    w-full h-full bg-transparent 
    outline-none px-6 py-5
    :placeholder-shown:text-white placeholder-shown:opacity-100
    :placeholder:text-white placeholder:opacity-100
    `
};
type Props = {
    placeholder: string
}
export const TextInput = (props: Props) => {
    return (
        <div className={classes.container}>
            <input
                className={classes.input}
                {...props}
            />
        </div>
    )
}