import React, { useCallback, useContext, useMemo, useState } from 'react';

const ThemeContext = React.createContext()

export const useTheme = () => useContext(ThemeContext)

export const ThemeContextProvider = () => {
  return (
    <div>
      <ThemeContext.Provider>
      </ThemeContext.Provider>       
    </div>
  )
}
