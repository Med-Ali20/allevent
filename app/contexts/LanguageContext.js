// contexts/LanguageContext.js
"use client"

import { createContext, useContext, useEffect, useState } from 'react'

const LanguageContext = createContext()

export const useLanguage = () => useContext(LanguageContext)

export const LanguageProvider = ({ children }) => {
  const [locale, setLocale] = useState('en')

  // Load locale from localStorage on mount
  useEffect(() => {
    const storedLocale = localStorage.getItem('locale')
    if (storedLocale) {
      setLocale(storedLocale)
    }
  }, [])

  // Save locale to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('locale', locale)
  }, [locale])

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  )
}
