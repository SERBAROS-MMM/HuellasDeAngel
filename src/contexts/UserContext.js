import React, { createContext, useState } from 'react'

const initialState = {}

export const UserContext = createContext(initialState)

export const UserContextStore = ({ children }) => {
  
    const [userLogged, setUserLogged] = useState(initialState)

    return (
    <UserContext.Provider value={{ userLogged, setUserLogged }}>
      {children}
    </UserContext.Provider>
  )
}
