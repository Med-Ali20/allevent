import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../translation";

export default function HomePage() {
  const { locale, setLocale } = useLanguage();
  // @ts-ignore
  const t = translations[locale];

  return (
    <div className="relative z-50 text-white mr-[4rem] text-[1.5rem] mt-2 lg:mt-0 lg:text-[1rem] lg:-mr-[2rem]">
      <select
        value={locale}
        onChange={(e) => setLocale(e.target.value)}
        className="text-white px-2 py-1 rounded"
      >
        <option value="en">English</option>
        <option value="ar">العربية</option>
      </select>
    </div>
  );
}
