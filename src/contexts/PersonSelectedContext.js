import React, { createContext, useState } from 'react'

const initialState = {}

export const PersonSelectedContext = createContext(initialState)

export const PersonSelectedContextStore = ({ children }) => {
  
    const [personSelected, setPersonSelected] = useState(initialState)

    return (
    <PersonSelectedContext.Provider value={{ personSelected, setPersonSelected }}>
      {children}
    </PersonSelectedContext.Provider>
  )
}
