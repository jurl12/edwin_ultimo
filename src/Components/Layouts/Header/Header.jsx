import React from 'react'
import"./Header.css"
import { Navbar } from '../../Navbar/Navbar'




export const Header = ({children}) => {
  return (
   <header>{children}</header>
  )
}