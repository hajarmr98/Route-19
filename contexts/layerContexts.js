
import React from 'react'

const LayersContext = React.createContext()

export const LayersProvider = LayersContext.Provider
export const LayersConsumer = LayersContext.Consumer

export default LayersContext