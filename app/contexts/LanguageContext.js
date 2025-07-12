// contexts/LanguageContext.js
"use client"

import { createContext, useContext, useEffect, useState } from 'react'

const LanguageContext = createContext()

export const useLanguage = () => useContext(LanguageContext)

export const LanguageProvider = ({ children }) => {
  const [locale, setLocale] = useState('en')
  useEffect(() => {console.log(locale)} , [locale])
  
  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  )
}