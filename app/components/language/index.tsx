import { useLanguage } from '../../contexts/LanguageContext'
import { translations } from '../../translation'

export default function HomePage() {
  const { locale, setLocale } = useLanguage()
  // @ts-ignore
  const t = translations[locale]
  
  return (
    <div className='text-white mr-[4rem] lg:-mr-[2rem]'>
      <select value={locale} onChange={(e) => setLocale(e.target.value)}>
        <option value="en">English</option>
        <option value="ar">العربية</option>
      </select>
    </div>
  )
}