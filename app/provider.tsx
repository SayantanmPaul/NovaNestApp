"use client"
import React from 'react'
import { ThemeProvider } from 'next-themes'
type Props = {}

const Providers = ({children}) => {
  return (
    <ThemeProvider attribute='class'>{children}</ThemeProvider>
  )
}

export default Providers