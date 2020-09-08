import React from 'react'

const OriginContext = React.createContext()

export const OriginContextProvider = OriginContext.Provider
export const OriginContextConsumer = OriginContext.Consumer

export default OriginContext