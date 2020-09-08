import React from 'react'

const MenuContext = React.createContext()

export const MenuContextProvider = MenuContext.Provider
export const MenuContextConsumer = MenuContext.Consumer

export default MenuContext