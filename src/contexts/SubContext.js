import React from 'react'

const SubContext = React.createContext()

export const SubContextProvider = SubContext.Provider
export const SubContextConsumer = SubContext.Consumer

export default SubContext